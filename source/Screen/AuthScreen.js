import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { googleLogin } from "../../constants/GoogleLogin";
import * as bookActions from "../../source/Component/Redux/action";
import { useDispatch } from "react-redux";
const AuthScreen = (props) => {
  const dispatch = useDispatch();
  const check = (data) => {
    if (data) {
      props.navigation.navigate("Home");
      //store it in redux
     // console.log(data.user.name);
      dispatch(bookActions.addname(data.user.name));
    } else {
      return;
    }
  };

  const googleSignIn = async () => {
    const googleData = await googleLogin();
    check(googleData);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 75, fontWeight: "bold", fontStyle: "normal" }}>
        Welcome
      </Text>
      <TouchableOpacity
        onPress={googleSignIn}
        style={{
          borderWidth: 1.5,
          paddingHorizontal: 25,
          paddingVertical: 10,
          marginVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 27, height: 27 }}
            source={require("../../assets/google_icon.png")}
          />
        </View>
        <Text style={{ fontSize: 14, fontStyle: "normal", marginLeft: 5 }}>
          Continue with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthScreen;
