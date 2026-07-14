import React from 'react'
import { StyleSheet, Text, View, Image, Button, Pressable, ScrollView, Switch } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '../components/Card'

const user = {
  Name: "Chloe Palmer",
  Username: "chloe.lorraine",
  YearCreated: 2025,
  Sessions: 20,
  Streak: 3,
  Friends: 5, 
  Rank: 4
};

function Profile() {
  return (
    <SafeAreaView style={styles.SafeViewContainer} >
      <ScrollView showsVerticalScrollIndicator={false}>

      <Text style={styles.text}>Profile</Text>

      <Card style={styles.profileContainer}>
        <Image source={require("../assets/avatar.jpeg")} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{user.Name}</Text>
          <Text style={styles.mutedText}>@{user.Username}</Text>
          <Text style={styles.mutedText}>Member since {user.YearCreated}</Text>
        </View>
        <Pressable style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </Pressable>
      </Card>

      <View style={styles.infoContainer}>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>{user.Sessions}</Text>
          <Text style={styles.statLabel}>Sessions</Text>
        </Card>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>{user.Streak}d</Text>
          <Text style={styles.statLabel}>Streak</Text>
        </Card>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>{user.Friends}</Text>
          <Text style={styles.statLabel}>Friends</Text>
        </Card>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>#{user.Rank}</Text>
          <Text style={styles.statLabel}>Rank</Text>
        </Card>
      </View>

      <Card style={styles.container}>
        <Text style={styles.text}>Notifications</Text>
        <View style={styles.notiContainer}>
          <View style={styles.notiLeft}>
            <Text>Push Notifications</Text>
          </View>
          <View style={styles.notiRight}>
            <Switch value />
          </View>
        </View>
         <View style={styles.notiContainer}>
          <View style={styles.notiLeft}>
            <Text>Friend Requests</Text>
          </View>
          <View style={styles.notiRight}>
            <Switch value />
          </View>
        </View>
      </Card>

      <Card style={styles.container}>
        <View>
          <Button title="Privacy Policy" color={"grey"}/>
        </View>
        <View>
          <Button title="Terms of Service" color={"grey"}/>
        </View>
      </Card>
      
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  SafeViewContainer: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 20,
  },
  profileContainer: {
    backgroundColor: '#ffffff',
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 0,
    padding: 20,
    gap: 16,
  },
  profileInfo: {
    flex: 1,
    gap: 4,
  },
  infoContainer: {
    backgroundColor: '#f4f4f4',
    flexDirection: "row",
    gap: 10,
    marginVertical: 8,
  },
  statCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 0,
    paddingHorizontal: 6,
    paddingVertical: 18,
  },
  statValue: {
    color: '#111111',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#9a9a9a',
    fontSize: 12,
    marginTop: 6,
  },
   container: {
    backgroundColor: '#ffffff',
    marginHorizontal: 0,
  },
  notiContainer: {
    backgroundColor: '#ffffff',
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 12,
  },
  notiRight: {
    alignItems: "center",
    gap: 16,
  },
  notiLeft: {
  
    alignItems: "center",
    gap: 16,
  },
  text: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
  },
  name: {
    color: '#111111',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mutedText: {
    color: '#9a9a9a',
    fontSize: 14,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  editButton: {
    backgroundColor: "#eeeeee",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  editButtonText: {
    color: '#333333',
    fontWeight: '600',
  },
});
