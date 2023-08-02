import { useState } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Button,
	Modal,
	Image,
} from "react-native";

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
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					source={require("../assets/images/goal.png")}
					style={styles.image}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>

				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="Cancel"
							onPress={props.endAddGoalHandler}
							color="#f31282"
						/>
					</View>
					<View style={styles.button}>
						<Button title="Add a goal" onPress={onAddGoal} color="#b180f0" />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#120438",
		borderRadius: 6,
		width: "100%",
		padding: 16,
	},
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		borderBottomColor: "#cccccc",
		marginBottom: 24,
		borderBottomWidth: 1,
		padding: 16,
		backgroundColor: "#311b6b",
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: "row",
	},
	button: {
		width: "30%",
		marginHorizontal: 8,
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
});

export default GoalInput;
