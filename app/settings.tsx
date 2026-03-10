import { Text, View } from 'react-native';
import { Colors } from '../constants/Colors';

export default function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.ink }}>
      <Text style={{ color: Colors.cream, fontFamily: 'Fraunces_700Bold', fontSize: 24 }}>Settings</Text>
    </View>
  );
}
