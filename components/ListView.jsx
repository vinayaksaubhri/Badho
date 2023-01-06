import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useQuery, gql } from "@apollo/client";
import { Dimensions } from "react-native";

const GET_Launches = gql`
  {
    launches(limit: 10) {
      details
      launch_date_local
      launch_success
      launch_year
      mission_name
      rocket {
        rocket_name
      }
      id
      mission_id
    }
  }
`;
const { width, height } = Dimensions.get("window");
const ListItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.ListItemContainer}
      onPress={() => navigation.navigate("InfoScreen", { ...item })}
    >
      <Text style={styles.ListItemText}>{item.mission_name}</Text>
    </TouchableOpacity>
  );
};
const ListView = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_Launches);

  if (loading) {
    return (
      <View style={styles.Container}>
        {/* <Text>loading...</Text> */}
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.Heading}>SpaceX Launches</Text>
      <FlatList
        data={data.launches}
        renderItem={({ item }) => (
          <ListItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.mission_name}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default ListView;
const styles = StyleSheet.create({
  ListItemContainer: {
    width: "100%",
    height: 100,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  Container: {
    width,
    height,
    paddingTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  ListItemText: {
    fontSize: 20,
  },
  Heading: {
    fontSize: 30,
  },
});
