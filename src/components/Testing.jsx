import { View, Platform } from "react-native";
import Text from "./Text";
// import { useFonts } from "expo-font";
const Testing = () => {
  //   const [fontsLoaded] = useFonts({
  //     Roboto: require("../../assets/fonts/Roboto.ttf"),
  //     Arial: require("../../assets/fonts/Arial.ttf"),
  //   });
  //   if (!fontsLoaded) {
  //     return <Text>Loading...</Text>;
  //   }
  return (
    <View style={{ padding: 30 }}>
      <Text style={{ fontFamily: "Roboto" }}>Yo, this is Poppins Regular!</Text>
      <Text style={{ fontFamily: "Arial" }}>Yo, this is Poppins Regular!</Text>
      <Text>Yo, this is Poppins Bold!</Text>
      <Text>Your platform is: {Platform.OS}</Text>
    </View>
  );
};
export default Testing;
