import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativeMotionCapture from 'react-native-motion-capture';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeMotionCapture.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
