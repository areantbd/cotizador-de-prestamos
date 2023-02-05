import React from "react";
import Constants from "expo-constants"
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import theme from "./src/utils/theme"


export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Text>Formulario</Text>
      </SafeAreaView>

      <View>
        <Text>Resultado</Text>
      </View>

      <View>
        <Text>Footer</Text>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.colors.primary,
    height: 200, 
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center", 
    marginTop: Constants.statusBarHeight
  }
})