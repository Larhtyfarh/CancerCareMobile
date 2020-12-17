import React from 'react';
import { Modal, View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { lightTheme } from '../styles/colors';
import RF from '../utils/RF';

export default function Message({ modalVisible,onHide,message }) {
    return (
        <Modal 
            animationType="slide" 
            transparent={true} 
            visible={modalVisible} 
            animationType="fade"
        >
            <View style={{flex: 1,backgroundColor: "rgba(0,0,0,0.5)",justifyContent: "center",alignItems: "center"}}>
                <TouchableOpacity onPress={onHide} style={{width: "100%",height: "100%",backgroundColor: "rgba(0,0,0,0.5)",position: "absolute",top: 0,left: 0}} />
                <View style={styles.modalView}>
                    <Image source={require("../assets/images/checkmark.png")} style={{width: RF(70),height: RF(50),marginBottom: RF(20)}} />
                    <Text style={{fontSize: RF(20),color: lightTheme.orange}}>{message}</Text>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalView: {
        width: "70%",
        backgroundColor: "#f2f2f2",
        borderRadius: RF(20),
        height: RF(170),
        elevation: 2,
        shadowColor: "rgba(57,57,57,0.10)",
        shadowOffset: {width: 0,
            height: 4},
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        alignItems: "center",
        justifyContent: "center"
    }
  });