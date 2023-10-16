import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyBoardSafeView";
import Button from "../components/Button";

const todo = ["起立", "例", "着席"];

export default function ToDoScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.textBox}>{todo[0]}</Text>
      </View>
      {/* <CircleButton
        name="check"
        onPress={() => {
          navigation.goBack();
        }}
      /> */}
      <Button style={styles.button}>ボタン</Button>
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    backgroundColor: "initial",
    backgroundImage: "linear-gradient(-180deg, #00D775, #00BD68)",
    borderRadius: 5,
    // box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
    // color: #FFFFFF;
    // cursor: pointer;
    // display: inline-block;
    // font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
    // height: 44px;
    // line-height: 44px;
    // outline: 0;
    // overflow: hidden;
    // padding: 0 20px;
    // pointer-events: auto;
    // position: relative;
    // text-align: center;
    // touch-action: manipulation;
    // user-select: none;
    // -webkit-user-select: none;
    // vertical-align: top;
    // white-space: nowrap;
    // width: 100%;
    // z-index: 9;
    // border: 0;
  },
});
