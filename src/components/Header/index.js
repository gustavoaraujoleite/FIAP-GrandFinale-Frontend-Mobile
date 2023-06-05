import { Image, View, SafeAreaView, StyleSheet } from "react-native";
import logo from "../../../assets/images/codados-logo.png";
export default function Header(props) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.boxContainer}>
        <Image source={logo} style={styles.picture} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 40,
    paddingBottom: 16,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
  boxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  picture: {
    width: 120,
    height: 46,
  },
});
