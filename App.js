import React from "react";
import Constants from "expo-constants"
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import theme from "./src/utils/theme"
import Form from "./src/components/Form";


export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"}/>
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.background}/>
        <Text style={styles.titleApp} >Cotizador de Préstamos</Text>
        <Form />
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
    height: 290,
    alignItems: "center", 
    // marginTop: Constants.statusBarHeight
  },
  background:{ 
    backgroundColor: theme.colors.primary,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: "absolute",
    zIndex: -1
  },
  titleApp: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10
  }
})