import React from "react";
import {
  View,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function JoinScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Image
        style={{
          borderRadius: 100,
          width: 500,
          height: 500,
        }}
        source={require("../assets/grouping-logo.png")}
      />
      <TextInput
        style={{
          fontSize: 40,
          color: "white",
          textAlign: "center",
        }}
        placeholder="Enter username"
      />
      <Button title="Join Chat" fontSize="50" />
      {Platform.OS === "ios" && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
}
