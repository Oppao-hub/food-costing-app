import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Typography } from '../components/atoms/Typography';
import { PrimaryButton } from '../components/atoms/PrimaryButton';
import { InputField } from '../components/molecules/InputField';
import { SelectDropdown } from '../components/molecules/SelectDropdown';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export const ItemFormScreen = () => {
  const [unit, setUnit] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Typography variant="h1" style={styles.title}>New Item</Typography>
      
      <InputField label="Item Name" placeholder="e.g. Flour" />
      <InputField label="Supplier (Optional)" placeholder="e.g. Supplier A" />
      <InputField label="Package Price" placeholder="0.00" keyboardType="numeric" />
      <InputField label="Quantity in Package" placeholder="0" keyboardType="numeric" />
      
      <SelectDropdown 
        label="Unit of Measurement" 
        value={unit} 
        onPress={() => setUnit(unit ? '' : 'kg')} 
      />
      
      <InputField label="Shipping Cost (Optional)" placeholder="0.00" keyboardType="numeric" />

      <View style={styles.buttonContainer}>
        <PrimaryButton title="Save Item" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.screenPadding,
    paddingBottom: 40,
  },
  title: {
    marginBottom: spacing.sectionGap,
  },
  buttonContainer: {
    marginTop: spacing.sectionGap,
  },
});
