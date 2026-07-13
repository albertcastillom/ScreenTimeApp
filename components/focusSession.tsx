import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const FocusSession = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Start Focus Session</Text>
      <Text style={styles.subText}>Send a screen time block request to a friend</Text>
      <Ionicons name="play-circle" size={28} />
    </View>
  )
}

export default FocusSession

const styles = StyleSheet.create({
    card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    
    // iOS Shadow properties
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    
    // Android Shadow property
    elevation: 4, 
  },
   text: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
   subText: {
    color: '#000000',
    fontSize: 16,
  },
})