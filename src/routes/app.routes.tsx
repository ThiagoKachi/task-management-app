import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

import LoginForm from '../pages/LoginForm';
import Home from '../pages/Home';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <>
      <Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarLabelPosition: 'beside-icon',
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 100,
            backgroundColor: '#1B1B1B',
            borderTopColor: '#1B1B1B',
          },
        })}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color, focused }) =>
              focused ? (
                <Ionicons name="home" size={size} color={color} />
              ) : (
                <Ionicons name="home-outline" size={size} color={color} />
              ),
          }}
        />
        <Screen
          name="AddTask"
          component={LoginForm}
          options={{
            tabBarIcon: ({ size, color, focused }) =>
              focused ? (
                <AntDesign
                  name="pluscircleo"
                  size={54}
                  color={color}
                  style={{ width: 54 }}
                />
              ) : (
                <AntDesign
                  name="pluscircle"
                  size={54}
                  color={color}
                  style={{ width: 54 }}
                />
              ),
          }}
        />
        <Screen
          name="Login"
          component={LoginForm}
          options={{
            tabBarIcon: ({ size, color, focused }) =>
              focused ? (
                <FontAwesome name="user" size={size} color={color} />
              ) : (
                <FontAwesome name="user-o" size={size} color={color} />
              ),
          }}
        />
      </Navigator>
    </>
  );
}