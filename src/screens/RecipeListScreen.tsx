import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Typography } from '../components/atoms/Typography';
import { RecipeCard } from '../components/organisms/RecipeCard';
import { IconButton } from '../components/atoms/IconButton';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { useNavigation } from '@react-navigation/native';

export const RecipeListScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="h1">Recipes</Typography>
      </View>

      <FlatList
        data={[]}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Typography variant="bodySecondary" align="center">
              No recipes created yet.
            </Typography>
          </View>
        }
        renderItem={({ item }) => (
          <RecipeCard
            name="Sample Recipe"
            sellingPrice="₱ 150.00"
            profit="₱ 50.00"
            margin="33%"
            onPress={() => navigation.navigate('RecipeDetail')}
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
          onPress={() => navigation.navigate('RecipeDetail')}
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
    paddingBottom: spacing.itemGap,
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
