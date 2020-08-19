import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as Brightness from 'expo-brightness';

export default function App() {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Тайтл",
      "Увеличить яркость экрана на максимум?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
            (async () => {
              const { status } = await Brightness.requestPermissionsAsync();
              if (status === 'granted') {
                Brightness.setSystemBrightnessAsync(1);
              }
            })();
        } }
      ],
      { cancelable: false }
    );

    const createTwoButtonAlert2 = () => {
      (async () => {
        const { status } = await Brightness.requestPermissionsAsync();
        if (status === 'granted') {
          Brightness.setSystemBrightnessAsync(0.3);
        }
      })();
    }
    
    

  return (
    <View style={styles.container}>
      <Text>Мобильное приложение на React</Text>
      <Button style={styles.button} title="Нажми на меня" onPress={createTwoButtonAlert} />
      <Button style={styles.button} title="Теперь меня" onPress={createTwoButtonAlert2} />
      <StatusBar style="auto" />
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
  button: {
    marginTop: 20,
    paddingTop: 20,
  },
});
