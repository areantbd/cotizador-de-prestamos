import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Result( props ) {
  const { errorMessage, capital, interes, months, total } = props
  return (
    <View style={styles.content}>
      {total && <Text>Total: {total?.totalPay}€</Text>}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: 20
  },
  content: {
    marginTop: 100,
    marginHorizontal: 40
  }
})