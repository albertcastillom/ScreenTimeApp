import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import  DashboardHeader from "../../components/dashboardHeader"
import FocusSession from '../../components/focusSession'
import Card from '../../components/Card' 
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View style={styles.container}>
      <DashboardHeader />
      <ScrollView>
      <Card style={{aspectRatio: 1, justifyContent: "space-between"}}>
      <View>
        <Text style={styles.text}>Start Focus Session</Text>
        <Text style={styles.subText}>Send a screen time block request to a friend</Text>
      </View>
      <Ionicons name="play-circle" size={42} />
      </Card>
      <Link style={styles.text} href={"/signupLogin"}>Login In </Link>
      </ScrollView>
    </View>
  )
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
