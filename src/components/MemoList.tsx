import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MemoList(props) {
 const navigation = useNavigation();
 const { data } = props;
 // console.log("🌕", data);
 console.log("🌕", data?.todos[0].content);
 console.log("🌕", data?.todos[0]);
 return (
  <View>
   <TouchableOpacity
    style={styles.memoListItem}
    onPress={() => {
     navigation.navigate("ToDoList");
    }}
   >
    <View>
     <Text>{data?.todos[0].title}</Text>
     <Text style={styles.memoListItemDate}>2020年12月24日</Text>
    </View>
    <TouchableOpacity
     style={styles.memoDelete}
     onPress={() => {
      Alert.alert("Are you sure?");
     }}
    >
     <Feather name="x" size={24} color="#B0B0B0" />
    </TouchableOpacity>
   </TouchableOpacity>
  </View>
 );
}

const styles = StyleSheet.create({
 memoListItem: {
  backgroundColor: "#ffffff",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingVertical: 16,
  paddingHorizontal: 19,
  alignItems: "center",
  borderBottomWidth: 1,
  borderColor: "rgba(0,0,0,0.15)",
 },
 memoListItemTitle: {
  fontSize: 16,
  lineHeight: 32,
 },
 memoListItemDate: {
  fontSize: 12,
  lineHeight: 16,
  color: "#848484",
 },
 memoDelete: {
  padding: 8,
 },
});
