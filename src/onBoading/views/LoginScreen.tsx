import React, { useState } from "react";
import {
 Text,
 TextInput,
 View,
 StyleSheet,
 TouchableOpacity,
 ImageBackground,
 Dimensions,
} from "react-native";

import Button from "../../components/Button";
import { i18n } from "../../i18n/i18n";
const { width, height } = Dimensions.get("window");

export default function LoginScreen(props) {
 const loginBackGroundImg = require("../../img/login.jpg");
 const { navigation } = props;
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const postLogin = () => {
  return (dispatch, getState) => {
   dispatch(requestLogin());

   const { email, password } = getState().credentials;

   return fetch(`${config.apiURL}login`, {
    method: "POST",
    credentials: "include",
    headers: {
     Accept: "application/json",
     "Content-Type": "application/json",
     "Accept-Language": i18n.locale,
    },
    body: JSON.stringify({ email, password }),
   })
    .then((response) => {
     if (response.status === 422) {
      throw errors(response.status);
     }
     return response.json();
    })
    .then((json) => {
     if (json.code === 401) {
      throw json;
     }

     const adjustEvent = new AdjustEvent(config.ADJUST_EVENT_LOGIN);
     const processes = [
      dispatch(loginSuccess(json)),
      dispatch(actions.reset("credentials.email")),
      dispatch(actions.reset("credentials.password")),
      dispatch(fetchMyTeams()),
      dispatch(fetchCustomToken()),
     ];
     return Promise.all([...processes]);
    })
    .catch((error) => dispatch(loginFail(error)));
  };
 };

 return (
  <View style={styles.container}>
   <ImageBackground
    source={loginBackGroundImg}
    resizeMode="cover"
    style={styles.backgroundImg}
   >
    <View style={styles.blackFilter} />
    <View style={styles.inner}>
     <Text style={styles.title}>Login</Text>
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
       navigation.reset({
        index: 0,
        routes: [{ name: "MemoList" }],
       });
      }}
     />
     <View style={styles.footer}>
      <Text style={styles.footerText}>Not registered?</Text>
      <TouchableOpacity
       onPress={() => {
        navigation.reset({
         index: 0,
         routes: [{ name: "SignUp" }],
        });
       }}
      >
       <Text style={styles.footerLink}>Sign up here!</Text>
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
 },
 inner: {
  paddingHorizontal: 27,
  paddingVertical: 24,
  marginTop: 10,
  // backgroundColor: "#ffffff",
  // opacity: 0.85,
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
  backgroundColor: "rgba(0,0,0,0.5)",
  width,
  height,
  position: "absolute",
 },
 footer: {
  flexDirection: "row",
 },
});
