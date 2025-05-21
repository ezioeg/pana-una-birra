import { TextStyle, ViewStyle } from "react-native";

export interface EmptyStateProps {
    icon?: React.ReactNode;
    message?: string;
    iconSize?: number;
    iconColor?: string;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
}
