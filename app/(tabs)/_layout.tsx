import React from 'react';
import { Tabs } from 'expo-router';
import { useTheme } from 'react-native-paper';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const botIconsProps = { size: 24 };

export default function TabLayout() {
  const theme = useTheme();
  const { primary } = theme.colors;

  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: primary }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" color={color} {...botIconsProps} />,
        }}
      />
      <Tabs.Screen
        name="spoxals"
        options={{
          title: 'Spoxals',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="robot-outline" color={color} {...botIconsProps} />,
        }}
      />
      <Tabs.Screen
        name="crm"
        options={{
          title: 'Contacts',
          tabBarIcon: ({ color }) => <Feather name="phone-call" color={color} {...botIconsProps} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Feather name="settings" color={color} {...botIconsProps} />,
        }}
      />
    </Tabs>
  );
}
