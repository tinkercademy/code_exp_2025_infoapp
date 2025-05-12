import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const EventsScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "blue"
    }}>
    <Text>Events!</Text>
  </View>
);

const Stack = createStackNavigator();

const EventsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsScreen} />
    </Stack.Navigator>
  );
};

export default EventsStack;
