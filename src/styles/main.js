import { StyleSheet, Platform } from "react-native";
import { lightTheme } from "../styles/colors";

export const mainStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightTheme.background,
        paddingTop: Platform.OS == "ios" ? 70 : 50,
        paddingHorizontal: 20
    }
})