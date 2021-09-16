import * as Google from "expo-google-app-auth";


export const googleLogin = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId:
        '507790405550-shvbeqe6qb9r4k1sk2e9eeanfauiit8i.apps.googleusercontent.com',
      scopes: ["profile", "email"],
    });

    console.log("user Data -> ", result);

    if (result.type === "success") {
      return result;
    } else {
      console.log("failed");
    }
  } catch (err) {
    console.log(err);
  }
};
