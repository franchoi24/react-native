import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	Button,
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem.js";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = (text) => {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: text, key: Math.random().toString() },
		]);
	};

	return (
		<View style={styles.appContainer}>
			<GoalInput addGoalHandler={addGoalHandler} />

			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return <GoalItem text={itemData.item.text} />;
					}}
					alwaysBounceVertical={false}
				></FlatList>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},

	goalsContainer: {
		flex: 8,
	},

	goalText: {
		color: "white",
	},
});
