import { View, Text, StyleSheet } from "react-native";
import { NoCartsIcon } from "../common/icons";
import { EmptyStateProps } from "@/types/emptyStateTypes";
import { globalStyles } from "@/styles/globalStyles";

export default function EmptyState({
    icon = <NoCartsIcon size={80} color={globalStyles.brand.color} />,
    message = "Your cart is empty",
    iconSize = 80,
    iconColor = globalStyles.brand.color,
    containerStyle,
    textStyle,
}: EmptyStateProps) {
    return (
        <View style={[styles.emptyContainer, containerStyle]}>
            {icon || <NoCartsIcon size={iconSize} color={iconColor} />}
            <Text style={[styles.emptyText, textStyle]}>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 75,
    },
    emptyText: {
        marginTop: 12,
        fontSize: 18,
        fontWeight: "600",
        color: globalStyles.primaryText.color,
    },
});
