import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 6,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  message: {},
  image: {
    height: 200,
    width: "100%",
    marginVertical: 10,
  },
  time: {
    marginVertical: 4,
    alignSelf: "flex-end",
  },
});

export default styles;
