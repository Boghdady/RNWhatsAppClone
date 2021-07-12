import * as React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import ChatListItem from "../components/ChatListItem";
import { ChatRoom, Message, User } from "../types";
import chatRooms from "../data/ChatRooms";
import Router from "../constants/Routes";

function chatRoomItem(item, onPress) {
  return <ChatListItem chatRoom={item} onPress={onPress} />;
}

function Separator() {
  return <View style={styles.separator} />;
}

export default function ChatsScreen({ navigation }) {
  return (
    <FlatList
      style={styles.container}
      data={chatRooms}
      renderItem={({ item }) =>
        chatRoomItem(item, () => {
          navigation.navigate(Router.ChatRoom, {
            id: item.id,
            user: item.users[1],
          });
        })
      }
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
