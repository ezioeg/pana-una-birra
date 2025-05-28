import { View, Text, StyleSheet } from "react-native";
import { CartIcon } from "@/components/common/icons";

export default function CartIconWithBadge({
    totalItems,
    color,
}: {
    totalItems: number;
    color: string;
}) {
    return (
        <View>
            <CartIcon size={24} color={color} />
            {totalItems > 0 && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{totalItems}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        position: "absolute",
        left: 15,
        bottom: 15,
        backgroundColor: "red",
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    badgeText: {
        color: "white",
        fontSize: 12,
        fontWeight: "600",
    },
});
