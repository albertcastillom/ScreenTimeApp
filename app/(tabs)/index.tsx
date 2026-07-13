import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import  DashboardHeader from "../../components/dashboardHeader"
import FocusSession from '../../components/focusSession'
import Card from '../../components/Card' 
import { Avatar } from '@tamagui/avatar'
import { Ionicons } from '@expo/vector-icons'

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <DashboardHeader />
      <FocusSession />
      <Card style={{aspectRatio: 1, justifyContent: "space-between"}}>
      <View>
        <Text style={styles.text}>Start Focus Session</Text>
        <Text style={styles.subText}>Send a screen time block request to a friend</Text>
      </View>
      <Ionicons name="play-circle" size={42} />
      </Card>



      <Card style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between"}}>
      <View>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Start Focus Session</Text>
         <Text style={{fontSize: 12}}>Send a screen time block request</Text>
      </View>
      <Ionicons name="play-circle" size={36} />
      </Card>
      </ScrollView>
    </View>
  )
}
  ///TamaGUI avatar component for later
   /* <Avatar circular size="$6">
        <Avatar.Image src={require('../../assets/avatar.jpeg')} />
        <Avatar.Fallback background="grey" />
      </Avatar> */
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
