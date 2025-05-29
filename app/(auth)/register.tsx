import AuthHeader from "@/components/auth/AuthHeader";
import CustomButton from "@/components/common/CustomButton";
import { HidePasswordIcon, ShowPasswordIcon } from "@/components/common/icons";
import { register } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/redux/store";
import { globalStyles } from "@/styles/globalStyles";
import { FirebaseErrorCodeTypes } from "@/types/firebaseErrorCodeTypes";
import { Href, Link, router } from "expo-router";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Signup() {
    const dispatch = useAppDispatch();
    const addressRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSignup = async () => {
        setError("");

        if (!name.trim() || !email.trim() || !password.trim()) {
            setError("Please fill in all fields");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        try {
            setLoading(true);
            await dispatch(register({ email, name, password })).unwrap();

            router.replace("/(tabs)" as Href);
        } catch (err) {
            handleFirebaseError(err as FirebaseErrorCodeTypes);
        } finally {
            setLoading(false);
        }
    };

    const handleFirebaseError = (errorCode: FirebaseErrorCodeTypes) => {
        switch (errorCode) {
            case "auth/email-already-in-use":
                setError("Email is already registered");
                break;
            case "auth/invalid-email":
                setError("Invalid email address");
                break;
            case "auth/weak-password":
                setError("Password is too weak");
                break;
            default:
                setError("Registration failed. Please try again");
        }
    };

    return (
        <View style={styles.container}>
            <AuthHeader
                title="Create Account"
                logo={require("../../assets/icons/beer-logo.png")}
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        value={name}
                        onChangeText={setName}
                        autoCapitalize="words"
                        editable={!loading}
                        onSubmitEditing={() => addressRef.current?.focus()}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        ref={addressRef}
                        style={styles.input}
                        placeholder="Email Address"
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
                        onSubmitEditing={handleSignup}
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
                    title={loading ? "CREATING ACCOUNT..." : "SIGN UP"}
                    onPress={handleSignup}
                    disabled={loading}
                />

                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>
                        Already have an account?{" "}
                    </Text>
                    <Link href="/login" asChild>
                        <Pressable disabled={loading}>
                            <Text style={styles.loginLink}>Login</Text>
                        </Pressable>
                    </Link>
                </View>

                {/* <AuthTerms /> */}
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
    loginContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 32,
    },
    loginText: {
        color: globalStyles.secondaryText.color,
        fontSize: 16,
    },
    loginLink: {
        color: globalStyles.brand.color,
        fontSize: 16,
        fontWeight: "600",
    },
    error: {
        color: globalStyles.error.color,
        fontSize: 16,
    },
});
