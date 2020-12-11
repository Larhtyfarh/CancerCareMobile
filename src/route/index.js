import React from "react";
import { Image, View, Text,  } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as SCREENS from "../screens";
import RF from "../utils/RF";
const Routes = createStackNavigator();
const Tab = createBottomTabNavigator();
const DrawerNavigator = createDrawerNavigator();





const Dashboard = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    if (route.name === 'Home') {
                        if (!focused) {
                            return <Image source={require(`../assets/icons/navigation/home.png`)} style={{width: 18,height:18}} resizeMode="contain"/>
                        }else {
                            return <Image source={require(`../assets/icons/navigation/homeActive.png`)} style={{width: 18,height:18}} resizeMode="contain"/> 
                        }
                    } else if (route.name === 'Calendar') {
                        if (!focused) {
                            return <Image source={require(`../assets/icons/navigation/calendar.png`)} style={{width: 18,height:18}} resizeMode="contain"/>
                        }else {
                            return <Image source={require(`../assets/icons/navigation/calendarActive.png`)} style={{width: 18,height:18}} resizeMode="contain"/> 
                        }
                    } else if (route.name === 'CalendarAll') {
                        if (!focused) {
                            return <Image source={require(`../assets/icons/navigation/calendar.png`)} style={{width: 18,height:18}} resizeMode="contain"/>
                        }else {
                            return <Image source={require(`../assets/icons/navigation/calendarActive.png`)} style={{width: 18,height:18}} resizeMode="contain"/> 
                        }
                    } else if (route.name === 'Log') {
                        if (!focused) {
                            return <Image source={require(`../assets/icons/navigation/log.png`)} style={{width: 18,height:18}} resizeMode="contain"/>
                        }else {
                            return <Image source={require(`../assets/icons/navigation/logActive.png`)} style={{width: 18,height:18}} resizeMode="contain"/> 
                        }
                    } else if (route.name === 'Reports') {
                        if (!focused) {
                            return <Image source={require(`../assets/icons/navigation/report.png`)} style={{width: 18,height:18}} resizeMode="contain"/>
                        }else {
                            return <Image source={require(`../assets/icons/navigation/reportActive.png`)} style={{width: 18,height:18}} resizeMode="contain"/> 
                        }
                    } else if (route.name === 'Articles') {
                        if (!focused) {
                            return <Image source={require(`../assets/icons/navigation/article.png`)} style={{width: 18,height:18}} resizeMode="contain"/>
                        }else {
                            return <Image source={require(`../assets/icons/navigation/articleActive.png`)} style={{width: 18,height:18}} resizeMode="contain"/> 
                        }
                    }
                }
            })}
            tabBarOptions={{
                showLabel: true,
                activeTintColor: "#3F27D2",
                inactiveTintColor: "#9A9A9D",
                labelStyle: {
                    fontSize: 12,
                    fontWeight: "600",
                    margin: 0
                },
                style: {
                    height: 74,
                    borderTopColor: "transparent",
                    backgroundColor: "#FFFFFF"
                }
            }}
            >
            <Tab.Screen name="Home" component={SCREENS.Home} />
            <Tab.Screen name="Calendar" component={SCREENS.Calendar} />
            <Tab.Screen name="Log" component={SCREENS.Log} />
            <Tab.Screen name="Reports" component={SCREENS.Report} />
            <Tab.Screen name="Articles" component={SCREENS.Article} />
        </Tab.Navigator>
    )
}

const Drawer = () => {
    return(

        <DrawerNavigator.Navigator>
            
            
            <DrawerNavigator.Screen name="Home" component={SCREENS.Home}/>
            <DrawerNavigator.Screen name="Calendar" component={SCREENS.Calendar}/>


        </DrawerNavigator.Navigator>

    )
}

export const Stack = () => {
    return (
        <NavigationContainer>
            <Routes.Navigator>
                <Routes.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
                <Routes.Screen name="CalendarAll" component={SCREENS.CalendarAll } options={{ headerShown: false }}/>
                <Routes.Screen name="AllNote" component={SCREENS.AllNote} options={{ headerShown: false }}/>
                <Routes.Screen name="AllMedication" component={SCREENS.AllMedication} options={{ headerShown: false }}/>
                <Routes.Screen name="AllAppointment" component={SCREENS.AllAppointment} options={{ headerShown: false }}/>
                <Routes.Screen name="NoteView" component={SCREENS.NoteView} options={{ headerShown: false }}/>
                <Routes.Screen name="AddAppointment" component={SCREENS.AddAppointment} options={{ headerShown: false }}/>
                <Routes.Screen name="AddMedication" component={SCREENS.AddMedication} options={{ headerShown: false }}/>
                <Routes.Screen name="AddSymptoms" component={SCREENS.AddSymptoms} options={{ headerShown: false }}/>
                <Routes.Screen name="AddVitals" component={SCREENS.AddVitals} options={{ headerShown: false }}/>
                <Routes.Screen name="Scan" component={SCREENS.Scan} options={{ headerShown: false }}/>
                <Routes.Screen name="Drawer" component={Drawer} options={{headerShown: false}}/>
                
            </Routes.Navigator>
        </NavigationContainer>
    )


}