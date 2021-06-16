import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Alert,
} from "react-native";
import { setLevel, setProfile } from "../store/action";

export function Finish({ navigation }) {
  const dispatch = useDispatch();

  function quit() {
    dispatch(setLevel(""));
    dispatch(setProfile(""));
    navigation.navigate("Home");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>You Have Quit Sudoku, Would You Like To Play Again?</Text>
      <Button title="Yes" onPress={() => navigation.navigate("Sudoku")} />
      <Button title="No" onPress={quit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    backgroundColor: `#f8f8ff`,
  },
  row: {
    flexDirection: "row",
  },
  input: {
    padding: 10,
    margin: 2,
    backgroundColor: `#f0f8ff`,
    borderWidth: 1,
    width: 200,
  },
  textColor: {
    color: "white",
  },
  picker: {
    backgroundColor: `#f8f8ff`,
    height: 200,
    width: 200,
  },
});
