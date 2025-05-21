import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';
import {globalStyles} from '@/styles/globalStyles';

export default function AuthHeader({
  title,
  logo,
}: {
  title: string;
  logo: ImageSourcePropType;
}) {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: globalStyles.primaryText.color,
  },
});
