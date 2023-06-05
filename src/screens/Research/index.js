import { ImageBackground } from "react-native";
import { ScrollView, View, StyleSheet } from "react-native";
import bgImage from "../../../assets/images/main-bg.png";
import ResearchContent from "../../components/ResearchContent";
export default function Research() {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
        imageStyle={{ opacity: 0.2 }}
      >
        <View style={styles.contentContainer}>
          <ResearchContent />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    marginTop: 24,
  },
});
