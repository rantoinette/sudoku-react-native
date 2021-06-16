import store from "./store";
import { Provider } from "react-redux";
import React from "react";
import { Home } from "./screens/Home";
import { Sudoku } from "./screens/Sudoku";
import { Finish } from "./screens/Finish";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Sudoku" component={Sudoku} />
          <Stack.Screen name="Finish" component={Finish} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
