// import React from "react";
import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../store/action";
import { createStackNavigator } from "@react-navigation/stack";
import { Picker } from "@react-native-picker/picker";
import { setLevel } from "../store/action";

export function Home({ navigation }) {
  const dispatch = useDispatch();
  function submitProfile(value) {
    dispatch(setProfile(value));
  }

  const level = useSelector((state) => state.difficultyLevel);
  const name = useSelector((state) => state.userProfile);

  function setselectedLevel(selectedLevel) {
    dispatch(setLevel(selectedLevel));
  }

  function play() {
    if (level == "" || name == "") {
      Alert.alert("Please input your name");
    } else {
      navigation.navigate("Sudoku");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Please put in your name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => submitProfile(value)}
      ></TextInput>
      <Text>Please Select Your Difficulty level</Text>
      <Picker
        style={styles.picker}
        selectedValue={level}
        onValueChange={(level) => setselectedLevel(level)}
      >
        <Picker.Item label="Easy" value="easy" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Hard" value="hard" />
      </Picker>
      <View style={styles.button}>
        <Button
          // style={styles.button}
          mode="contained"
          title="Enter"
          onPress={play}
          color="white"
        >
          Enter
        </Button>
      </View>
    </SafeAreaView>
  );
}

//<Button title="Enter" onPress={() => navigation.navigate("Sudoku")} />

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    backgroundColor: `#f8f8ff`,
  },
  input: {
    padding: 10,
    margin: 2,
    backgroundColor: `#f0f8ff`,
    borderWidth: 1,
    width: 200,
  },
  picker: {
    backgroundColor: `#f8f8ff`,
    height: 200,
    width: 200,
  },
  button: {
    padding: 5,
    width: "40%",
    borderRadius: 24,
    alignItems: "center",
    backgroundColor: `#696969`,
  },
});
