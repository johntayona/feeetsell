import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const About = () => {
  return (
    <LinearGradient
          colors={["#4f524fff", "#33ee0dff", "#232421ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.container}
        >
      <View style={styles.content}>
        <Text style={styles.title}>FeetSell</Text>
        <Text style={styles.text}>"FeetSell, Choose your comfort shoes."</Text>
      </View>
    </LinearGradient>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  content: {
    alignItems: "center",
    
    padding: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
});
