import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { Platform } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#5fa2ebff',
        tabBarInactiveBackgroundColor: '#fbfbfbff',
        tabBarShowLabel:false,
        tabBarStyle:{
          borderRadius: 20,
          overflow: 'hidden',
          // Optional: Add other styles like backgroundColor, elevation, etc.
          backgroundColor: '#fff',
          height: Platform.OS === 'ios' ? 90 : 60, // Adjust height for iOS safe area
        },        }
      }
    >
      <Tabs.Screen 
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
