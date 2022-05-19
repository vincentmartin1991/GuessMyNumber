import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
	function pressHandler() {
		console.log("Pressed!");
	}
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.pressed, styles.buttonInnerContainer]
						: styles.buttonInnerContainer
				}
				onPress={onPress}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden",
	},
	buttonInnerContainer: {
		backgroundColor: "#8a6f19",
		paddingVertical: 8,
		paddingHorizontal: 16,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
	pressed: {
		opacity: 0.75,
	},
});
