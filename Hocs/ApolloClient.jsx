import { StyleSheet, Text, View } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache(),
});
const ApolloClientHoc = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default ApolloClientHoc;
const styles = StyleSheet.create({});
