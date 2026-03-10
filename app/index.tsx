import { useFonts } from "expo-font";
import { Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";

export default function Index() {
  const [fontsLoaded] = useFonts(Fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.ink,
      }}
    >
      <Text
        style={{
          fontFamily: "Fraunces_900Black",
          fontSize: 32,
          color: Colors.cream,
        }}
      >
        Queen of Coins
      </Text>
      <Text
        style={{
          fontFamily: "CormorantGaramond_300Light_Italic",
          fontSize: 14,
          color: Colors.gold,
          letterSpacing: 2,
          marginTop: 8,
        }}
      >
        daily ritual · grounded return
      </Text>
    </View>
  );
}
