import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DocumentScannerIcon } from "../common/icons";
import { HomeHeaderProps } from "@/types/homeTypes";
import { globalStyles } from "@/styles/globalStyles";

export default function HomeHeader({
    greeting,
    title,
    onScanPress,
}: HomeHeaderProps) {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.greeting}>{greeting}</Text>
                <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity
                style={styles.scanner}
                onPress={onScanPress}
                accessibilityLabel="Escanear código"
            >
                <DocumentScannerIcon size={40} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    greeting: {
        fontSize: 16,
        color: globalStyles.secondaryText.color,
        marginBottom: 4,
    },
    title: {
        fontSize: 28,
        fontWeight: "600",
        color: globalStyles.primaryText.color,
        marginBottom: 20,
    },
    scanner: {
        top: 20,
    },
});
