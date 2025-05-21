import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { BackIcon, CheckoutIcon, MapIcon } from "@/components/common/icons";
import { globalStyles } from "@/styles/globalStyles";

export default function CartHeader({
    title,
    onBack,
    onMap,
    onCheckout,
}: {
    title: string;
    onBack: () => void;
    onMap: () => void;
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

            <TouchableOpacity style={styles.checkoutButton} onPress={onMap}>
                <MapIcon size={30} color={globalStyles.primaryText.color} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.checkoutButton}
                onPress={onCheckout}
            >
                <CheckoutIcon
                    size={30}
                    color={globalStyles.primaryText.color}
                />
            </TouchableOpacity>
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
        width: "62%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "14%",
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        color: globalStyles.primaryText.color,
    },
    checkoutButton: {
        width: "14%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
});
