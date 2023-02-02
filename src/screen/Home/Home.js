import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { AppBar, IconButton, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { components } from "../../constants/components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#1d1e22",
        },
        tabBarActiveTintColor: "#FF4656",
        headerShown: false,
        gestureDirection: "horizontal",
        gestureEnabled: false
      })}
      backBehavior="none"
    >
      <Tab.Screen
        name="onBoard"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              className="w-full h-full object-cover"
              source={require('../../assets/Full_Color/Logotype&Mark/V_Logomark_Red.png')}
            />
          ),
        }}
        component={components.HomeScreen}
      />
      <Tab.Screen
        name="Agents"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
        component={components.HomeScreen}
      />
      <Tab.Screen
        name="Maps"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" size={size} color={color} />
          ),
        }}
        component={components.HomeScreen}
      />
      <Tab.Screen
        name="Weapons"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="crosshairs" size={size} color={color} />
          ),
        }}
        component={components.HomeScreen}
      />
      <Tab.Screen
        name="Calendar"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" color={color} size={size} />
          ),
        }}
        component={components.HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default Home;
