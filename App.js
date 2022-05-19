import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
	const [userNumber, setUserNumber] = useState();

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen />;
	}

	return (
		<LinearGradient
			colors={[Colors.primary700, Colors.accent500]}
			style={styles.rootScreen}
		>
			<ImageBackground
				style={styles.rootScreen}
				source={require("./assets/images/dice.jpg")}
				resizeMode="cover"
				imageStyle={styles.backgroundImage}
			>
				<StatusBar style="light" />
				<SafeAreaView>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
