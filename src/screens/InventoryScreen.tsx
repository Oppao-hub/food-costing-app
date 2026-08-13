import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Typography } from '../components/atoms/Typography';
import { IconButton } from '../components/atoms/IconButton';
import { ListItem } from '../components/molecules/ListItem';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { useNavigation } from '@react-navigation/native';

export const InventoryScreen = () => {
  const [tab, setTab] = useState<'ingredients' | 'packaging'>('ingredients');
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="h1">Inventory</Typography>
      </View>

      <View style={styles.tabContainer}>
        <Typography 
          variant="button" 
          color={tab === 'ingredients' ? colors.primary : colors.textSecondary}
          style={styles.tab}
          onPress={() => setTab('ingredients')}
        >
          Ingredients
        </Typography>
        <Typography 
          variant="button" 
          color={tab === 'packaging' ? colors.primary : colors.textSecondary}
          style={styles.tab}
          onPress={() => setTab('packaging')}
        >
          Packaging
        </Typography>
      </View>

      <FlatList
        data={[]}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Typography variant="bodySecondary" align="center">
              No items in {tab} yet.
            </Typography>
          </View>
        }
        renderItem={({ item }) => (
          <ListItem 
            title="Sample Item" 
            subtitle="Supplier A" 
            rightText="₱ 100 / kg" 
            onEdit={() => {}} 
            onDelete={() => {}}
          />
        )}
      />

      <View style={styles.fabContainer}>
        <IconButton 
          name="plus" 
          size={24} 
          color={colors.surface} 
          backgroundColor={colors.primary} 
          style={styles.fab} 
          onPress={() => navigation.navigate('ItemForm')}
        />
      </View>
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
    paddingBottom: 0,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.screenPadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    marginBottom: spacing.itemGap,
  },
  tab: {
    marginRight: spacing.sectionGap,
    paddingVertical: spacing.itemGap,
  },
  list: {
    paddingHorizontal: spacing.screenPadding,
    paddingBottom: 100,
  },
  emptyContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  fabContainer: {
    position: 'absolute',
    bottom: 20,
    right: spacing.screenPadding,
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
});
