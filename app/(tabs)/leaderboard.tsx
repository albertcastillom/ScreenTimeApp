import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const leaderboard = () => {
  return (
    <View style={styles.container}>
          <Text style={styles.text}>LeaderBoard</Text>
        </View>
  )
}

export default leaderboard

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