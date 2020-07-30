import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useDispatch } from "react-redux";

export default function JoinScreen({ joinChat }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

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
        onChangeText={(text) => setUsername(text)}
        value={username}
        style={{
          fontSize: 40,
          color: "white",
          textAlign: "center",
        }}
        placeholder="Enter username"
      />
      <Button
        title="Join Chat"
        fontSize="50"
        onPress={() => dispatch({type: "server/join", data: username})}
      />
      {Platform.OS === "ios" && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
}
