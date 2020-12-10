import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Button, StyleSheet, BackHandler } from 'react-native';
import { mainStyle } from '../styles/main';
import { Ionicons } from '@expo/vector-icons';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";


export default class notesView extends Component {

    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

    render() {
        return (

            <View style={mainStyle.container}>

                <View style={styles.header}>

                    <View>
                        <TouchableOpacity onPress={this.handleBackButtonClick}>

                            <Image style={styles.headerButton} source={require('../assets/icons/actions/back.png')}/>

                        </TouchableOpacity>

                    </View> 

                    <Text style={styles.headerText}>Note</Text>
 
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <Text style={styles.title}>Reaction to Cyplox</Text>
                    <Text style={styles.date}>Sun 15, November</Text>
                    <Text style={styles.body}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ac ut consequat semper viverra nam libero justo laoreet sit. Habitasse platea dictumst quisque sagittis. A scelerisque 
                    purus semper eget. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Sociis natoque penatibus et 
                    magnis dis parturient montes nascetur.
                    </Text>





                </ScrollView>
                

            </View>

        )
    }  
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: RF(30), 
        alignItems: "center",
    },

    headerButton: { 
        height: RF(30), 
        width: RF(30), 
    },

    headerText: {
        fontSize: RF(22),
        fontWeight: "700",
        color: lightTheme.orange, 
        flex:1, 
        textAlign: "center",
     }, 

    title: {
        fontSize: RF(30),
        fontWeight: "700",
        marginBottom: RF(7),
    },

    body: {
        fontSize: RF(20),
        fontWeight: "500",

    },

    date: {
        fontSize: RF(18),
        fontWeight: "500",
        marginBottom: RF(10),
        color: lightTheme.grey,

    },
    
})
