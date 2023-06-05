import { ScrollView, ImageBackground, StyleSheet } from "react-native";
import bgImage from "../../../assets/images/main-bg.png";
import RegistrationContent from "../../components/RegistrationContent";
export default function Registration() {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
        imageStyle={{ opacity: 0.2 }}
      >
        <ScrollView style={styles.contentContainer}>
          <RegistrationContent />
        </ScrollView>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
  },
  contentContainer: {
    marginTop: 24,
  },
});
