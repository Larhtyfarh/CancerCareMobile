import React from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { lightTheme } from "../../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import RF from "../../utils/RF";
import NavigationService from "../../route/NavigationService";

function Vital({ modalVisible, onHide, action }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      animationType="fade"
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={onHide}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <View style={styles.modalView}>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: RF(20),
              marginVertical: RF(20),
            }}
          >
            <View style={{ marginRight: RF(20) }}>
              <Image
                style={{ height: RF(40), width: RF(44) }}
                source={require("../../assets/images/heartRate.png")}
              />
            </View>

            <Text style={{ fontSize: RF(24), fontWeight: "700" }}>
              Heart Rate
            </Text>
            <TouchableOpacity
              onPress={action}
              style={{ flex: 1, alignItems: "flex-end", marginRight: RF(20) }}
            >
              <Ionicons name="md-add" size={RF(30)} color="#FA4A0C" />
            </TouchableOpacity>
          </View>

          <View>
            <Image
              style={{
                width: RF(265),
                height: RF(170),
                marginHorizontal: RF(25),
                marginBottom: RF(20),
              }}
              source={require("../../assets/images/heartrategraphfull.png")}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
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
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
});
