import { useState } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Alert,
	useWindowDimensions,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title.ios";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
	const [enteredNumber, setEnteredNumber] = useState("");

	const { width, height } = useWindowDimensions();

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

	const marginTop = height < 380 ? 30 : 100;

	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView behavior="position">
				<View style={[styles.rootContainer, { marginTop: marginTop }]}>
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
						<View style={styles.btnsContainer}>
							<View style={styles.btnContainer}>
								<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
							</View>
							<View style={styles.btnContainer}>
								<PrimaryButton onPress={confirmInputHandler}>
									Confirm
								</PrimaryButton>
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		// marginTop: deviceHeight < 420 ? 40 : 100,
		marginHorizontal: 24,
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
	btnsContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	btnContainer: {
		flex: 1,
	},
});
