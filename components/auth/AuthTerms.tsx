import { globalStyles } from "@/styles/globalStyles";
import React from "react";
import { StyleSheet, Text } from "react-native";

export default function AuthTerms() {
    return (
        <Text style={styles.terms}>
            By signing up, you agree to our{" "}
            <Text style={styles.termsLink}>Terms of Service</Text> and{" "}
            <Text style={styles.termsLink}>Privacy Policy</Text>
        </Text>
    );
}

const styles = StyleSheet.create({
    terms: {
        fontSize: 14,
        color: globalStyles.secondaryText.color,
        marginBottom: 24,
        lineHeight: 20,
    },
    termsLink: {
        color: globalStyles.brand.color,
        fontWeight: "500",
    },
});
