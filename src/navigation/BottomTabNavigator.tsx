import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { DashboardScreen } from '../screens/DashboardScreen';
import { InventoryScreen } from '../screens/InventoryScreen';
import { RecipeListScreen } from '../screens/RecipeListScreen';
import { OpexScreen } from '../screens/OpexScreen';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { shadows } from '../theme/spacing';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarLabelStyle: {
          fontFamily: typography.fontFamily.medium,
          fontSize: 10,
        },
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 0,
          ...shadows.bottomNav,
        },
        // V7 Bottom Tabs Animation properties
        animation: 'shift', // Provides a smooth animation between tabs
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="home" size={24} color={color} style={!focused && { opacity: 0.6 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Feather name="box" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Recipes"
        component={RecipeListScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Feather name="book" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OPEX"
        component={OpexScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Feather name="file-text" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
