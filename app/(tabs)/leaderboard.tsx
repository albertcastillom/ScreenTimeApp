import { ScrollView, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Card from '../../components/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

const leaderboardDummyEntries = [
  {
    Name: "Brian R",
    hoursFocused: 52,
  },
  {
    Name: "Chloe P",
    hoursFocused: 23,
  },
  {
    Name: "Mia Kim",
    hoursFocused: 20,
  },
  {
    Name: "Ben Cherio",
    hoursFocused: 3,
  },
  {
    Name: "Jeff B",
    hoursFocused: 1,
  },
]

const leaderboard = () => {
  return (
    <SafeAreaView style={styles.SafeViewContainer}>
      <Text style={styles.text}>LeaderBoard</Text>
      <View style={styles.allButtonsContainer}>
        <View style={styles.buttonContainer}>
          <Button title="This Week" color={"white"}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="This Month" color={"white"}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="All Time" color={"white"}/>
        </View>
      </View>
      <Card>
        <ScrollView>
        {
          leaderboardDummyEntries.map(entry => (
            <View style={styles.entryContainer} key={entry.Name} >
              <View style={styles.entryLeft}>
                <Text>
                  {entry.Name}
                </Text>
              </View>
              <View style={styles.entryRight}>
                <Text>{entry.hoursFocused}h</Text>
              </View>
            </View>
        ))}
        </ScrollView>
      </Card>
    </SafeAreaView>
  )
}

export default leaderboard

const styles = StyleSheet.create({
  SafeViewContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  container: {
    backgroundColor: '#ffffff',
    width: "100%"
  },
  allButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  buttonContainer: {
    backgroundColor: "#000000",
    borderRadius: 20,
    padding: 1,
    margin: 5,
  },
  entryContainer: {
    borderBottomWidth: 1,
    borderColor: "#d2d2d2",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-between"
  },
  entryRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  entryLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  text: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subText: {
    color: '#000000',
    fontSize: 18,

  },
})