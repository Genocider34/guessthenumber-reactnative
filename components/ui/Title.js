import { Text, StyleSheet } from "react-native";
import COLORS from "../../constants/COLORS";

export default function Title({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: COLORS.accent500,
    padding: 12,
  },
});
