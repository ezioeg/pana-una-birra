import { BackIcon } from "@/components/common/icons";
import { globalStyles } from "@/styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import MapView, { Marker, Polyline, PROVIDER_DEFAULT } from "react-native-maps";

export default function MapScreen() {
    const [location, setLocation] = useState<Location.LocationObject | null>(
        null
    );
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const { status } =
                await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    // Default coordinates (Greenwich Village area)
    const defaultRegion = {
        latitude: 40.7338,
        longitude: -74.0024,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    // Route coordinates
    const routeCoordinates = [
        { latitude: 40.7318, longitude: -74.0055 }, // Start point (car location)
        { latitude: 40.732, longitude: -74.005 },
        { latitude: 40.7325, longitude: -74.004 },
        { latitude: 40.733, longitude: -74.003 },
        { latitude: 40.7335, longitude: -74.002 },
        { latitude: 40.734, longitude: -74.001 },
        { latitude: 40.7345, longitude: -74.0005 }, // End point (destination)
    ];

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_DEFAULT}
                initialRegion={defaultRegion}
                showsUserLocation={true}
                showsMyLocationButton={false}
            >
                {/* Route line */}
                <Polyline
                    coordinates={routeCoordinates}
                    strokeColor={globalStyles.brand.color}
                    strokeWidth={4}
                />

                {/* Brewery marker */}
                <Marker
                    coordinate={routeCoordinates[0]}
                    anchor={{ x: 0.5, y: 0.5 }}
                >
                    {/* <View style={styles.BeerTypesMarket}> */}
                    <Image
                        source={require("@/assets/icons/beer-logo.png")}
                        style={styles.BeerTypesImage}
                    />
                    {/* </View> */}
                </Marker>

                {/* Pana marker */}
                <Marker
                    coordinate={routeCoordinates[routeCoordinates.length - 1]}
                    anchor={{ x: 0.5, y: 0.5 }}
                >
                    <View style={styles.destinationMarker}>
                        <Ionicons
                            name="location"
                            size={24}
                            color={
                                globalStyles.primaryBackground.backgroundColor
                            }
                        />
                    </View>
                </Marker>
            </MapView>

            <View style={styles.headerControls}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => router.back()}
                    >
                        <BackIcon
                            size={30}
                            color={globalStyles.primaryText.color}
                        />
                    </TouchableOpacity>

                    <View style={styles.titleSection}>
                        <Text style={styles.title}>Store BeerTypes Path</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.primaryBackground.backgroundColor,
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },

    headerControls: {
        position: "absolute",
        right: 16,
        top: 50,
        backgroundColor: "transparent",
    },
    BeerTypesMarket: {
        backgroundColor: "red",
        padding: 5,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    BeerTypesImage: {
        width: 60,
        height: 60,
    },
    destinationMarker: {
        backgroundColor: globalStyles.brand.color,
        padding: 8,
        borderRadius: 50,
    },
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
});
