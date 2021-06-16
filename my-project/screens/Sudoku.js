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
import Col from "../components/Row";
import { useDispatch, useSelector } from "react-redux";
import { fetchSudokuNumbers, submitSudoku } from "../store/action";
import CountDown from "react-native-countdown-component";

export function Sudoku({ navigation }) {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.initialNumbers);
  const filledNumbers = useSelector((state) => state.filledNumbers);
  const status = useSelector((state) => state.status);
  const name = useSelector((state) => state.userProfile);
  const chosenLevel = useSelector((state) => state.difficultyLevel);
  let [time, setTime] = useState(600);
  let [flag, setFlag] = useState(true);
  console.log(chosenLevel, "level");

  useEffect(() => {
    dispatch(fetchSudokuNumbers(chosenLevel));
  }, []);

  function handleSubmit() {
    dispatch(
      submitSudoku("https://sugoku.herokuapp.com/validate", filledNumbers)
    );
    if (status !== "") {
      Alert.alert(status);
    }
  }
  // onPress={() => navigation.navigate("Sudoku")}
  function handleQuit() {
    setFlag(false);
    setTime(0);
    navigation.navigate("Finish");
  }

  function timeUp() {
    if (flag) {
      Alert.alert("Your Time is up");
      navigation.navigate("Finish");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <CountDown
        until={time} // 10 min (60 * 10)
        onFinish={timeUp}
        size={20}
        timeToShow={["M", "S"]}
        digitStyle={{ backgroundColor: "#FFF" }}
        digitTxtStyle={{ color: "#1CC625" }}
      />
      <Text style={styles.name}>Let's Start Playing {name} !</Text>
      <View tyle={(styles.buttonStyle, { flexDirection: "row" })}>
        <View style={styles.button}>
          <Button color="black" title="Submit" onPress={handleSubmit} />
        </View>
        <View style={styles.button}>
          <Button title="Quit" color="black" onPress={handleQuit} />
        </View>
      </View>
      <View>
        {board.map((row, indexRow) => (
          <View style={styles.row} key={indexRow}>
            {row.map((col, indexCol) => (
              <Col
                key={indexCol}
                col={col}
                indexRow={indexRow}
                indexCol={indexCol}
              />
            ))}
          </View>
        ))}
      </View>
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
  col: {
    padding: 10,
    margin: 2,
    backgroundColor: "grey",
    borderWidth: 1,
  },
  textColor: {
    color: "white",
  },
  name: {
    fontSize: 20,
    color: `#000000`,
  },
  button: {
    padding: 5,
    width: "40%",
    borderRadius: 24,
    alignItems: "center",
    backgroundColor: `#696969`,
  },
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 700,
  },
});
