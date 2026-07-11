import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const friends = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>friends</Text>
    </View>
  )
}

export default friends

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
})