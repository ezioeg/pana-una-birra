import React from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import { CustomButtonProps } from "@/types/customButtonTypes";
import { globalStyles } from "@/styles/globalStyles";

export default function CustomButton({
    title,
    onPress,
    style,
    textStyle,
    disabled = false,
    loading = false,
    iconLeft,
    iconRight,
    disabledStyle,
    disabledTextStyle,
    loadingIndicator,
}: CustomButtonProps) {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                style,
                disabled && [styles.disabledButton, disabledStyle],
                loading && styles.loadingButton,
            ]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.8}
        >
            {loading ? (
                loadingIndicator || <ActivityIndicator color="#fff" />
            ) : (
                <>
                    {iconLeft && <>{iconLeft}</>}
                    <Text
                        style={[
                            styles.buttonText,
                            textStyle,
                            disabled && [
                                styles.disabledText,
                                disabledTextStyle,
                            ],
                        ]}
                    >
                        {title}
                    </Text>
                    {iconRight && <>{iconRight}</>}
                </>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 52,
        backgroundColor: globalStyles.brand.color,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 24,
        flexDirection: "row",
        gap: 8,
    },
    buttonText: {
        color: globalStyles.primaryBackground.backgroundColor,
        fontSize: 16,
        fontWeight: "600",
        includeFontPadding: false,
    },
    disabledButton: {
        opacity: 0.6,
    },
    disabledText: {
        opacity: 0.8,
    },
    loadingButton: {
        opacity: 0.8,
    },
});
