import { ScrollView, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Card from '../../components/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

const dummyFriends = [
  {
    Name: "Mia Kim",
    sessions: 10,
    streak: 5,
  },
  {
    Name: "Jeff B",
    sessions: 2,
    streak: 1,
  },
  {
    Name: "Chloe P",
    sessions: 23,
    streak: 15,
  },
  {
    Name: "Ben Cherio",
    sessions: 3,
    streak: 1,
  },
  {
    Name: "Brian R",
    sessions: 52,
    streak: 33,
  }
];

const dummyFriendRequest = [
  {
    Name: "Javier Alonzo",
  },
];


const friends = () => {
  return (
    <SafeAreaView style={styles.SafeViewContainer}>
      
        <Text style={styles.text}>Friends</Text>
      
      <Card style={styles.container}>
        <Text style={styles.textInner}>Pending</Text>
        {dummyFriendRequest.map(friendRequest =>(
          <View style={styles.requestsContainer} key={friendRequest.Name}>
            <Text style={styles.subText}> {friendRequest.Name}</Text>
            <View style={styles.rightActions}>
              <Button title="accept" />
              <Button title="Ignore" />
            </View>
          </View>
        ))}
      </Card>

      <Card style={styles.container}>
        <Text style={styles.textInner}>Friends - {dummyFriends.length}</Text>
        <ScrollView>
          {dummyFriends.map(friend => (
            <View style={styles.friendContainer} key={friend.Name}>
              <View style={styles.friendLeft}>
               <Text style={styles.subText}>{friend.Name}</Text> 
              </View>
              <View style={styles.friendRight}>
                <Text style={styles.subText}> Sessions: {friend.sessions}, Streak: {friend.streak}</Text>
              </View>
          </View>
          ))}
        </ScrollView>
      </Card>

      <View style={styles.container}>
        <Button title="Add Friends +" />
      </View>
    </SafeAreaView>
  )
}

export default friends

const styles = StyleSheet.create({
   SafeViewContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
    container: {
    backgroundColor: '#ffffff',
    //flex: 1,
  },
  requestsContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#d2d2d2",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    justifyContent: "space-between"
  },
  rightActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  friendContainer: {
    borderTopWidth: 1,
    borderColor: "#d2d2d2",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-between"
  },
  friendRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  friendLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  text: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textInner: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: "bold"
  },
})