import { AccessibilityState, GestureResponderEvent } from "react-native";

// COMPONENTS TYPES
export interface TabButtonProps {
    children: React.ReactNode;
    onPress?: (event: GestureResponderEvent) => void;
    accessibilityState: AccessibilityState | undefined;
}
