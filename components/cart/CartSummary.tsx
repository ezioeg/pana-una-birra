import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '@/styles/globalStyles';

export default function CartSummary({
  subtotal,
  tax,
  total,
}: {
  subtotal: number;
  tax: number;
  total: number;
}) {
  return (
    <View style={styles.summary}>
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Sub total:</Text>
        <Text style={styles.summaryValue}>${subtotal}</Text>
      </View>
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Tax (15%):</Text>
        <Text style={styles.summaryValue}>${tax.toFixed(2)}</Text>
      </View>
      <View style={[styles.summaryRow, styles.totalRow]}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  summary: {
    backgroundColor: globalStyles.primaryBackground.backgroundColor,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: globalStyles.secondaryBackground.backgroundColor,
    paddingBottom: 92,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: globalStyles.secondaryText.color,
  },
  summaryValue: {
    fontSize: 14,
    color: globalStyles.primaryText.color,
    fontWeight: '500',
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: globalStyles.secondaryBackground.backgroundColor,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: globalStyles.primaryText.color,
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '600',
    color: globalStyles.primaryText.color,
  },
});
