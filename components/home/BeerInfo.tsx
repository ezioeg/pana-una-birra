import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BeerInfoTypes } from "@/types/beerTypes";
import { globalStyles } from "@/styles/globalStyles";

export const BeerInfo: React.FC<BeerInfoTypes> = ({
    item,
    styles: customStyles,
}) => {
    return (
        <View style={[defaultStyles.BeerTypesInfo, customStyles?.container]}>
            <Text style={[defaultStyles.BeerTypesName, customStyles?.name]}>
                {item.name}
            </Text>
            <Text style={[defaultStyles.BeerTypesType, customStyles?.type]}>
                {item.brand}
            </Text>
            <Text style={[defaultStyles.BeerTypesPrice, customStyles?.price]}>
                $
                {typeof item.price === "number"
                    ? item.price.toFixed(2)
                    : item.price}
            </Text>
        </View>
    );
};

const defaultStyles = StyleSheet.create({
    BeerTypesInfo: {
        padding: 12,
        bottom: 90,
    },
    BeerTypesName: {
        fontSize: 16,
        fontWeight: "600",
        color: globalStyles.primaryText.color,
        marginBottom: 4,
    },
    BeerTypesType: {
        fontSize: 14,
        color: globalStyles.secondaryText.color,
        marginBottom: 8,
    },
    BeerTypesPrice: {
        fontSize: 16,
        fontWeight: "600",
        color: globalStyles.brand.color,
    },
});
