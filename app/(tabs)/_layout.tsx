import {Tabs} from 'expo-router'

export default function TabLayout(){

    return (
        <Tabs  screenOptions={{headerShown: false }}>
            <Tabs.Screen 
            name="index"
            options={{
                title: 'Dashboard',
            }}
            />
             <Tabs.Screen 
            name="friends"
            options={{
                title: 'Friends',
            }}
            />
            <Tabs.Screen 
            name="leaderboard"
            options={{
                title: 'LeaderBoard',
            }}
            />
        </Tabs>
    )
}