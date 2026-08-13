import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { radii, spacing, shadows } from '../../theme/spacing';

interface Props extends ViewProps {
  noPadding?: boolean;
}

export const Card: React.FC<Props> = ({ noPadding = false, style, children, ...rest }) => {
  return (
    <View
      style={[
        styles.card,
        !noPadding && styles.padding,
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.card,
    ...shadows.card,
  },
  padding: {
    padding: spacing.cardPadding,
  },
});
