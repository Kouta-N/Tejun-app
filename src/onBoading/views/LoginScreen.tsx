import React, { useState, useRef } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  LayoutAnimation,
} from "react-native";

import Button from "../../components/Button";
import { Modalize } from "react-native-modalize";
import { i18n } from "../../i18n/i18n";
import {
  loggingIn,
  loginSuccess,
  loginFailed,
} from "../../redux/modules/loggingInReducer";
import {
  errorProcessing,
  errorSuccess,
  errorFailed,
} from "../../redux/modules/errorReducer";
import {
  loading,
  loadSuccess,
  loadFailed,
} from "../../redux/modules/loadedReducer";
const { width, height } = Dimensions.get("window");

export default function LoginScreen(props) {
  const loginBackGroundImg = require("../../img/login.jpg");
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const login = () => {
    LayoutAnimation.easeInEaseOut();
    return (dispatch, getState) => {
      dispatch(loggingIn());
      dispatch(errorProcessing());
      dispatch(loading());

      // case LOGIN:
      //   return {
      //     ...state,
      //     loggingIn: true,
      //     loaded: false,
      //     error: undefined,
      //   };
      // case LOGIN_SUCCESS:
      //   return {
      //     ...state,
      //     loggingIn: false,
      //     loaded: true,
      //     user: action.data,
      //   };
      // case LOGIN_FAIL:
      //   return {
      //     ...state,
      //     loggingIn: false,
      //     loaded: false,
      //     user: null,
      //     error: action.error,
      //   };

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
            throw Error(response.status);
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
            dispatch(fetchCustomToken()),
          ];
          return Promise.all([...processes]);
        })
        .catch((error) => dispatch(loginFailed(error)));
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
            label={i18n.t("login")}
            onPress={() => login()}
            // onPress={() => {
            //  navigation.reset({
            //   index: 0,
            //   routes: [{ name: "MemoList" }],
            //  });
            // }}
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
