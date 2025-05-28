import AuthDivider from "@/components/auth/AuthDivider";
import AuthHeader from "@/components/auth/AuthHeader";
import CustomButton from "@/components/common/CustomButton";
import {
    FingerPrintIcon,
    HidePasswordIcon,
    ShowPasswordIcon,
} from "@/components/common/icons";
import { firebaseAuth } from "@/firebase/config";
import { login } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/redux/store";
import { globalStyles } from "@/styles/globalStyles";
import { FirebaseErrorCodeTypes } from "@/types/firebaseErrorCodeTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import { Href, Link, router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import {
    Alert,
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Login() {
    const dispatch = useAppDispatch();
    const passwordRef = useRef<TextInput>(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [isBiometricAvailable, setIsBiometricAvailable] = useState(false);

    useEffect(() => {
        checkBiometricSupport();
    }, []);

    const handleLogin = async () => {
        setError("");

        if (!validateForm()) return;

        try {
            setLoading(true);
            await dispatch(login({ email, password })).unwrap();

            router.replace("/(tabs)" as Href);
        } catch (err) {
            handleFirebaseError(err as FirebaseErrorCodeTypes);
        } finally {
            setLoading(false);
        }
        Keyboard.dismiss();
    };

    const handleFingerPrintLogin = async () => {
        try {
            if (!isBiometricAvailable) {
                Alert.alert(
                    "Error",
                    "La autenticación biométrica no está disponible."
                );
                return;
            }

            const result = await LocalAuthentication.authenticateAsync({
                promptMessage: "Inicia sesión con tu huella dactilar",
                fallbackLabel: "Usar contraseña",
            });

            if (!result.success) {
                Alert.alert("Error", "Autenticación biométrica fallida.");
                return;
            }

            const storedEmail = await AsyncStorage.getItem("userEmail");
            const storedPassword = await AsyncStorage.getItem("userPassword");

            if (!firebaseAuth || !storedEmail || !storedPassword) {
                Alert.alert("Error", "No se encontró información de usuario.");
                return;
            }

            const userCredential = await signInWithEmailAndPassword(
                firebaseAuth,
                storedEmail,
                storedPassword
            );

            Alert.alert(
                "Éxito",
                `Bienvenido de nuevo, ${userCredential.user.email}`
            );
            router.replace("/(tabs)" as Href);
        } catch (error) {
            Alert.alert(
                "Error",
                "Ocurrió un error al intentar autenticar con biometría."
            );
            console.log(error);
        }
    };

    const validateForm = () => {
        if (!email.trim() || !password.trim()) {
            setError("Please fill in all fields");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Invalid email format");
            return false;
        }
        return true;
    };

    const handleFirebaseError = (errorCode: FirebaseErrorCodeTypes) => {
        switch (errorCode) {
            case "auth/invalid-email":
                setError("Invalid email address");
                break;
            case "auth/user-disabled":
                setError("Account disabled");
                break;
            case "auth/user-not-found":
                setError("User not found");
                break;
            case "auth/wrong-password":
                setError("Incorrect password");
                break;
            case "auth/too-many-requests":
                setError("Too many attempts. Try later");
                break;
            default:
                setError("Login failed. Try again");
        }
    };

    const checkBiometricSupport = async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();

        if (hasHardware && isEnrolled) {
            setIsBiometricAvailable(true);
        }
    };

    return (
        <View style={styles.container}>
            <AuthHeader
                title="Welcome back Pana"
                logo={require("../../assets/icons/beer-logo.png")}
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        editable={!loading}
                        onSubmitEditing={() => passwordRef.current?.focus()}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        ref={passwordRef}
                        style={[styles.input, styles.passwordInput]}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        editable={!loading}
                        returnKeyType="go"
                        onSubmitEditing={handleLogin}
                    />
                    <Pressable
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.eyeIcon}
                        disabled={loading}
                    >
                        {showPassword ? (
                            <HidePasswordIcon size={20} color="#666" />
                        ) : (
                            <ShowPasswordIcon size={20} color="#666" />
                        )}
                    </Pressable>
                </View>

                <CustomButton
                    title={loading ? "LOGGING IN..." : "LOGIN"}
                    onPress={handleLogin}
                    disabled={loading}
                />

                <Text style={styles.forgotPassword}>Forgot your password?</Text>

                <AuthDivider text="Or" />

                <TouchableOpacity
                    style={styles.fingerPrintContainer}
                    onPress={handleFingerPrintLogin}
                >
                    <FingerPrintIcon size={70} color="#666" />
                </TouchableOpacity>

                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>
                        Dont have an account?{" "}
                    </Text>
                    <Link href="/register" asChild>
                        <Pressable disabled={loading}>
                            <Text style={styles.signupLink}>Sign up</Text>
                        </Pressable>
                    </Link>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.primaryBackground.backgroundColor,
        paddingHorizontal: 24,
    },
    form: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: globalStyles.secondaryBackground.backgroundColor,
        borderRadius: 12,
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    input: {
        flex: 1,
        height: 52,
        fontSize: 16,
        color: "#1a1a1a",
    },
    passwordInput: {
        paddingRight: 40,
    },
    eyeIcon: {
        position: "absolute",
        right: 16,
        height: "100%",
        justifyContent: "center",
    },
    error: {
        color: "#ff0000",
        textAlign: "center",
        marginBottom: 10,
        fontSize: 14,
    },
    forgotPassword: {
        color: globalStyles.secondaryText.color,
        textAlign: "right",
        marginBottom: 24,
        fontSize: 14,
    },
    signupContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "auto",
        marginBottom: 32,
    },
    signupText: {
        color: globalStyles.secondaryText.color,
        fontSize: 16,
    },
    signupLink: {
        color: globalStyles.brand.color,
        fontSize: 16,
        fontWeight: "600",
    },
    fingerPrintContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
    },
});
