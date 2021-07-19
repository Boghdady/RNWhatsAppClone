import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
    marginHorizontal: 10,
    alignItems: "flex-end",
    marginTop: 5,
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 40,
    padding: 14,
    flex: 1,
    alignItems: "flex-end",
  },
  buttonContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.light.tint,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 16,
  },
  icon: {
    marginLeft: 12,
  },
});

export default styles;
