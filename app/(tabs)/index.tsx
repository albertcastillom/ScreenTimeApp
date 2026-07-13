import { StyleSheet, Text, View, Image } from 'react-native'
import  DashboardHeader from "../../components/dashboardHeader"
import { Avatar } from '@tamagui/avatar'

export default function Index() {
  return (
    <View style={styles.container}>
      <DashboardHeader />
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
})
