import { ActivityIndicator, View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { useAuth } from "@/hooks/useAuth";

function AppLayout() {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>
            {!user ? (
                <Stack.Screen name="(auth)" />
            ) : (
                <Stack.Screen name="(tabs)" />
            )}
        </Stack>
    );
}

export default function RootLayout() {
    return (
        <Provider store={store}>
            <AppLayout />
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
