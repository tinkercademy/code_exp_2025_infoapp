import { View, Text, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const EventsScreen = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "blue"
    }}>
    <Text>Events!</Text>
    <Pressable
      onPress={() => navigation.navigate("EventsSecond")}
      style={{ backgroundColor: "white", padding: 10, marginTop: 20 }}>
      <Text>Go to Events Second Screen</Text>
    </Pressable>
  </View>
);

const EventsSecondScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
      }}>
      <Text>Events Second Screen!</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const EventsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="EventsSecond" component={EventsSecondScreen} />
    </Stack.Navigator>
  );
};

export default EventsStack;
