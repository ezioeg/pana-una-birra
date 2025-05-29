import { HomeIcon, ProfileIcon } from "@/components/common/icons";
import CartIconWithBadge from "@/components/tab/CartIconWithBadge";
import TabButton from "@/components/tab/TabButton";
import { useAuth } from "@/hooks/useAuth";
import { RootState } from "@/redux/store";
import { globalStyles } from "@/styles/globalStyles";
import { Redirect, Tabs } from "expo-router";
import { Platform } from "react-native";
import { useSelector } from "react-redux";

const isAndroid = Platform.OS === "android";

const screenOptions = {
    headerShown: false,
    tabBarStyle: {
        position: "absolute" as "absolute",
        height: 75,
        marginLeft: isAndroid ? 90 : 90,
        marginRight: isAndroid ? 90 : 90,
        bottom: isAndroid ? 10 : 32,
        borderRadius: 40,
        backgroundColor: "#1c232c",
        paddingHorizontal: isAndroid ? 3 : 0,
    },
    tabBarShowLabel: false,
    tabBarActiveTintColor: globalStyles.brand.color,
    tabBarInactiveTintColor: "#9E9E9E",
};

export default function TabLayout() {
    const totalItems = useSelector(
        (state: RootState) => state.cart.totalQuantity
    );

    const { user } = useAuth();

    if (!user) {
        return <Redirect href="/(auth)/login" />;
    }

    return (
        <Tabs screenOptions={screenOptions}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: HomeIcon,
                    tabBarButton: TabButton,
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: "Cart",
                    tabBarIcon: ({ color }) => (
                        <CartIconWithBadge
                            totalItems={totalItems}
                            color={color}
                        />
                    ),
                    tabBarButton: TabButton,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ProfileIcon,
                    tabBarButton: TabButton,
                }}
            />
            <Tabs.Screen
                name="beer-details"
                options={{
                    href: null,
                }}
            />
        </Tabs>
    );
}
