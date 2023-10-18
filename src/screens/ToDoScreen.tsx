import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

import KeyboardSafeView from "../components/KeyBoardSafeView";
import Button from "../components/Button";
import { i18n } from "../i18n/i18n";

const { width } = Dimensions.get("window");
let i = 0; // reduxに置き換える?

export default function ToDoScreen(props) {
  const { navigation } = props;
  const todoList = ["起立", "礼", "着席"];
  const [todo, setToDo] = useState(todoList[0]);

  console.log("⭐️", i);
  console.log("🌞", todoList.length);

  const onPressGo = () => {
    if (todoList.length - 1 > i) {
      i++;
      return setToDo(todoList[i]); // stateに設定
    } else if (todoList.length - 1 === i) {
      return setToDo(i18n.t("finishTodo"));
    }
  };

  const onPressBack = () => {
    if (i !== 0) {
      i--;
      return setToDo(todoList[i]); // stateに設定
    }
  };

  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.toDoText}>{todo}</Text>
      </View>
      <View style={styles.btnContainer}>
        <View>
          <Button onPress={onPressBack} label="戻る" />
        </View>
        <View style={styles.rightBtnContainer}>
          <Button onPress={onPressGo} label="次へ" />
        </View>
      </View>
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
    backgroundColor: "white",
  },
  btnContainer: {
    paddingTop: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
  rightBtnContainer: {
    marginLeft: width / 4,
  },
  toDoText: {
    fontWeight: "bold",
  },
});
