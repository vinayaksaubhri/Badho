import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SpaceXLaunchList from "./components/SpaceXLaunchList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InfoScreen from "./components/InfoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SpaceXLaunchList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="InfoScreen"
          component={InfoScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
