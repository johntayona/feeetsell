// /app/goals/create.jsx

import React from "react";
import { useRouter } from "expo-router";
import { useCart } from "../../hooks/useCart"; // Import the useCart hook
import { StyleSheet, Text, Pressable, Image, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const shoes = [
  { id: "1", name: "Jordan 1", image: require("../../assets/jp1.jpg") },
  { id: "2", name: "Air Max", image: require("../../assets/jp2.jpg") },
  { id: "3", name: "Yeezy Boost", image: require("../../assets/jp3.jpg") },
  { id: "4", name: "Converse", image: require("../../assets/jp4.jpg") },
  { id: "5", name: "Jordan 2", image: require("../../assets/jp5.jpg") },
  { id: "6", name: "Puma", image: require("../../assets/jp6.jpg") },
  { id: "7", name: "Kobe 6", image: require("../../assets/jp7.jpg") },
  { id: "8", name: "Lebron 2", image: require("../../assets/jp8.jpg") },
  { id: "9", name: "Curyy 3", image: require("../../assets/jp9.jpg") },
  { id: "10", name: "Freak 2", image: require("../../assets/jp10.jpg") },
  { id: "11", name: "GT cut", image: require("../../assets/jp11.jpg") },
  { id: "12", name: "Harden Vol", image: require("../../assets/jp12.jpg") },
  { id: "13", name: "Dame 9", image: require("../../assets/jp13.jpg") },
  { id: "14", name: "All-Pro Nitro", image: require("../../assets/jp14.jpg") },
  { id: "15", name: "Book 1", image: require("../../assets/jp15.jpg") },
  { id: "16", name: "PG 6", image: require("../../assets/jp16.jpg") },
  { id: "17", name: "Anta KAI 1", image: require("../../assets/jp17.jpg") },
  { id: "18", name: "Li-Ning CJ2", image: require("../../assets/jp18.jpg") },
  { id: "19", name: "Peak AW1", image: require("../../assets/jp19.jpg") },
  { id: "20", name: "AE 1", image: require("../../assets/jp20.jpg") },
];

export default function Create() {
  const { addToCart } = useCart(); // Access the cart functionality
  const router = useRouter();

  // Handle adding the shoe to cart and navigating to the 'Your Shoes' page
  const handleAdd = (shoe) => {
    addToCart(shoe); // Add the shoe to the cart
    router.push("/goals"); // Navigate to the "Your Shoes" page
  };

  return (
    <LinearGradient
      colors={["#1f0b02ff", "#08b333ff", "#010a13ff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          <Text style={styles.title}>Choose Shoes</Text>
          <View style={styles.grid}>
            {shoes.map((shoe) => (
              <View key={shoe.id} style={styles.card}>
                <Image source={shoe.image} style={styles.image} />
                <Text style={styles.name}>{shoe.name}</Text>
                <Pressable onPress={() => handleAdd(shoe)} style={styles.cartButton}>
                  <Text style={styles.btnText}>Add to Cart</Text>
                </Pressable>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 20 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
  card: {
    width: 150,
    margin: 10,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 8,
    alignItems: "center",
  },
  image: { width: 100, height: 100, marginBottom: 10, resizeMode: "contain" },
  name: { color: "#fff", marginBottom: 10 },
  cartButton: {
    backgroundColor: "#0a7",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  btnText: { color: "#fff", fontWeight: "600" },
});
