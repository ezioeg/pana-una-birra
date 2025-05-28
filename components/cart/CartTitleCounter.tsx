import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '@/styles/globalStyles';

export default function CartTitleCounter({
  count,
  text,
}: {
  count: number;
  text: string;
}) {
  return (
    <View style={styles.itemCountContainer}>
      <Text style={styles.itemCount}>
        {count} {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemCountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  itemCount: {
    fontSize: 14,
    color: globalStyles.secondaryText.color,
  },
});
