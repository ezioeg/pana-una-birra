import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import CustomTabButton from '@/components/tab/CustomTabButton';

export default function TabButton(props: BottomTabBarButtonProps) {
  return (
    <CustomTabButton
      children={props.children}
      onPress={props.onPress}
      accessibilityState={props.accessibilityState}
    />
  );
}
