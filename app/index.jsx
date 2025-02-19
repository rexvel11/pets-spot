import Color from "@/constants/Color";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: Color.WHITE,
        height: '100%'
      }}
    >
      <Link href={'/login'}>
      
        <Text>Go to login screen</Text>

      </Link>
    </View>
  );
}
