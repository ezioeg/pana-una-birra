import { globalStyles } from "@/styles/globalStyles";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AddToCartIcon, BackIcon } from "../common/icons";

export default function BeerTypesHeader({
    title,
    onAddToCart,
    onBack,
}: {
    title: string;
    onAddToCart: () => void;
    onBack: () => void;
}) {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={onBack}>
                <BackIcon size={30} color={globalStyles.primaryText.color} />
            </TouchableOpacity>
            <View style={styles.titleSection}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity
                style={styles.addToCartButton}
                onPress={onAddToCart}
            >
                <AddToCartIcon
                    size={30}
                    color={globalStyles.primaryText.color}
                    fill={globalStyles.primaryText.color}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,

        backgroundColor: globalStyles.primaryBackground.backgroundColor,
    },
    backButton: {
        padding: 8,
    },
    titleSection: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: globalStyles.primaryText.color,
    },
    addToCartButton: {
        padding: 8,
    },
});
