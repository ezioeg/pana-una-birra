import React from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import { CameraIcon } from "../common/icons";
import ProfileHead from "./ProfileHead";
import { ProfileHeaderProps } from "@/types/profileTypes";
import { globalStyles } from "@/styles/globalStyles";

export default function ProfileHeader({
    onBack,
    profileImage = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
}: ProfileHeaderProps) {
    return (
        <View style={styles.header}>
            <ProfileHead title="Account" onBack={onBack} />

            <View style={styles.profileSection}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: profileImage }}
                        style={styles.profileImage}
                    />
                    <Pressable style={styles.cameraButton}>
                        <CameraIcon size={20} color="white" />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: globalStyles.primaryBackground.backgroundColor,
    },
    profileSection: {
        alignItems: "center",
        marginBottom: 30,
    },
    imageContainer: {
        position: "relative",
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    cameraButton: {
        position: "absolute",
        right: 0,
        bottom: 0,
        backgroundColor: globalStyles.brand.color,
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: globalStyles.primaryBackground.backgroundColor,
    },
});
