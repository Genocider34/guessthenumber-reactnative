import { Text, View, StyleSheet } from "react-native";
import COLORS from "../../constants/COLORS";

export default function GameLog({ roundNumber, guess }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.accent500,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 30,
    padding: 8,
    marginVertical: 6,
  },
  text: {
    fontFamily: "open-sans",
    fontSize: 16,
  },
});
