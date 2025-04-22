import React, { Profiler } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options= {{
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
            ),
        }}
    />
            <Tab.Screen name="Profile" component={Profile} options= {{
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
            ),
        }}
    />
        </Tab.Navigator>
    )
}