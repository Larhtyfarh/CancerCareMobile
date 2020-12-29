import React from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet, Image, } from 'react-native';
import { lightTheme } from '../../styles/colors';
import RF from '../../utils/RF';

function Vital({ modalVisible,onHide,load }) {
    const { icon,vitalTitle,image} = load;

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
                    <View style={{flexDirection: "row", marginHorizontal: RF(10), marginVertical: RF(20), }}>
                        <View style={{marginRight: RF(20), }}>
                            <Image style={{height: RF(40), width: RF(40), }} source={{icon}} />
                        </View>

                        <Text style={{fontSize: RF(24), fontWeight: "700", }}>{vitalTitle}</Text>
                    </View>

                    <View>
                        <Image style={{width: RF(240), height: RF(120), marginHorizontal: RF(25) }} source={{image}} />
                    </View>

                    </View>
            </View>
        </Modal>
    )
} 


export default Vital;

const styles = StyleSheet.create({
    modalView: {
        width: "80%",
        backgroundColor: "#f2f2f2",
        borderRadius: RF(20),
        minHeight: RF(170),
        elevation: 2,
        shadowColor: "rgba(57,57,57,0.10)",
        shadowOffset: {width: 0,
            height: 4},
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
    }
  });