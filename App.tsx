import "react-native-gesture-handler";
import React from "react";
import { Container } from "native-base";

// Pages
import LoginPage from "./src/pages/Login";
import RegisterPage from "./src/pages/Register";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function App() {
  return (
    <Container>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen
            name="Register"
            component={RegisterPage}
            options={{ gestureEnabled: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
}
