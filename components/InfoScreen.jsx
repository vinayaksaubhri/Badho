import { Button, Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");
const InfoScreen = ({ route, navigation }) => {
  const item = route.params;

  return (
    <View style={styles.Container}>
      <Text style={styles.Heading}>Mission Name : {item.mission_name}</Text>
      <Text style={styles.Heading}>Launch Year : {item.launch_year}</Text>
      <Text style={styles.Heading}>
        Mission Success :{" "}
        {item.launch_success ? "Successful" : "Not Successful"}
      </Text>
      <Text style={styles.Heading}>
        Mission Detail : {item.details ? item.details : "Detail Not Available"}
      </Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};
export default InfoScreen;
const styles = StyleSheet.create({
  Container: {
    paddingTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
    height,
    width,
  },
  Heading: {
    fontSize: 20,
    marginBottom: 20,
  },
});
