import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}

export default NumberContainer;

const styles = StyleSheet.create({
	container: {
		width: 200,
		borderWidth: 4,
		borderColor: Colors.accent500,
		padding: 24,
		borderRadius: 8,
		margin: 24,
		alignItems: "center",
	},
	numberText: {
		fontFamily: "open-sans-bold",
		color: "white",
		fontSize: 36,
	},
});
