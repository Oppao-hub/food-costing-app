import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Typography } from '../atoms/Typography';
import { IconButton } from '../atoms/IconButton';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { Feather } from '@expo/vector-icons';

interface Props {
  title: string;
  subtitle?: string;
  rightText?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onPress?: () => void;
  hideActions?: boolean;
}

export const ListItem: React.FC<Props> = ({
  title,
  subtitle,
  rightText,
  onEdit,
  onDelete,
  onPress,
  hideActions = false,
}) => {
  const content = (
    <View style={styles.container}>
      <View style={styles.content}>
        <Typography variant="h2">{title}</Typography>
        {subtitle && (
          <Typography variant="bodySecondary" style={styles.subtitle}>
            {subtitle}
          </Typography>
        )}
      </View>
      <View style={styles.rightSection}>
        {rightText && (
          <Typography variant="bodyPrimary" color={colors.primary}>
            {rightText}
          </Typography>
        )}
        {!hideActions && (
          <View style={styles.actions}>
            {onEdit && (
              <IconButton 
                name="edit-2" 
                size={18} 
                hasShadow={false}
                backgroundColor={colors.transparent} 
                onPress={onEdit} 
              />
            )}
            {onDelete && (
              <IconButton 
                name="trash-2" 
                size={18} 
                color="red"
                hasShadow={false}
                backgroundColor={colors.transparent} 
                onPress={onDelete} 
              />
            )}
          </View>
        )}
      </View>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.itemGap,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  content: {
    flex: 1,
    marginRight: spacing.itemGap,
  },
  subtitle: {
    marginTop: 4,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    marginLeft: 8,
  },
});
