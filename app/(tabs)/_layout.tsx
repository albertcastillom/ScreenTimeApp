import {Tabs} from 'expo-router'
import { Image } from 'react-native'
import {icons} from "../../constants/icons"
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout(){

    return (
        <Tabs  screenOptions={{
                headerShown: false, 
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 15,
                }
            }}>
            <Tabs.Screen 
            name="index"
            options={{
                title: 'Dashboard',
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons 
                    name={focused ? 'home' : 'home-outline'} 
                    size={size} 
                    color={"black"} 
                    />
                ), 
            }}
            />
             <Tabs.Screen 
            name="friends"
            options={{
                title: 'Friends',
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons 
                    name={focused ? 'people' : 'people-outline'} 
                    size={size} 
                    color={"black"} 
                    />
                ), 
            }}
            /> 
            <Tabs.Screen 
            name="leaderboard"
            options={{
                title: 'LeaderBoard',
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons 
                    name={focused ? 'podium' : 'podium-outline'} 
                    size={size} 
                    color={"black"} 
                    />
                ), 
            }}
            />
        </Tabs>
    )
}
