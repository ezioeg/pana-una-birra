import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import DetailsSection from "./DetailsSection";
import QuantityController from "./QuantityController";
import BeerDescription from "./BeerDescription";
import { BeerContentProps } from "@/types/beerTypes";
import { globalStyles } from "@/styles/globalStyles";

export default function BeerContent({
    beer,
    selectedQuantity,
    onQuantityChange,
    description,
    containerStyle,
    imageStyle,
}: BeerContentProps) {
    return (
        <View style={[styles.contentContainer, containerStyle]}>
            <View style={styles.detailsContainer}>
                <View style={styles.detailsLeft}>
                    <DetailsSection
                        label="Alcohol"
                        value={`${beer.alcohol_grade}%`}
                    />
                    <DetailsSection label="Volume" value={`${beer.volume}ml`} />
                    <DetailsSection label="Brand" value={beer.brand} />
                    <DetailsSection label="Origin" value={beer.origin} />
                    <Text style={styles.price}>{beer.price}</Text>
                </View>

                <View style={styles.itemActions}>
                    <QuantityController
                        quantity={selectedQuantity}
                        onIncrement={() => onQuantityChange(true)}
                        onDecrement={() => onQuantityChange(false)}
                    />
                </View>

                <Image
                    source={{ uri: beer.image }}
                    style={[styles.beerImage, imageStyle]}
                />
            </View>

            <BeerDescription description={description} />
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {},
    detailsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginBottom: 50,
        backgroundColor: globalStyles.secondaryBackground.backgroundColor,
        height: 290,
        borderRadius: 12,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    detailsLeft: {
        flex: 1,
    },
    beerImage: {
        width: "30%",
        height: 320,
    },
    price: {
        fontSize: 24,
        fontWeight: "600",
        color: globalStyles.brand.color,
        marginTop: 10,
    },
    itemActions: {
        justifyContent: "flex-end",
        alignItems: "center",
        width: "50%",
        top: 45,
    },
});
