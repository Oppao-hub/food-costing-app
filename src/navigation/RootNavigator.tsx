import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from './BottomTabNavigator';
import { ItemFormScreen } from '../screens/ItemFormScreen';
import { RecipeDetailScreen } from '../screens/RecipeDetailScreen';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTintColor: colors.textPrimary,
        headerTitleStyle: {
          fontFamily: 'Inter_600SemiBold', // Fallback direct string reference
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen 
        name="MainTabs" 
        component={BottomTabNavigator} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="ItemForm" 
        component={ItemFormScreen} 
        options={{ title: 'New Item' }}
      />
      <Stack.Screen 
        name="RecipeDetail" 
        component={RecipeDetailScreen} 
        options={{ title: 'Recipe Details' }}
      />
    </Stack.Navigator>
  );
};
