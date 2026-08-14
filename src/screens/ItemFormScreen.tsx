import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Modal, TouchableOpacity, FlatList } from 'react-native';
import { Typography } from '../components/atoms/Typography';
import { PrimaryButton } from '../components/atoms/PrimaryButton';
import { InputField } from '../components/molecules/InputField';
import { SelectDropdown } from '../components/molecules/SelectDropdown';
import { colors } from '../theme/colors';
import { spacing, radii } from '../theme/spacing';

const UNIT_OPTIONS = ['kg', 'g', 'L', 'mL', 'pieces', 'packs'];

export const ItemFormScreen = () => {
  const [unit, setUnit] = useState('');
  const [isUnitModalVisible, setIsUnitModalVisible] = useState(false);

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
        onPress={() => setIsUnitModalVisible(true)} 
      />
      
      <InputField label="Shipping Cost (Optional)" placeholder="0.00" keyboardType="numeric" />

      <View style={styles.buttonContainer}>
        <PrimaryButton title="Save Item" onPress={() => {}} />
      </View>

      {/* Unit Selection Modal */}
      <Modal visible={isUnitModalVisible} transparent animationType="fade">
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={() => setIsUnitModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <Typography variant="h2" style={styles.modalTitle}>Select Unit</Typography>
            <FlatList
              data={UNIT_OPTIONS}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.modalOption}
                  onPress={() => {
                    setUnit(item);
                    setIsUnitModalVisible(false);
                  }}
                >
                  <Typography variant="bodyPrimary">{item}</Typography>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
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
    marginTop: 24,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.screenPadding,
  },
  modalContent: {
    backgroundColor: colors.surface,
    borderRadius: radii.card,
    width: '100%',
    maxHeight: '60%',
    padding: spacing.screenPadding,
  },
  modalTitle: {
    marginBottom: spacing.sectionGap,
  },
  modalOption: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
});
