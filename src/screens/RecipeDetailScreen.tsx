import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Typography } from '../components/atoms/Typography';
import { Card } from '../components/atoms/Card';
import { SecondaryButton } from '../components/atoms/SecondaryButton';
import { DataRow } from '../components/molecules/DataRow';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export const RecipeDetailScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Typography variant="h1" style={styles.title}>Recipe Name</Typography>
      
      <Card style={styles.sectionCard}>
        <Typography variant="h2" style={styles.sectionTitle}>Ingredients Needed</Typography>
        <Typography variant="bodySecondary" align="center" style={styles.emptyText}>
          No ingredients added.
        </Typography>
      </Card>
      
      <Card style={styles.sectionCard}>
        <Typography variant="h2" style={styles.sectionTitle}>Packaging Needed</Typography>
        <Typography variant="bodySecondary" align="center" style={styles.emptyText}>
          No packaging added.
        </Typography>
      </Card>
      
      <Typography variant="h2" style={styles.pricingTitle}>Pricing & Margin</Typography>
      <Card>
        <DataRow label="Subtotal (Ingredients)" value="₱ 0.00" />
        <DataRow label="Subtotal (Packaging)" value="₱ 0.00" />
        <DataRow label="Estimated OPEX / Order" value="₱ 0.00" />
        <View style={styles.divider} />
        <DataRow label="Total Cost" value="₱ 0.00" labelVariant="h2" valueVariant="h2" />
        
        <View style={styles.spacing} />
        <DataRow label="VAT (12%)" value="₱ 0.00" />
        <DataRow 
          label="Selling Price" 
          value="₱ 0.00" 
          labelVariant="h2" 
          valueVariant="h2" 
          valueColor={colors.primary} 
        />
        <DataRow 
          label="Profit / Order" 
          value="₱ 0.00" 
          labelVariant="h2" 
          valueVariant="h2" 
          valueColor={colors.primary} 
        />
      </Card>
      
      <View style={styles.buttonContainer}>
        <SecondaryButton title="Apply PWD/Senior Discount" onPress={() => {}} />
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
  sectionCard: {
    marginBottom: spacing.sectionGap,
  },
  sectionTitle: {
    marginBottom: spacing.itemGap,
  },
  emptyText: {
    marginVertical: 10,
  },
  pricingTitle: {
    marginBottom: spacing.itemGap,
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: 8,
  },
  spacing: {
    height: 16,
  },
  buttonContainer: {
    marginTop: spacing.sectionGap,
  },
});
