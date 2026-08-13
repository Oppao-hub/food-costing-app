import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export type TypographyVariant = 'h1' | 'h2' | 'bodyPrimary' | 'bodySecondary' | 'button';

interface Props extends TextProps {
  variant?: TypographyVariant;
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const Typography: React.FC<Props> = ({
  variant = 'bodyPrimary',
  color,
  align = 'left',
  style,
  children,
  ...rest
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'h1':
        return styles.h1;
      case 'h2':
        return styles.h2;
      case 'bodySecondary':
        return styles.bodySecondary;
      case 'button':
        return styles.button;
      case 'bodyPrimary':
      default:
        return styles.bodyPrimary;
    }
  };

  return (
    <Text
      style={[
        getVariantStyle(),
        { color: color || (variant === 'bodySecondary' ? colors.textSecondary : colors.textPrimary) },
        { textAlign: align },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.h1,
    lineHeight: typography.lineHeight.h1,
  },
  h2: {
    fontFamily: typography.fontFamily.semiBold,
    fontSize: typography.fontSize.h2,
    lineHeight: typography.lineHeight.h2,
  },
  bodyPrimary: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.bodyPrimary,
    lineHeight: typography.lineHeight.bodyPrimary,
  },
  bodySecondary: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.bodySecondary,
    lineHeight: typography.lineHeight.bodySecondary,
  },
  button: {
    fontFamily: typography.fontFamily.semiBold,
    fontSize: typography.fontSize.button,
    lineHeight: typography.lineHeight.button,
  },
});
