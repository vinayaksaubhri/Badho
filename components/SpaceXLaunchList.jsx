import { StyleSheet, Text, View } from "react-native";
import { useQuery, gql } from "@apollo/client";
import ListView from "./ListView";
import ApolloClientHoc from "../Hocs/ApolloClient";

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
    }
  }
`;

const SpaceXLaunchList = ({ navigation }) => {
  //   const { loading, error, data } = useQuery(GET_Launches);

  return (
    <ApolloClientHoc>
      <ListView navigation={navigation} />
    </ApolloClientHoc>
  );
};
export default SpaceXLaunchList;
const styles = StyleSheet.create({});
