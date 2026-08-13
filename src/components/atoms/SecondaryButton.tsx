import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../../theme/colors';
import { radii, spacing } from '../../theme/spacing';
import { Typography } from './Typography';

interface Props extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

export const SecondaryButton: React.FC<Props> = ({ title, loading, style, disabled, ...rest }) => {
  return (
    <TouchableOpacity
      style={[styles.button, (disabled || loading) && styles.disabled, style]}
      disabled={disabled || loading}
      activeOpacity={0.8}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={colors.primary} />
      ) : (
        <Typography variant="button" color={colors.primary} align="center">
          {title}
        </Typography>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryLight,
    borderRadius: radii.pill,
    paddingVertical: spacing.itemGap,
    paddingHorizontal: spacing.screenPadding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.6,
  },
});
