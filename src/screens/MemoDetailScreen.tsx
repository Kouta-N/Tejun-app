import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import CircleButton from "../components/CircleButton";
import { shape } from "prop-types";

export default function MemoListScreen(props) {
  const { navigation } = props;
  return (
    <View>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト 書体やレイアウトを確認 本文用
        </Text>
      </ScrollView>
      <CircleButton
        style={{ top: 60, bottom: "auto" }}
        name="edit"
        onPress={() => {
          navigation.navigate("MemoEdit");
        }}
      ></CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  memoHeader: {
    backgroundColor: "#467FD3",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoDate: {
    color: "#ffffff",
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
