import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { CameraView, Camera } from "expo-camera";
import { globalStyles } from "@/styles/globalStyles";

export default function ScannerScreen() {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getCameraPermissions();
    }, []);

    const handleBarcodeScanned = ({
        type,
        data,
    }: {
        type: string;
        data: string;
    }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <CameraView
                onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
                barcodeScannerSettings={{
                    barcodeTypes: ["ean8", "ean13", "qr"],
                }}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && (
                <TouchableOpacity
                    style={[styles.button]}
                    onPress={() => setScanned(false)}
                >
                    <Text style={styles.buttonText}>TAP TO SCAN AGAIN</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    button: {
        height: 52,
        width: "80%",
        backgroundColor: globalStyles.brand.color,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 24,
    },
    buttonText: {
        color: globalStyles.primaryBackground.backgroundColor,
        fontSize: 16,
        fontWeight: "600",
    },
});
