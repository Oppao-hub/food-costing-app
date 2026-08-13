import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Typography } from '../components/atoms/Typography';
import { Card } from '../components/atoms/Card';
import { PrimaryButton } from '../components/atoms/PrimaryButton';
import { ListItem } from '../components/molecules/ListItem';
import { FormModal } from '../components/organisms/FormModal';
import { InputField } from '../components/molecules/InputField';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export const OpexScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="h1">OPEX</Typography>
      </View>

      <FlatList
        data={[]}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <Card style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Typography variant="bodySecondary">Total Monthly OPEX</Typography>
              <Typography variant="h2" color={colors.primary}>₱ 0.00</Typography>
            </View>
            <View style={styles.summaryRow}>
              <Typography variant="bodySecondary">5% Contingency</Typography>
              <Typography variant="bodyPrimary">₱ 0.00</Typography>
            </View>
          </Card>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Typography variant="bodySecondary" align="center">
              No operating expenses added.
            </Typography>
          </View>
        }
        renderItem={({ item }) => (
          <ListItem 
            title="Rent" 
            rightText="₱ 10,000" 
            onEdit={() => {}} 
            onDelete={() => {}}
          />
        )}
      />

      <View style={styles.buttonContainer}>
        <PrimaryButton 
          title="Add Expense" 
          onPress={() => setModalVisible(true)} 
        />
      </View>

      <FormModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)}
        title="Add Expense"
      >
        <InputField label="Expense Name" placeholder="e.g. Rent, Utilities" />
        <InputField label="Monthly Amount" placeholder="0.00" keyboardType="numeric" />
        <PrimaryButton title="Save Expense" onPress={() => setModalVisible(false)} style={styles.saveButton} />
      </FormModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: spacing.screenPadding,
    paddingBottom: spacing.itemGap,
  },
  list: {
    paddingHorizontal: spacing.screenPadding,
    paddingBottom: 100,
  },
  summaryCard: {
    marginBottom: spacing.sectionGap,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  emptyContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  buttonContainer: {
    padding: spacing.screenPadding,
    paddingBottom: 20,
  },
  saveButton: {
    marginTop: spacing.itemGap,
  },
});
