import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/modules/counterIndex";

import KeyboardSafeView from "../../components/KeyBoardSafeView";
import Button from "../../components/Button";
import { i18n } from "../../i18n/i18n";

const { width } = Dimensions.get("window");

export default function ToDoScreen(props) {
 let index = 0;
 const { navigation } = props;
 // const index = useSelector((state: any) => state.index.value);
 const dispatch = useDispatch();
 const todoList = ["起立", "礼", "着席"]; // apiから取得するようにする
 const [todo, setToDo] = useState(todoList[0]);

 const onPressGo = () => {
  if (todoList.length > index) {
   index++;
   // dispatch(increment());
  }
  if (todoList.length === index) {
   return setToDo(i18n.t("finishTodo"));
  } else {
   return setToDo(todoList[index]);
  }
 };

 const onPressBack = () => {
  if (index !== 0) {
   index--;
   // dispatch(decrement());
   return setToDo(todoList[index]);
  }
 };

 return (
  <KeyboardSafeView style={styles.container}>
   <View style={styles.inputContainer}>
    {todoList.length !== index && <Text style={styles.toDoText}>{todo}</Text>}
    {todoList.length === index && (
     <Text style={styles.toDoFinalText}>{todo}</Text>
    )}
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
  textAlign: "center",
  color: "black",
 },
 toDoFinalText: {
  fontWeight: "bold",
  color: "red",
 },
});
