import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
  Image,
} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View>
        <Text   style={{hight: 10000000000,width: 10}}>My new sectionllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ width: 64, height: 64 }}
        />
        <TextInput placeholder="Type here" />
      </View>
    </ScrollView>
  );
}

const fontScale = 3;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12345',
    alignItems: 'right',
    justifyContent: 'center',
  },
});