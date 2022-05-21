import { View, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		width: 200,
		borderWidth: 4,
		borderColor: Colors.accent500,
		padding: deviceWidth < 375 ? 16 : 24,
		borderRadius: 8,
		margin: deviceWidth < 375 ? 16 : 24,
		alignItems: "center",
	},
	numberText: {
		fontFamily: "open-sans-bold",
		color: "white",
		fontSize: 36,
	},
});
