import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { XIcon, MinusIcon, PlusIcon } from "@/components/common/icons";
import { CartItemTypesProps } from "@/types/cartTypes";
import { globalStyles } from "@/styles/globalStyles";

export const CartItem = ({
    item,
    onUpdateQuantity,
    onRemove,
}: CartItemTypesProps) => {
    const handleIncrement = () => {
        if (item.quantity < 36) {
            onUpdateQuantity(item.id, true);
        }
    };

    const handleDecrement = () => {
        if (item.quantity > 1) {
            onUpdateQuantity(item.id, false);
        }
    };

    function extraerNombreUsuarioSeguro(email: string) {
        // Verifica que sea string y contenga @
        if (typeof email !== "string" || !email.includes("@")) {
            return email || ""; // Devuelve cadena vacía si es undefined/null
        }

        return email.split("@")[0];
    }

    return (
        <View style={styles.CartItemTypes}>
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.itemImage}
                    />
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemCategory}>{item.brand}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>${item.price}</Text>
                    </View>
                    <View style={styles.addedByContainer}>
                        <Text style={styles.addedByText}>
                            {extraerNombreUsuarioSeguro(item.addedBy)}
                        </Text>
                    </View>
                </View>

                <View style={styles.actionsContainer}>
                    <TouchableOpacity
                        onPress={() => onRemove(item.id)}
                        style={styles.removeButton}
                    >
                        <XIcon size={22} color="black" />
                    </TouchableOpacity>

                    <View style={styles.itemActions}>
                        <View style={styles.quantityControls}>
                            <TouchableOpacity
                                onPress={handleDecrement}
                                style={styles.quantityButton}
                                disabled={item.quantity <= 1}
                            >
                                <MinusIcon
                                    size={16}
                                    color={item.quantity > 1 ? "black" : "gray"}
                                />
                            </TouchableOpacity>

                            <Text style={styles.selectedQuantity}>
                                {item.quantity}
                            </Text>

                            <TouchableOpacity
                                onPress={handleIncrement}
                                style={styles.quantityButton}
                                disabled={item.quantity >= 36}
                            >
                                <PlusIcon
                                    size={16}
                                    color={
                                        item.quantity < 99 ? "black" : "gray"
                                    }
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    CartItemTypes: {
        backgroundColor: globalStyles.primaryBackground.backgroundColor,
        marginHorizontal: 20,
        marginVertical: 8,
        padding: 16,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    contentContainer: {
        flexDirection: "row",
    },
    imageContainer: {
        width: "30%",
        justifyContent: "center",
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 6,
    },
    infoContainer: {
        width: "40%",
        justifyContent: "space-between",
    },
    actionsContainer: {
        width: "30%",
        justifyContent: "space-between",
    },
    removeButton: {
        alignItems: "flex-end",
    },
    itemActions: {
        alignItems: "flex-end",
    },
    itemName: {
        fontSize: 16,
        fontWeight: "600",
        color: globalStyles.primaryText.color,
    },
    itemCategory: {
        fontSize: 14,
        color: globalStyles.secondaryText.color,
        marginTop: 2,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    price: {
        fontSize: 16,
        fontWeight: "600",
        color: globalStyles.brand.color,
        marginRight: 8,
    },
    quantityControls: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
    },
    quantityButton: {
        padding: 8,
        backgroundColor: globalStyles.secondaryBackground.backgroundColor,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    selectedQuantity: {
        fontSize: 16,
        fontWeight: "500",
        marginHorizontal: 12,
        color: globalStyles.primaryText.color,
    },
    disabledButton: {
        opacity: 0.5,
    },
    addedByContainer: {
        position: "absolute",
        top: -25,
        backgroundColor: globalStyles.brand.color,
        borderRadius: 12,
        paddingVertical: 5,
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    addedByText: {
        color: "white",
        fontSize: 13,
        fontWeight: "600",
    },
});
