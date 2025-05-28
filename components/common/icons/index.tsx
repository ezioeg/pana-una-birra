import React from "react";
import {
    AntDesign,
    Entypo,
    FontAwesome5,
    Ionicons,
    MaterialIcons,
} from "@expo/vector-icons";

const iconProps = {
    size: 24,
    color: "black",
};

// TABS ICONS
export const HomeIcon = (
    props: Partial<React.ComponentProps<typeof AntDesign>>
) => <AntDesign name="home" {...iconProps} {...props} />;

export const CartIcon = (
    props: Partial<React.ComponentProps<typeof AntDesign>>
) => <AntDesign name="shoppingcart" {...iconProps} {...props} />;

export const ProfileIcon = (
    props: Partial<React.ComponentProps<typeof AntDesign>>
) => <AntDesign name="user" {...iconProps} {...props} />;

// LOGIN ICONS
export const ShowPasswordIcon = (
    props: Partial<React.ComponentProps<typeof Entypo>>
) => <Entypo name="eye" {...iconProps} {...props} />;

export const HidePasswordIcon = (
    props: Partial<React.ComponentProps<typeof Entypo>>
) => <Entypo name="eye-with-line" {...iconProps} {...props} />;

export const FingerPrintIcon = (
    props: Partial<React.ComponentProps<typeof Entypo>>
) => <Entypo name="fingerprint" {...iconProps} {...props} />;

// CART ICONS
export const MinusIcon = (
    props: Partial<React.ComponentProps<typeof AntDesign>>
) => <AntDesign name="minus" {...iconProps} {...props} />;

export const PlusIcon = (
    props: Partial<React.ComponentProps<typeof AntDesign>>
) => <AntDesign name="plus" {...iconProps} {...props} />;

export const XIcon = (
    props: Partial<React.ComponentProps<typeof AntDesign>>
) => <AntDesign name="closecircleo" {...iconProps} {...props} />;

export const NoCartsIcon = (
    props: Partial<React.ComponentProps<typeof MaterialIcons>>
) => <MaterialIcons name="remove-shopping-cart" {...iconProps} {...props} />;

export const NoOrdersIcon = (
    props: Partial<React.ComponentProps<typeof MaterialIcons>>
) => <MaterialIcons name="playlist-remove" {...iconProps} {...props} />;

export const AddToCartIcon = (
    props: Partial<React.ComponentProps<typeof FontAwesome5>>
) => <FontAwesome5 name="cart-plus" {...iconProps} {...props} />;

export const CheckoutIcon = (
    props: Partial<React.ComponentProps<typeof FontAwesome5>>
) => <FontAwesome5 name="money-check" {...iconProps} {...props} />;

export const CreditCardIcon = (
    props: Partial<React.ComponentProps<typeof Ionicons>>
) => <Ionicons name="card-outline" {...iconProps} {...props} />;

export const PayPalIcon = (
    props: Partial<React.ComponentProps<typeof Entypo>>
) => <Entypo name="paypal" {...iconProps} {...props} />;

export const BankIcon = (
    props: Partial<React.ComponentProps<typeof Ionicons>>
) => <Ionicons name="business-outline" {...iconProps} {...props} />;

export const DropdownIcon = (
    props: Partial<React.ComponentProps<typeof AntDesign>>
) => <AntDesign name="down" {...iconProps} {...props} />;

// MAPS ICONS
export const MapIcon = (
    props: Partial<React.ComponentProps<typeof FontAwesome5>>
) => <FontAwesome5 name="map-marked-alt" {...iconProps} {...props} />;

// OTHER ICONS
export const BackIcon = (
    props: Partial<React.ComponentProps<typeof AntDesign>>
) => <AntDesign name="arrowleft" {...iconProps} {...props} />;

export const DocumentScannerIcon = (
    props: Partial<React.ComponentProps<typeof MaterialIcons>>
) => <MaterialIcons name="document-scanner" {...iconProps} {...props} />;

export const CameraIcon = (
    props: Partial<React.ComponentProps<typeof AntDesign>>
) => <AntDesign name="camera" {...iconProps} {...props} />;

export const QRIcon = (
    props: Partial<React.ComponentProps<typeof AntDesign>>
) => <AntDesign name="qrcode" {...iconProps} {...props} />;

export const BeerTypesIcon = (
    props: Partial<React.ComponentProps<typeof Ionicons>>
) => <Ionicons name="beer" {...iconProps} {...props} />;
