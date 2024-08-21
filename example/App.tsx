import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as MotionCapture from 'react-native-motion-capture';

export default function App() {
  const [permissions, setPermissions] =
    useState<MotionCapture.ActivityPermissionResults | null>(null);

  useEffect(() => {
    const getActivityPermissions = async () => {
      const result = await MotionCapture.requestActivityPermissionsAsync();

      console.log('result', result);

      if (result) {
        setPermissions(result);
      }
    };

    void getActivityPermissions();
  }, []);

  useEffect(() => {
    if (!permissions || permissions === 'denied') return () => {};

    MotionCapture.startActivityTransitionMonitoring();

    const subscription = MotionCapture.addActivityTransitionListener(
      (event) => {
        console.log('event', event);
      }
    );

    return () => {
      MotionCapture.stopActivityTransitionMonitoring();
      subscription.remove();
    };
  }, [permissions]);

  return (
    <View style={styles.container}>
      <Text>{MotionCapture.hello()}</Text>
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
