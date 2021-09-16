import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

//import { colors } from "../constants/Colors";
import HomeScreen from "../source/Screen/HomeScreen";
import BookDetail from "../source/Screen/BookDetail";
import colors from "../constants/colors";
import CartScreen from "../source/Screen/CartScreen";
import AuthScreen from "../source/Screen/AuthScreen";

import { TouchableOpacity } from "react-native";
//screen imports
const HomeStack = createStackNavigator();

const HomeTab = ({ navigation }) => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        component={BookDetail}
        name="Detail"
        options={{
          headerTitle: () => {
            return false;
          },

          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("HomeScreen");
                }}
                style={{ padding: 10 }}
              >
                <Ionicons name="chevron-back" size={23} />
              </TouchableOpacity>
            );
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.secondary}
      barStyle={{ backgroundColor: "white" }}
      shifting={true}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home-filled" size={24} color={color} />
          ),
        }}
        name="home"
        component={HomeTab}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-cart" size={24} color={color} />
          ),
        }}
        name="cart"
        component={CartScreen}
      />
    </Tab.Navigator>
  );
};

const AuthStack = createStackNavigator();

const MyAuth = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Auth"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="Auth" component={AuthScreen} />
    </AuthStack.Navigator>
  );
};

const MainStack = createStackNavigator();
const MainApp = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Auth"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Auth" component={MyAuth} />
      <MainStack.Screen name="Home" component={BottomNav} />
      {/* <MainStack.Screen name='TruckUpload' component={TruckUploadScreen}  /> */}
      {/* <MainStack.Screen name='SearchAddress' component={AddressSearch}/>
            <MainStack.Screen name='AddAddress' component={AddAddress}/>
            <MainStack.Screen name='Payment' component={PaymentPage} />
            <MainStack.Screen name='ChefScreen' component={ChefScreen}/>
            <MainStack.Screen name='LiveLocation' component={LiveLocation}/>
            <MainStack.Screen name='Filter' component={FilterScreen}/> */}
    </MainStack.Navigator>
  );
};

const AccountStack = createStackNavigator()
const MyAcc = () => {
  return(
    <AccountStack.Navigator initialRouteName='Account' screenOptions={{headerShown:false}}>
      <AccountStack.Screen name='Account' component = {AccountScreen} />
      <AccountStack.Screen name='MyAccount' component = {MyAccount} />
    </AccountStack.Navigator>
  )
}

const AppFlow = createStackNavigator();
const AppNav = () => {
  return (
    <NavigationContainer>
      <AppFlow.Navigator screenOptions={{ headerShown: false }}>
        <AppFlow.Screen name='Auth' component={MyAuth} />
        <AppFlow.Screen name="Main" component={MainApp} />
      </AppFlow.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
