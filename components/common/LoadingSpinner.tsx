import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { LoadingSpinnerProps } from "@/types/loadingSpinnerProps";
import { globalStyles } from "@/styles/globalStyles";

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = "large",
    color = globalStyles.brand.color,
    containerStyle,
}) => {
    return (
        <View style={[styles.loadingContainer, containerStyle]}>
            <ActivityIndicator size={size} color={color} />
        </View>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
