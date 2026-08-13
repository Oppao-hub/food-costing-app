import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { shadows } from '../../theme/spacing';

interface Props extends TouchableOpacityProps {
  name: keyof typeof Feather.glyphMap;
  size?: number;
  color?: string;
  backgroundColor?: string;
  hasShadow?: boolean;
}

export const IconButton: React.FC<Props> = ({
  name,
  size = 24,
  color = colors.textPrimary,
  backgroundColor = colors.surface,
  hasShadow = true,
  style,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor },
        hasShadow && shadows.card,
        style,
      ]}
      activeOpacity={0.8}
      {...rest}
    >
      <Feather name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: 22, // Circular
    alignItems: 'center',
    justifyContent: 'center',
  },
});
