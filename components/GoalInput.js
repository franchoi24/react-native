import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const GoalInput = (props) => {
	const [enteredGoalText, setEnteredGoalText] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};

	const onAddGoal = () => {
		props.addGoalHandler(enteredGoalText);
		setEnteredGoalText("");
	};
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder="Your course goal!"
				onChangeText={goalInputHandler}
				value={enteredGoalText}
			/>
			<Button title="Add a goal" onPress={onAddGoal} />
		</View>
	);
};

const styles = StyleSheet.create({
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "70%",
		marginRight: 8,
		padding: 8,
	},
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: 16,
		borderBottomColor: "#cccccc",
		borderBottomWidth: 1,
	},
});

export default GoalInput;
