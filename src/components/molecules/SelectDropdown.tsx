import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Typography } from '../atoms/Typography';
import { colors } from '../../theme/colors';
import { spacing, radii } from '../../theme/spacing';
import { Feather } from '@expo/vector-icons';

interface Props {
  label: string;
  value: string;
  onPress: () => void;
  error?: string;
}

export const SelectDropdown: React.FC<Props> = ({ label, value, onPress, error }) => {
  return (
    <View style={styles.container}>
      <Typography variant="bodySecondary" style={styles.label}>
        {label}
      </Typography>
      <TouchableOpacity 
        style={[styles.input, error && styles.inputError]} 
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Typography variant="bodyPrimary" color={value ? colors.textPrimary : colors.textSecondary}>
          {value || 'Select an option'}
        </Typography>
        <Feather name="chevron-down" size={20} color={colors.textSecondary} />
      </TouchableOpacity>
      {error && (
        <Typography variant="bodySecondary" color="red" style={styles.errorText}>
          {error}
        </Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.itemGap,
  },
  label: {
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.divider,
    borderRadius: radii.badge,
    paddingHorizontal: 12,
    backgroundColor: colors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    marginTop: 4,
  },
});
