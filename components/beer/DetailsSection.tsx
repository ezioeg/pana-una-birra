import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '@/styles/globalStyles';

export default function DetailsSection({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.detailItem}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailItem: {
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 16,
    color: globalStyles.primaryText.color,
    fontWeight: '600',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    color: '#555',
  },
});
