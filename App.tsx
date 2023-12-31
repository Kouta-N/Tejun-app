import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
 CardStyleInterpolators,
 createStackNavigator,
} from "@react-navigation/stack";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import MemoListScreen from "./src/onBoading/views/MemoListScreen";
import MemoDetailScreen from "./src/onBoading/views/MemoDetailScreen";
import MemoEditScreen from "./src/onBoading/views/MemoEditScreen";
import MemoCreateScreen from "./src/onBoading/views/MemoCreateScreen";
import LoginScreen from "./src/onBoading/views/LoginScreen";
import SignUpScreen from "./src/onBoading/views/SignUpScreen";
import ToDoScreen from "./src/onBoading/views/ToDoScreen";
import { i18n } from "./src/i18n/i18n";
import store from "./src/redux/modules/store";
import { Provider, useSelector, useDispatch } from "react-redux";
import { resetIndex } from "./src/redux/modules/counterIndex";
import { connect } from "react-redux";

const Stack = createStackNavigator();

export default function App() {
 const apolloClient = new ApolloClient({
  uri: "http://localhost:8082/query",
  cache: new InMemoryCache(),
 });

 return (
  <ApolloProvider client={apolloClient}>
   <Provider store={store}>
    <NavigationContainer>
     <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{
       headerStyle: { backgroundColor: "#dffad4" },
       headerTitleStyle: { color: "#000000" },
       headerTitle: i18n.t("headerTitle"),
       headerTintColor: "#000000",
       headerBackTitle: "Back",
       cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
       gestureEnabled: true,
       gestureDirection: "horizontal",
      }}
     >
      <Stack.Screen name="MemoList" component={MemoListScreen} />
      <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
      <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
      <Stack.Screen name="ToDoList" component={ToDoScreen} />
      <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
      <Stack.Screen
       name="Login"
       component={LoginScreen}
       options={{
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
       }}
      />
      <Stack.Screen
       name="SignUp"
       component={SignUpScreen}
       options={{
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
       }}
      />
     </Stack.Navigator>
    </NavigationContainer>
   </Provider>
  </ApolloProvider>
 );
}

// ここでactionsをpropsとして渡している
// connect(
//  (state) => ({ ...state }),
//  (dispatch) => {
//   const actions = bindActionCreators(dispatch);
//   return {
//    actions,
//   };
//  }
// )(App);
