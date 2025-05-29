import BeerContent from "@/components/beer/BeerContent";
import BeerHeader from "@/components/beer/BeerHeader";
import BeerNotFound from "@/components/beer/BeerNotfound";
import { addToSharedCart } from "@/redux/slices/cartSlice";
import { clearSelectedBeer } from "@/redux/slices/selectedBeerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { globalStyles } from "@/styles/globalStyles";
import { CartItemTypes } from "@/types/cartTypes";
import { router } from "expo-router";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BeerDetail() {
    const dispatch = useAppDispatch();
    const beer = useAppSelector((state) => state.selectedBeer.beer);
    const user = getAuth().currentUser;

    const [selectedQuantity, setSelectedQuantity] = useState(1);

    useEffect(() => {
        return () => {
            dispatch(clearSelectedBeer());
        };
    }, []);

    const handleQuantityChange = (increment: boolean) => {
        setSelectedQuantity((prev) => {
            if (increment) {
                return prev + 1;
            } else {
                return Math.max(1, prev - 1);
            }
        });
    };

    const handleAddToCart = () => {
        if (selectedQuantity < 1) return;
        const cartItem = {
            name: beer?.name,
            price: beer?.price,
            quantity: selectedQuantity,
            brand: beer?.brand,
            image: beer?.image,
            addedBy: user?.email,
        };

        dispatch(addToSharedCart(cartItem as CartItemTypes));
        router.push("/cart");
    };

    if (!beer) {
        return <BeerNotFound message="La cerveza no fue encontrada" />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <BeerHeader
                title={beer.name}
                onAddToCart={handleAddToCart}
                onBack={() => router.back()}
            />
            <BeerContent
                beer={beer}
                selectedQuantity={selectedQuantity}
                onQuantityChange={handleQuantityChange}
                description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ipsa, non magnam quos ratione obcaecati molestiae provident quia tempore minima, at id veniam similique beatae quaerat repellendus sapiente nemo"
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.primaryBackground.backgroundColor,
    },
});
