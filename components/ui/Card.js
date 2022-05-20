import { StyleSheet, View } from "react-native";

import Colors from "../../constants/colors.js";

function Card({ children }) {
	return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
	card: {
		justifyContent: "center",
		opacity: 0.75,
		alignItems: "center",
		marginTop: 36,
		marginHorizontal: 24,
		borderRadius: 8,
		padding: 16,
		backgroundColor: Colors.primary800,
		shadowColor: "black",
		shadowOffset: { width: 2, height: 4 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
});
