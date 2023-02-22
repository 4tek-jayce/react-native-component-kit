import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

const AppText = (props: TextProps) => {
  const { children, style, ...rest } = props;

  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
}

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: 'purple',
  },
});
