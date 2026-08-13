import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '../atoms/Card';
import { Typography } from '../atoms/Typography';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { Feather } from '@expo/vector-icons';

interface Props {
  name: string;
  sellingPrice: string;
  profit: string;
  margin: string;
  onPress: () => void;
}

export const RecipeCard: React.FC<Props> = ({ name, sellingPrice, profit, margin, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Card style={styles.card}>
        <View style={styles.header}>
          <Typography variant="h2" style={styles.title} numberOfLines={1}>
            {name}
          </Typography>
          <Feather name="chevron-right" size={24} color={colors.textSecondary} />
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Typography variant="bodySecondary">Selling Price</Typography>
            <Typography variant="bodyPrimary" color={colors.primary}>
              {sellingPrice}
            </Typography>
          </View>
          
          <View style={styles.statItem}>
            <Typography variant="bodySecondary">Profit/Order</Typography>
            <Typography variant="bodyPrimary" color={colors.primary}>
              {profit}
            </Typography>
          </View>
          
          <View style={styles.statItem}>
            <Typography variant="bodySecondary">Margin</Typography>
            <View style={styles.badge}>
              <Typography variant="bodySecondary" color={colors.primary}>
                {margin}
              </Typography>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.itemGap,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    flex: 1,
    marginRight: 8,
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginHorizontal: -spacing.cardPadding,
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statItem: {
    flex: 1,
  },
  badge: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 2,
  },
});
