import { StyleSheet, View, FlatList } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
    updateCartItemQuantity,
    removeFromSharedCart,
} from "@/redux/slices/cartSlice";
import CartHeader from "@/components/cart/CartHeader";
import CartSummary from "@/components/cart/CartSummary";
import { CartItem } from "@/components/cart/CartItem";
import CartTitleCounter from "@/components/cart/CartTitleCounter";
import EmptyState from "@/components/common/EmptyState";
import { globalStyles } from "@/styles/globalStyles";

export default function CartScreen() {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.cart.items);

    const handleUpdateQuantity = (id: string, increment: boolean) => {
        const item = items.find((i) => i.id === id);
        if (item) {
            const newQuantity = increment
                ? item.quantity + 1
                : item.quantity - 1;
            dispatch(updateCartItemQuantity({ id, quantity: newQuantity }));
        }
    };

    const handleRemoveItem = (id: string) => {
        dispatch(removeFromSharedCart(id));
    };

    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const tax = subtotal * 0.15;
    const total = subtotal + tax;

    return (
        <SafeAreaView style={styles.container}>
            {items.length === 0 ? (
                <EmptyState />
            ) : (
                <>
                    <CartHeader
                        title="Cart"
                        onBack={() => router.back()}
                        onMap={() => router.push("/maps")}
                        onCheckout={() => {
                            router.push("/checkout");
                        }}
                    />
                    <CartTitleCounter
                        count={items.length}
                        text="items available"
                    />
                    <FlatList
                        style={styles.itemList}
                        data={items}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <CartItem
                                item={item}
                                onUpdateQuantity={handleUpdateQuantity}
                                onRemove={handleRemoveItem}
                            />
                        )}
                    />
                    <View>
                        <CartSummary
                            subtotal={subtotal}
                            tax={tax}
                            total={total}
                        />
                    </View>
                </>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.secondaryBackground.backgroundColor,
    },
    itemList: {
        flex: 1,
    },
});
