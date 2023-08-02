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
	const [modalIsVisible, setNodalIsVisible] = useState(false);
	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = (text) => {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: text, key: Math.random().toString() },
		]);
		endAddGoalHandler();
	};

	const endAddGoalHandler = () => {
		setNodalIsVisible(false);
	};

	const deleteGoalHandler = (id) => {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => {
				goal.id !== id;
			});
		});
	};

	const startAddGoalHandler = () => {
		setNodalIsVisible(true);
	};

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button
					title="Add new Goal"
					color="#a065ec"
					onPress={startAddGoalHandler}
				/>
				<GoalInput
					addGoalHandler={addGoalHandler}
					endAddGoalHandler={endAddGoalHandler}
					visible={modalIsVisible}
				/>

				<View style={styles.goalsContainer}>
					<FlatList
						data={courseGoals}
						renderItem={(itemData) => {
							return (
								<GoalItem
									id={itemData.item.key}
									text={itemData.item.text}
									onDeleteItem={deleteGoalHandler}
								/>
							);
						}}
						alwaysBounceVertical={false}
					></FlatList>
				</View>
			</View>
		</>
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
});
