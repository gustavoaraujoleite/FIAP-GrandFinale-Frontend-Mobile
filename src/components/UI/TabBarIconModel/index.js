import { StyleSheet } from "react-native";
import { View } from "react-native";

export default function TabBarIconModel(props) {
  return (
    <View>
      <View
        style={[styles.boxContainer, { borderTopColor: props.borderTopColor }]}
      >
        {props.icon}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    borderTopWidth: 2,
    paddingTop: 6,
    width: 62,
    alignItems: 'center'
  },
});
