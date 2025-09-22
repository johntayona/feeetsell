import React from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "../../hooks/useCart";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native"; // Import navigation

export default function YourShoes() {
  const { cartItems, removeFromCart } = useCart();
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#060e0cff", "#0dc5e6ff", "#0f0f0fff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safe}>
        {/* Back button */}
        <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        <Text style={styles.title}>Your Shoes</Text>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Pressable onPress={() => removeFromCart(item.id)} style={styles.removeBtn}>
                <Text style={styles.removeText}>Remove</Text>
              </Pressable>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.empty}>No shoes in cart</Text>}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1, padding: 20 },
  backBtn: {
    marginBottom: 10,
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#0dc5e6",
    borderRadius: 6,
  },
  backText: { color: "white", fontWeight: "bold", fontSize: 16 },
  title: { fontSize: 28, fontWeight: "bold", color: "white", textAlign: "center", marginBottom: 20 },
  list: { paddingBottom: 40 },
  item: {
    backgroundColor: "#333",
    marginBottom: 12,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  itemText: { color: "#fff", fontSize: 18 },
  removeBtn: {
    marginTop: 8,
    backgroundColor: "#f55",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  removeText: { color: "#fff", fontWeight: "600" },
  empty: { color: "#ddd", textAlign: "center", marginTop: 40 },
});
