import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import io from "socket.io-client";

export default function HomeScreen() {
  const [messageToSend, setMessageToSend] = useState("");
  const socket = useRef(null);
  
  useEffect(() => {
    socket.current = io("http://192.168.10.194:3002");
  }, []);

  const sendMessage = () => {
    socket.current.emit("message", messageToSend);
  }

  return (
    <View style={styles.container}>
      <Text>Hello React Native!</Text>
      <TextInput
        value={messageToSend}
        onChangeText={(text) => setMessageToSend(text)}
        placeholder="Enter chat message.."
        onSubmitEditing={sendMessage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
