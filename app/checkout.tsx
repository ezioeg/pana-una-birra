import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    SafeAreaView,
    Image,
} from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
    CreditCardIcon,
    PayPalIcon,
    BankIcon,
    DropdownIcon,
} from "@/components/common/icons";
import CheckoutHeader from "@/components/checkout/CheckoutHeader";
import CartHeader from "@/components/cart/CartHeader";
import { globalStyles } from "@/styles/globalStyles";

export default function CheckoutScreen() {
    const [selectedMethod, setSelectedMethod] = useState("card"); // 'card', 'paypal', 'bank'

    // Renderiza el formulario según el método seleccionado
    const renderForm = () => {
        switch (selectedMethod) {
            case "card":
                return (
                    <View style={styles.formContainer}>
                        <View style={styles.cardSelector}>
                            <Image
                                source={{
                                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png",
                                }}
                                style={styles.cardLogo}
                            />
                            <Text style={styles.cardText}>Master card</Text>
                            <DropdownIcon
                                size={15}
                                color={globalStyles.secondaryText.color}
                            />
                        </View>

                        <Text style={styles.inputLabel}>Card Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Card Number"
                            keyboardType="number-pad"
                        />

                        <View style={styles.rowContainer}>
                            <View style={styles.halfInput}>
                                <Text style={styles.inputLabel}>
                                    Valid Thru
                                </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="MM/YY"
                                    keyboardType="number-pad"
                                />
                            </View>
                            <View style={styles.halfInput}>
                                <Text style={styles.inputLabel}>CVV</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="CVV"
                                    keyboardType="number-pad"
                                    secureTextEntry
                                />
                            </View>
                        </View>
                    </View>
                );

            case "paypal":
                return (
                    <View style={styles.formContainer}>
                        <Text style={styles.paypalText}>
                            Add your paypal email address or add new one
                        </Text>
                        <Text style={styles.paypalSubText}>
                            This need for product delivery
                        </Text>

                        <View style={styles.paypalEmailContainer}>
                            <View style={styles.emailRow}>
                                <PayPalIcon />
                                <Text style={styles.emailText}>
                                    paupal@mydomain.net
                                </Text>
                                <View style={styles.radioSelected} />
                            </View>

                            <View style={styles.divider} />

                            <View style={styles.emailRow}>
                                <PayPalIcon />
                                <Text style={styles.emailText}>
                                    sales@mydomain.net
                                </Text>
                                <View style={styles.radioUnselected} />
                            </View>
                        </View>
                    </View>
                );

            case "bank":
                return (
                    <View style={styles.formContainer}>
                        <Text style={styles.inputLabel}>
                            Name of Beneficiary
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter beneficiary name"
                        />

                        <Text style={styles.inputLabel}>Name of Bank</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter bank name"
                        />

                        <Text style={styles.inputLabel}>Account Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter account number"
                            keyboardType="number-pad"
                        />
                    </View>
                );

            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />

            <CheckoutHeader
                title="Checkout"
                onBack={() => router.back()}
                onCheckout={() => {}}
            />

            <ScrollView style={styles.scrollView}>
                <View style={styles.methodSelector}>
                    <TouchableOpacity
                        style={[
                            styles.methodButton,
                            selectedMethod === "card" &&
                                styles.selectedMethodButton,
                        ]}
                        onPress={() => setSelectedMethod("card")}
                    >
                        <View style={styles.icon}>
                            <CreditCardIcon />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.methodButton,
                            selectedMethod === "paypal" &&
                                styles.selectedMethodButton,
                        ]}
                        onPress={() => setSelectedMethod("paypal")}
                    >
                        <View style={styles.icon}>
                            <PayPalIcon />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.methodButton,
                            selectedMethod === "bank" &&
                                styles.selectedMethodButton,
                        ]}
                        onPress={() => setSelectedMethod("bank")}
                    >
                        <View style={styles.icon}>
                            <BankIcon />
                        </View>
                    </TouchableOpacity>
                </View>

                {renderForm()}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.secondaryBackground.backgroundColor,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        backgroundColor: globalStyles.secondaryBackground.backgroundColor,
    },
    backButton: {
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#002855",
    },
    scrollView: {
        flex: 1,
    },
    methodSelector: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    methodButton: {
        width: "30%",
        height: 60,
        borderRadius: 10,
        backgroundColor: globalStyles.primaryBackground.backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: globalStyles.border.color,
    },
    selectedMethodButton: {
        borderColor: globalStyles.brand.color,
        borderWidth: 2,
    },
    icon: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    formContainer: {
        backgroundColor: globalStyles.primaryBackground.backgroundColor,
        borderRadius: 10,
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 20,
    },
    cardSelector: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: globalStyles.primaryBackground.backgroundColor,
        borderRadius: 10,
        padding: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: globalStyles.border.color,
    },
    cardLogo: {
        width: 40,
        height: 25,
        resizeMode: "contain",
    },
    cardText: {
        flex: 1,
        marginLeft: 10,
        color: "#666",
    },
    inputLabel: {
        fontSize: 16,
        color: "#333",
        marginBottom: 8,
    },
    input: {
        backgroundColor: globalStyles.primaryBackground.backgroundColor,
        borderRadius: 10,
        padding: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: globalStyles.border.color,
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    halfInput: {
        width: "48%",
    },
    paypalText: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 4,
    },
    paypalSubText: {
        fontSize: 14,
        color: globalStyles.secondaryText.color,
        textAlign: "center",
        marginBottom: 20,
    },
    paypalEmailContainer: {
        backgroundColor: globalStyles.primaryBackground.backgroundColor,
        borderRadius: 10,
        padding: 8,
        borderWidth: 1,
        borderColor: globalStyles.border.color,
    },
    emailRow: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
    },
    emailText: {
        flex: 1,
        marginLeft: 10,
        color: "#333",
    },
    radioSelected: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 6,
        borderColor: globalStyles.brand.color,
        backgroundColor: globalStyles.primaryBackground.backgroundColor,
    },
    radioUnselected: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: globalStyles.secondaryText.color,
        backgroundColor: globalStyles.primaryBackground.backgroundColor,
    },
    divider: {
        height: 1,
        backgroundColor: globalStyles.border.color,
    },
});
