import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {MinusIcon, PlusIcon} from '@/components/common/icons';
import {globalStyles} from '@/styles/globalStyles';

export default function QuantityController({
  quantity,
  onIncrement,
  onDecrement,
}: {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}) {
  return (
    <View style={styles.quantityControls}>
      <TouchableOpacity
        onPress={onDecrement}
        style={[
          styles.quantityButton,
          quantity === 1 && {backgroundColor: '#CCCCCC'},
        ]}
        disabled={quantity === 1}>
        <MinusIcon size={16} color="black" />
      </TouchableOpacity>

      <Text style={styles.selectedQuantity}>{quantity}</Text>

      <TouchableOpacity onPress={onIncrement} style={styles.quantityButton}>
        <PlusIcon size={16} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  quantityButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalStyles.brand.color,
    borderRadius: 30,
  },
  selectedQuantity: {
    fontSize: 18,
    fontWeight: '600',
    color: globalStyles.primaryText.color,
  },
});
