import React from "react";
import { View, FlatList, ImageBackground } from "react-native";

import ChatMessage from "../components/ChatMessage";
import MessageInput from "../components/MessageInput";
import Chats from "../data/Chats";
import { Message } from "../types";

function ChatMessageItem({ item }) {
  return <ChatMessage message={item} />;
}

const ChatRoomScreen = ({ route }) => {
  const { id } = route.params.user;
  return (
    <ImageBackground
      source={require(".././assets/images/BG.png")}
      style={{ width: "100%", height: "100%", flex: 1 }}
    >
      <FlatList
        data={Chats.messages}
        renderItem={ChatMessageItem}
        keyExtractor={(item) => item.id.toString()}
        inverted
      />
      <MessageInput />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
