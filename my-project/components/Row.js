import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { filledNumberAction } from "../store/action";

function Row(props) {
  const dispatch = useDispatch();
  const filled = useSelector((state) => state.filledNumbers);

  function changeNumber(value, row, col) {
    let newVal = JSON.parse(JSON.stringify(value));
    if (value < 10) {
      filled[row][col] = +newVal;
      dispatch(filledNumberAction(filled));
    }
  }
  //   console.log(props.indexCol, "props!");
  return props.col !== 0 ? (
    <Text style={styles.col}>{props.col}</Text>
  ) : (
    <TextInput
      style={styles.col}
      keyboardType="number-pad"
      onChangeText={(value) =>
        changeNumber(value, props.indexRow, props.indexCol)
      }
      defaultValue={
        filled[props.indexRow][props.indexCol]
          ? String(filled[props.indexRow][props.indexCol])
          : ""
      }
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  row: {
    flexDirection: "row",
  },
  col: {
    padding: 10,
    backgroundColor: "white",
    borderWidth: 1,
    width: 40,
    height: 40,
  },
  textColor: {
    color: "black",
  },
});

export default Row;
