import * as React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import ChatListItem from "../components/ChatListItem";
import { ChatRoom, Message, User } from "../types";
import chatRooms from "../data/ChatRooms";

function chatRoomItem({ item }) {
  return <ChatListItem chatRoom={item} />;
}

function Separator() {
  return <View style={styles.separator} />;
}

export default function ChatsScreen() {
  return (
    <FlatList
      style={styles.container}
      data={chatRooms}
      renderItem={chatRoomItem}
      ItemSeparatorComponent={Separator}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    color: "grey",
  },
});
