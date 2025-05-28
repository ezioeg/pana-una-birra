import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '@/styles/globalStyles';

export default function AuthDivider({text}: {text: string}) {
  return (
    <View style={styles.divider}>
      <View style={styles.dividerLine} />
      <Text style={styles.dividerText}>{text}</Text>
      <View style={styles.dividerLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e5e5',
  },
  dividerText: {
    color: globalStyles.secondaryText.color,
    paddingHorizontal: 16,
    fontSize: 14,
  },
});
