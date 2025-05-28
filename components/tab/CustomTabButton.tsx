import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { TabButtonProps } from "@/types/tabButtonTypes";
import { globalStyles } from "@/styles/globalStyles";

export default function CustomTabButton({
    children,
    onPress,
    accessibilityState,
}: TabButtonProps) {
    const isSelected = accessibilityState?.selected;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.tabButton]}>
            <View style={[isSelected && styles.selectedCircle]}>
                {children}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    tabButton: {
        height: 75,
        alignItems: "center",
        justifyContent: "center",
    },
    selectedCircle: {
        width: 65,
        height: 65,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: globalStyles.primaryBackground.backgroundColor,
    },
});
