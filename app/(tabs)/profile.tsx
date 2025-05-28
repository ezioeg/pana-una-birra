import CustomButton from "@/components/common/CustomButton";
import InfoItem from "@/components/profile/InfoItem";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { firebaseAuth } from "@/firebase/config";
import { logout } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/redux/store";
import { globalStyles } from "@/styles/globalStyles";
import { router } from "expo-router";
import React from "react";
import { Alert, StyleSheet, View } from "react-native";

export default function AccountScreen() {
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        try {
            await dispatch(logout()).unwrap();
            router.replace("/(auth)/login");
        } catch (error) {
            Alert.alert("Error", "No se pudo cerrar la sesión");
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <ProfileHeader onBack={() => router.back()} />

            <View style={styles.profilecard}>
                <InfoItem
                    label="Email"
                    value={firebaseAuth.currentUser?.email || ""}
                    onPress={() => {}}
                />
                <InfoItem label="Name" value="John Doe" onPress={() => {}} />
                <InfoItem
                    label="Phone"
                    value="(123) 456-7890"
                    onPress={() => {}}
                />
            </View>

            <CustomButton
                title="LOGOUT"
                onPress={handleLogout}
                style={styles.button}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.secondaryBackground.backgroundColor,
    },
    profilecard: {
        margin: 16,
    },
    button: {
        height: 52,
        backgroundColor: globalStyles.brand.color,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
        marginHorizontal: 16,
    },
});
