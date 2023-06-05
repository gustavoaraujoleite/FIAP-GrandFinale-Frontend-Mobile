import { ImageBackground } from "react-native";
import { Text, View } from "react-native";
import bgImage from "../../../assets/images/main-bg.png";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import HomeContent from "../../components/HomeContent";
export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        imageStyle={{ opacity: 0.2 }}
      >
        <HomeContent />
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
