import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

// utility that generates random number
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

export default function GameScreen({ selectedNumber }) {
  // randomly guess 1-99 except your selected number on StartGameScreen
  const initialGuess = generateRandomBetween(1, 100, selectedNumber);
  // set default of initialGuess
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* Create a Custom Component for random opponent's guess */}
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher and Lower</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
