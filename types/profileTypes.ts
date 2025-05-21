export interface InfoItemProps {
    label: string;
    value: string;
    onPress?: () => void;
}

export interface ProfileHeaderProps {
    onBack: () => void;
    profileImage?: string;
}
