import React, { useState } from "react";
import {
 Text,
 TextInput,
 StyleSheet,
 View,
 Alert,
 TouchableOpacity,
 ImageBackground,
 Dimensions,
} from "react-native";

import Button from "../../components/Button";

const loginBackGroundImg = require("../../img/signUp.jpg");
const { width, height } = Dimensions.get("window");

export default function SignUpScreen(props) {
 const { navigation } = props;
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 return (
  <View style={styles.container}>
   <ImageBackground
    source={loginBackGroundImg}
    resizeMode="cover"
    style={styles.backgroundImg}
   >
    <View style={styles.blackFilter} />
    <View style={styles.inner}>
     <Text style={styles.title}>Sign Up</Text>
     <TextInput
      style={styles.input}
      value={email}
      onChangeText={(text) => {
       setEmail(text);
      }}
      autoCapitalize="none"
      keyboardType="email-address"
      placeholder="Email Address"
      textContentType="emailAddress"
     />
     <TextInput
      style={styles.input}
      value={password}
      onChangeText={(text) => {
       setPassword(text);
      }}
      autoCapitalize="none"
      placeholder="Password"
      secureTextEntry
      textContentType="password"
     />
     <Button
      label="Submit"
      onPress={() => {
       navigation.navigate("MemoList");
      }}
     />
     <View style={styles.footer}>
      <Text style={styles.footerText}>Already registered?</Text>
      <TouchableOpacity
       onPress={() => {
        navigation.reset({
         index: 0,
         routes: [{ name: "Login" }],
        });
       }}
      >
       <Text style={styles.footerLink}>Log in.</Text>
      </TouchableOpacity>
     </View>
    </View>
   </ImageBackground>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "#F0F4F8",
 },
 inner: {
  paddingHorizontal: 27,
  paddingVertical: 24,
  marginTop: 10,
  backgroundColor: "#ffffff",
  borderRadius: 20,
  opacity: 0.9,
 },
 title: {
  fontSize: 24,
  lineHeight: 32,
  fontWeight: "bold",
  marginBottom: 24,
 },
 input: {
  fontSize: 16,
  height: 48,
  borderColor: "#DDDDDD",
  borderWidth: 1,
  backgroundColor: "#ffffff",
  paddingHorizontal: 8,
  marginBottom: 16,
 },
 buttonContainer: {
  backgroundColor: "#467FD3",
  borderRadius: 4,
  alignSelf: "flex-start",
  marginBottom: 24,
 },
 buttonLabel: {
  fontSize: 16,
  lineHeight: 32,
  paddingVertical: 8,
  paddingHorizontal: 32,
  color: "#ffffff",
 },
 footerText: {
  fontSize: 14,
  lineHeight: 24,
  marginRight: 8,
 },
 footerLink: {
  fontSize: 14,
  lineHeight: 24,
  color: "#467FD3",
 },
 backgroundImg: {
  flex: 1,
 },
 blackFilter: {
  backgroundColor: "rgba(0,0,0,0.35)",
  width,
  height,
  position: "absolute",
 },
 footer: {
  flexDirection: "row",
 },
});
