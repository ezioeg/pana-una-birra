import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { InfoItemProps } from "@/types/profileTypes";
import { globalStyles } from "@/styles/globalStyles";

export default function InfoItem({ label, value, onPress }: InfoItemProps) {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
            disabled={!onPress}
        >
            <View style={styles.content}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.valueContainer}>
                    <Text style={styles.value}>{value}</Text>
                </View>
            </View>
            <View style={styles.separator} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: globalStyles.primaryBackground.backgroundColor,
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: globalStyles.primaryText.color,
    },
    valueContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    value: {
        fontSize: 16,
        fontWeight: "600",
        color: globalStyles.tertiaryText.color,
    },
    separator: {
        height: 1,
        backgroundColor: globalStyles.secondaryBackground.backgroundColor,
    },
});
