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

function Log3({ modalVisible, onHide, action }) {
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
              paddingVertical: RF(15),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: RF(10),
              }}
            >
              <Image
                style={{ height: RF(20), width: RF(20) }}
                source={require("../../assets/icons/actions/night.png")}
              />

              <Text style={{ fontSize: RF(20), marginLeft: RF(10) }}>
                5:00 p.m
              </Text>
            </View>

            <View style={{ alignItems: "center", marginBottom: RF(20) }}>
              <Image
                style={{
                  width: RF(14),
                  height: RF(20),
                }}
                source={require("../../assets/images/capsuleRedYellow.png")}
              />
            </View>

            <View style={{ alignItems: "center", marginBottom: RF(20) }}>
              <Text style={{ fontSize: RF(18), fontWeight: "600" }}>
                Amoxyl
              </Text>
              <Text
                style={{
                  fontSize: RF(14),
                  color: lightTheme.orange,
                  fontWeight: "500",
                }}
              >
                1 capsule
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity onPress={onHide}>
                <Text style={{ fontSize: RF(22), fontWeight: "600" }}>Log</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onHide}>
                <Text
                  style={{
                    fontSize: RF(22),
                    fontWeight: "600",
                    color: lightTheme.orange,
                    marginLeft: RF(40),
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default Log3;

const styles = StyleSheet.create({
  modalView: {
    width: "70%",
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
