import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
	const [enteredNumber, setEnteredNumber] = useState("");

	function numberInputHandler(enteredText) {
		setEnteredNumber(enteredText);
	}

	function resetInputHandler() {
		setEnteredNumber("");
	}

	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredNumber);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert("Invalid number", "Please enter number between 1 and 99.", [
				{ text: "Ok", style: "cancel", onPress: resetInputHandler },
			]);
			return;
		}

		onPickNumber(chosenNumber);
	}

	return (
		<View style={styles.rootContainer}>
			<Title>Guess My Number</Title>
			<Card>
				<InstructionText>Enter a Number</InstructionText>
				<TextInput
					style={styles.numberInput}
					maxLength={2}
					keyboardType="number-pad"
					onChangeText={numberInputHandler}
					value={enteredNumber}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
}

export default StartGameScreen;

const styles = StyleSheet.create({
	rootContainer: {
		// flex: 1,
		marginTop: 100,
		alignItems: "center",
	},
	numberInput: {
		width: 50,
		height: 50,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	buttonContainer: {
		flex: 1,
	},
});
