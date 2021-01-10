import React from "react";
import { Image, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { _navigator } from "./NavigationService";
import * as SCREENS from "../screens";
import * as POPUPS from "../components/popups";
import RF from "../utils/RF";
import { TouchableOpacity } from "react-native-gesture-handler";
const Routes = createDrawerNavigator();
const Tab = createBottomTabNavigator();
// const DrawerNavigator = createDrawerNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            if (!focused) {
              return (
                <Image
                  source={require(`../assets/icons/navigation/home.png`)}
                  style={{ width: 18, height: 18 }}
                  resizeMode="contain"
                />
              );
            } else {
              return (
                <Image
                  source={require(`../assets/icons/navigation/homeActive.png`)}
                  style={{ width: 18, height: 18 }}
                  resizeMode="contain"
                />
              );
            }
          } else if (route.name === "Calendar") {
            if (!focused) {
              return (
                <Image
                  source={require(`../assets/icons/navigation/calendar.png`)}
                  style={{ width: 18, height: 18 }}
                  resizeMode="contain"
                />
              );
            } else {
              return (
                <Image
                  source={require(`../assets/icons/navigation/calendarActive.png`)}
                  style={{ width: 18, height: 18 }}
                  resizeMode="contain"
                />
              );
            }
          } else if (route.name === "CalendarAll") {
            if (!focused) {
              return (
                <Image
                  source={require(`../assets/icons/navigation/calendar.png`)}
                  style={{ width: 18, height: 18 }}
                  resizeMode="contain"
                />
              );
            } else {
              return (
                <Image
                  source={require(`../assets/icons/navigation/calendarActive.png`)}
                  style={{ width: 18, height: 18 }}
                  resizeMode="contain"
                />
              );
            }
          } else if (route.name === "Log") {
            if (!focused) {
              return (
                <Image
                  source={require(`../assets/icons/navigation/log.png`)}
                  style={{ width: 18, height: 18 }}
                  resizeMode="contain"
                />
              );
            } else {
              return (
                <Image
                  source={require(`../assets/icons/navigation/logActive.png`)}
                  style={{ width: 18, height: 18 }}
                  resizeMode="contain"
                />
              );
            }
          } else if (route.name === "Reports") {
            if (!focused) {
              return (
                <Image
                  source={require(`../assets/icons/navigation/report.png`)}
                  style={{ width: 18, height: 18 }}
                  resizeMode="contain"
                />
              );
            } else {
              return (
                <Image
                  source={require(`../assets/icons/navigation/reportActive.png`)}
                  style={{ width: 18, height: 18 }}
                  resizeMode="contain"
                />
              );
            }
          } else if (route.name === "Articles") {
            if (!focused) {
              return (
                <Image
                  source={require(`../assets/icons/navigation/article.png`)}
                  style={{ width: 18, height: 18 }}
                  resizeMode="contain"
                />
              );
            } else {
              return (
                <Image
                  source={require(`../assets/icons/navigation/articleActive.png`)}
                  style={{ width: 18, height: 18 }}
                  resizeMode="contain"
                />
              );
            }
          }
        },
      })}
      tabBarOptions={{
        showLabel: true,
        activeTintColor: "#3F27D2",
        inactiveTintColor: "#9A9A9D",
        labelStyle: {
          fontSize: 16,
          fontWeight: "600",
          margin: 0,
        },
        style: {
          height: 74,
          borderTopColor: "transparent",
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <Tab.Screen name="Home" component={SCREENS.Home} />
      <Tab.Screen name="Calendar" component={SCREENS.Calendar} />
      <Tab.Screen name="Log" component={SCREENS.Log} />
      <Tab.Screen name="Reports" component={SCREENS.Report} />
      <Tab.Screen name="Articles" component={SCREENS.Article} />
    </Tab.Navigator>
  );
};

const Drawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flexDirection: "row",
          marginTop: RF(100),
          paddingHorizontal: RF(25),
          alignItems: "center",
          marginBottom: RF(40),
        }}
      >
        <Image
          style={{ width: RF(50), height: RF(50) }}
          source={require("../assets/images/ToluPeters.png")}
        />
        <Text
          style={{
            fontSize: RF(30),
            fontWeight: "700",
            paddingHorizontal: RF(20),
          }}
        >
          Tolu Peters
        </Text>
      </View>

      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: RF(80),
            alignItems: "center",
            marginBottom: RF(30),
          }}
        >
          <Image
            style={{ width: RF(20), height: RF(20) }}
            source={require("../assets/icons/actions/profile.png")}
          />
          <Text style={{ fontSize: RF(25), paddingHorizontal: RF(20) }}>
            Profile
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: RF(80),
            alignItems: "center",
            marginBottom: RF(30),
          }}
        >
          <Image
            style={{ width: RF(20), height: RF(20) }}
            source={require("../assets/icons/actions/settings.png")}
          />
          <Text style={{ fontSize: RF(25), paddingHorizontal: RF(20) }}>
            Settings
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: RF(70),
          alignItems: "center",
          marginBottom: RF(30),
        }}
      >
        <Image
          style={{ width: RF(40), height: RF(40) }}
          source={require("../assets/icons/actions/lightMode.png")}
        />
        <TouchableOpacity>
          <Image
            style={{ width: RF(90), height: RF(37) }}
            source={require("../assets/icons/actions/selector.png")}
          />
        </TouchableOpacity>
        <Image
          style={{ width: RF(20), height: RF(20) }}
          source={require("../assets/icons/actions/darkMode.png")}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export const Stack = () => {
  return (
    <NavigationContainer ref={_navigator}>
      <Routes.Navigator
        drawerContent={(props) => <Drawer {...props} />}
        drawerPosition="right"
      >
        <Routes.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Routes.Screen
          name="CalendarAll"
          component={SCREENS.CalendarAll}
          options={{ headerShown: false }}
        />
        <Routes.Screen
          name="AllNote"
          component={SCREENS.AllNote}
          options={{ headerShown: false }}
        />
        <Routes.Screen
          name="AllMedication"
          component={SCREENS.AllMedication}
          options={{ headerShown: false }}
        />
        <Routes.Screen
          name="AllAppointment"
          component={SCREENS.AllAppointment}
          options={{ headerShown: false }}
        />
        <Routes.Screen
          name="NoteView"
          component={SCREENS.NoteView}
          options={{ headerShown: false }}
        />
        <Routes.Screen
          name="AddAppointment"
          component={SCREENS.AddAppointment}
          options={{ headerShown: false }}
        />
        <Routes.Screen
          name="AddMedication"
          component={SCREENS.AddMedication}
          options={{ headerShown: false }}
        />
        <Routes.Screen
          name="AddSymptoms"
          component={SCREENS.AddSymptoms}
          options={{ headerShown: false }}
        />
        <Routes.Screen
          name="AddVitals"
          component={SCREENS.AddVitals}
          options={{ headerShown: false }}
        />
        <Routes.Screen
          name="Scan"
          component={SCREENS.Scan}
          options={{ headerShown: false }}
        />
        <Routes.Screen
          name="ArticleView"
          component={SCREENS.ArticleView}
          options={{ headerShown: false }}
        />
        <Routes.Screen
          name="Drawer"
          component={Drawer}
          options={{ headerShown: false }}
        />
        {/* <Routes.Screen
          name="Vital"
          component={POPUPS.Vital}
          options={{ headerShown: false }}
        />
        <Routes.Screen
          name="Weight"
          component={POPUPS.Weight}
          options={{ headerShown: false }}
        />

        <Routes.Screen
          name="Amoxyl"
          component={POPUPS.Amoxyl}
          options={{ headerShown: false }}
        />

        <Routes.Screen
          name="Appointment"
          component={POPUPS.Appointment}
          options={{ headerShown: false }}
        />

        <Routes.Screen
          name="BloodSugar"
          component={POPUPS.BloodSugar}
          options={{ headerShown: false }}
        />

        <Routes.Screen
          name="Chemotherapy"
          component={POPUPS.Chemotherapy}
          options={{ headerShown: false }}
        />

        <Routes.Screen
          name="Ciplox"
          component={POPUPS.Ciplox}
          options={{ headerShown: false }}
        />

        <Routes.Screen
          name="Mood"
          component={POPUPS.Mood}
          options={{ headerShown: false }}
        />

        <Routes.Screen
          name="Paracetamol"
          component={POPUPS.Paracetamol}
          options={{ headerShown: false }}
        />

        <Routes.Screen
          name="Surgery"
          component={POPUPS.Surgery}
          options={{ headerShown: false }}
        />

        <Routes.Screen
          name="Symptom"
          component={POPUPS.Symptom}
          options={{ headerShown: false }}
        />

        <Routes.Screen
          name="Temperature"
          component={POPUPS.Temperature}
          options={{ headerShown: false }}
        /> */}
      </Routes.Navigator>
    </NavigationContainer>
  );
};
