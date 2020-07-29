import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import io from "socket.io-client";
import { GiftedChat } from "react-native-gifted-chat";

export default function HomeScreen() {
  const [receiveMessages, setReceiveMessages] = useState([]);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("http://192.168.10.194:3002");
    socket.current.on("message", (message) => {
      setReceiveMessages((prevState) => GiftedChat.append(prevState, message));
    });
  }, []);

  const onSend = (messages) => {
    console.log(messages);
    socket.current.emit("message", messages[0].text);
    setReceiveMessages(prevState => GiftedChat.append(prevState, messages));
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={receiveMessages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1
        }}
      />
      {Platform.OS === "android" && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
}
