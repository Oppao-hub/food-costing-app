import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Typography } from '../components/atoms/Typography';
import { Card } from '../components/atoms/Card';
import { ListItem } from '../components/molecules/ListItem';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Typography variant="h1" style={styles.title}>Dashboard</Typography>
      
      <View style={styles.kpiGrid}>
        <Card style={styles.kpiCard}>
          <Typography variant="bodySecondary">Gross Revenue</Typography>
          <Typography variant="h2" color={colors.primary}>₱ 0.00</Typography>
        </Card>
        <Card style={styles.kpiCard}>
          <Typography variant="bodySecondary">Gross Profit</Typography>
          <Typography variant="h2" color={colors.primary}>₱ 0.00</Typography>
        </Card>
      </View>
      
      <View style={styles.kpiGrid}>
        <Card style={styles.kpiCard}>
          <Typography variant="bodySecondary">Monthly OPEX</Typography>
          <Typography variant="h2" color={colors.textPrimary}>₱ 0.00</Typography>
        </Card>
        <Card style={styles.kpiCard}>
          <Typography variant="bodySecondary">Net Profit</Typography>
          <Typography variant="h2" color={colors.primary}>₱ 0.00</Typography>
        </Card>
      </View>

      <Typography variant="h2" style={styles.sectionHeader}>Breakeven Analysis</Typography>
      <Card noPadding>
        <ListItem 
          title="Sample Recipe" 
          subtitle="Extra orders needed: 24"
          rightText="₱ 150"
          hideActions
        />
      </Card>
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
    paddingBottom: 100, // For bottom tab
  },
  title: {
    marginBottom: spacing.sectionGap,
  },
  kpiGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.itemGap,
  },
  kpiCard: {
    flex: 0.48,
  },
  sectionHeader: {
    marginTop: spacing.sectionGap - spacing.itemGap,
    marginBottom: spacing.itemGap,
  },
});
