import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "@/styles/globalStyles";

export default function BeerNotFound({ message }: { message: string }) {
    return (
        <View style={styles.container}>
            <Text>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.primaryBackground.backgroundColor,
    },
});
