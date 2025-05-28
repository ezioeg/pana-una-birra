import { TextStyle, ViewStyle } from "react-native";

export interface CustomButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
    loading?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    disabledStyle?: ViewStyle;
    disabledTextStyle?: TextStyle;
    loadingIndicator?: React.ReactNode;
}
