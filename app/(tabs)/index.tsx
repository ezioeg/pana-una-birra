import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
} from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAuth } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setSelectedBeer } from "@/redux/slices/selectedBeerSlice";
import { getBeers } from "@/redux/slices/beersSlice";
import { subscribeToSharedCart } from "@/redux/slices/cartSlice";
import HomeHeader from "@/components/home/HomeHeader";
import { BeerInfo } from "@/components/home/BeerInfo";
import { BeerTypes } from "@/types/beerTypes";
import { globalStyles } from "@/styles/globalStyles";

export default function HomeScreen() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const beers = useAppSelector((state) => state.beers.items);
    const loading = useAppSelector((state) => state.beers.loading);

    useEffect(() => {
        const user = getAuth().currentUser;
        if (user) {
            dispatch(getBeers());
            dispatch(subscribeToSharedCart());
        }
    }, [dispatch]);

    const handleBeerPress = (beer: BeerTypes) => {
        dispatch(setSelectedBeer(beer));
        router.push("/beer-details");
    };

    const handleScanPress = () => {
        router.push("/scanner");
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={beers}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.grid}
                initialNumToRender={4}
                ListHeaderComponent={
                    <HomeHeader
                        greeting="Welcome back"
                        title="Featured Beers"
                        onScanPress={handleScanPress}
                    />
                }
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.beerCard}
                        onPress={() => handleBeerPress(item)}
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={styles.beerImage}
                        />
                        <BeerInfo item={item} />
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        backgroundColor: globalStyles.primaryBackground.backgroundColor,
    },
    grid: {
        paddingHorizontal: 16,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    beerCard: {
        width: "48%",
        height: 210,
        backgroundColor: globalStyles.secondaryBackground.backgroundColor,
        borderRadius: 12,
        marginVertical: 45,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    beerImage: {
        width: "100%",
        height: 200,
        bottom: 80,
    },
});
