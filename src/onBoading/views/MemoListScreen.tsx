import React from "react";
import { StyleSheet, View, Text } from "react-native";

import MemoList from "../../components/MemoList";
import CircleButton from "../../components/CircleButton";
import { useQuery, gql } from "@apollo/client";

export default function MemoListScreen(props) {
 const { navigation } = props;

 const GET_TODOS = gql`
  query {
   todos {
    id
    title
    content
   }
  }
 `;

 const { loading, error, data } = useQuery(GET_TODOS);
 if (error) console.log(error);
 return (
  <>
   <View>
    {loading && <Text>Loading...</Text>}
    {error && <Text>エラー！${error.message}</Text>}
   </View>
   <View style={styles.container}>
    <MemoList data={data} />
    <CircleButton
     name="plus"
     onPress={() => {
      navigation.navigate("MemoCreate");
     }}
    ></CircleButton>
   </View>
  </>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "#F0F4F8",
 },
});
