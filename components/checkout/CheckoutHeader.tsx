import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { BackIcon } from "@/components/common/icons";
import { globalStyles } from "@/styles/globalStyles";

export default function CheckoutHeader({
    title,
    onBack,
    onCheckout,
}: {
    title: string;
    onBack: () => void;
    onCheckout: () => void;
}) {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={onBack}>
                <BackIcon size={30} color={globalStyles.primaryText.color} />
            </TouchableOpacity>

            <View style={styles.titleSection}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    backButton: {
        width: "10%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    titleSection: {
        width: "80%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        color: globalStyles.primaryText.color,
    },
    checkoutButton: {
        width: "10%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
});
