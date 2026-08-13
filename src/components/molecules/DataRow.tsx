import React from 'react';
import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Typography, TypographyVariant } from '../atoms/Typography';
import { colors } from '../../theme/colors';

interface Props {
  label: string;
  value: string;
  labelVariant?: TypographyVariant;
  valueVariant?: TypographyVariant;
  labelColor?: string;
  valueColor?: string;
  style?: ViewStyle;
}

export const DataRow: React.FC<Props> = ({
  label,
  value,
  labelVariant = 'bodyPrimary',
  valueVariant = 'bodyPrimary',
  labelColor = colors.textSecondary,
  valueColor = colors.textPrimary,
  style,
}) => {
  return (
    <View style={[styles.row, style]}>
      <Typography variant={labelVariant} color={labelColor}>
        {label}
      </Typography>
      <Typography variant={valueVariant} color={valueColor} style={styles.value}>
        {value}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  value: {
    textAlign: 'right',
  },
});
