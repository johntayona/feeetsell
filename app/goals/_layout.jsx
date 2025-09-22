// /app/goals/_layout.jsx
import { CartProvider } from "../../hooks/useCart";  // Import CartProvider
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

export default function GoalsLayout() {
  return (
    <CartProvider> {/* Wrap the app inside CartProvider */}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#E8DFCA",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "transparent",
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            height: 60,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Your Shoes",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Add shoes",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </CartProvider>
  );
}
