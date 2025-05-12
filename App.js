import { createStaticNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Import local screens
import HomeScreen from "./screens/HomeScreen";
import EventsScreen from "./screens/EventsScreen";
import ContactScreen from "./screens/ContactScreen";

// Navigator -----------------------------------------------
const Tabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Events: EventsScreen,
    Contact: ContactScreen
  },
  screenOptions: ({ route }) => ({
    tabBarActiveTintColor: "blue",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Home") {
        iconName = "home";
      } else if (route.name === "Events") {
        iconName = "calendar";
      } else {
        iconName = "question-circle";
      }

      return <FontAwesome name={iconName} size={size} color={color} />;
    }
  })
});

// Root navigation component -------------------------------
const Navigation = createStaticNavigation(Tabs);

export default function App() {
  return <Navigation />;
}
