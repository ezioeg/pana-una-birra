import { StyleSheet } from "react-native";

export const colors = {
    brand: "#FFC107",
    error: "red",
    textButton: "#fff",
    text: {
        primary: "#111827",
        secondary: "#6B7280",
        tertiary: "#9CA3AF",
    },
    background: {
        primary: "#fff",
        secondary: "#eeeeee",
    },
    border: {
        primary: "#e0e0e0",
    },
};

export const globalStyles = StyleSheet.create({
    primaryText: {
        color: colors.text.primary,
        fontWeight: "600",
    },
    secondaryText: {
        color: colors.text.secondary,
    },
    tertiaryText: {
        color: colors.text.tertiary,
    },
    primaryBackground: {
        backgroundColor: colors.background.primary,
    },
    secondaryBackground: {
        backgroundColor: colors.background.secondary,
    },
    brand: {
        color: colors.brand,
    },
    error: {
        color: colors.error,
    },
    textButton: {
        color: colors.textButton,
    },
    border: {
        color: colors.border.primary,
    },
});
