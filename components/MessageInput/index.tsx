import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  Fontisto,
} from "@expo/vector-icons";
import { TextInput } from "react-native";
import Colors from "../../constants/Colors";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          multiline
          onChangeText={setMessage}
          selectionColor={Colors.light.tint}
        />
        <Entypo name="attachment" size={24} color="grey" />
        {!message && (
          <Fontisto name="camera" size={24} color="grey" style={styles.icon} />
        )}
      </View>
      <View style={styles.buttonContainer}>
        {!message ? (
          <MaterialCommunityIcons name="microphone" size={28} color="#fff" />
        ) : (
          <MaterialIcons name="send" size={28} color="#fff" />
        )}
      </View>
    </View>
  );
};

export default MessageInput;
