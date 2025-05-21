import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "@/styles/globalStyles";

export default function BeerDescription({
    description,
}: {
    description: string;
}) {
    return (
        <View style={styles.descriptionSection}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    descriptionSection: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: globalStyles.primaryText.color,
        marginBottom: 8,
    },
    descriptionText: {
        fontSize: 14,
        lineHeight: 20,
        color: globalStyles.secondaryText.color,
    },
});
