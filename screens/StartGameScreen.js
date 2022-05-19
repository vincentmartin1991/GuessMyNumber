import { StyleSheet, TextInput, View } from "react-native"

import PrimaryButton from "../components/PrimaryButton"

function StartGameScreen() {
  return (
      <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#4e0329",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  buttonContainer: {
    flex: 1
  }
})