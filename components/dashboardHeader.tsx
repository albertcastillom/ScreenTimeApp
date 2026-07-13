import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'


const DashboardHeader = () => {
  return (
    <SafeAreaView style={styles.container}>    
       <Text style={styles.text}>Home</Text>
        <View style={styles.rightActions}>
          <Ionicons name="notifications-outline" size={28}/>
          <Image source={require("../assets/avatar.jpeg")} style={styles.avatar}/>
        </View>
    </SafeAreaView>
  )
}

export default DashboardHeader

const styles = StyleSheet.create({
    container: {
    flexDirection: "row",
    backgroundColor: '#ffffff',
    alignItems: "center",
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 16,
  },
  text: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
   rightActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
})
