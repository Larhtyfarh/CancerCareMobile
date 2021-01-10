import React from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import { lightTheme } from "../../styles/colors";
import RF from "../../utils/RF";

function Ciplox({ modalVisible, onHide }) {
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
          justifyContent: "flex-end",
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
              marginHorizontal: RF(30),
              marginVertical: RF(20),
            }}
          >
            <View style={{ marginRight: RF(30), marginTop: RF(40) }}>
              <Image
                style={{ height: RF(100), width: RF(58) }}
                source={require("../../assets/images/dropAqua.png")}
              />
            </View>

            <View style={{ marginTop: RF(40) }}>
              <Text
                style={{
                  fontSize: RF(15),
                  fontWeight: "600",
                  marginBottom: RF(3),
                }}
              >
                Drug Name
              </Text>
              <Text
                style={{
                  fontSize: RF(22),
                  fontWeight: "700",
                  marginBottom: RF(10),
                  color: lightTheme.orange,
                }}
              >
                Ciplox
              </Text>
              <Text
                style={{
                  fontSize: RF(15),
                  fontWeight: "600",
                  marginBottom: RF(3),
                }}
              >
                Dosage
              </Text>
              <Text
                style={{
                  fontSize: RF(22),
                  fontWeight: "700",
                  marginBottom: RF(10),
                  color: lightTheme.orange,
                }}
              >
                1 drop
              </Text>
              <Text
                style={{
                  fontSize: RF(15),
                  fontWeight: "600",
                  marginBottom: RF(5),
                }}
              >
                Frequency
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: RF(60),
                    height: RF(20),
                    backgroundColor: lightTheme.peach,
                    borderRadius: RF(10),
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: RF(15),
                  }}
                >
                  <Text style={{ color: lightTheme.orange, fontSize: RF(14) }}>
                    7:00a.m
                  </Text>
                </View>

                <View
                  style={{
                    width: RF(60),
                    height: RF(20),
                    backgroundColor: lightTheme.lilac,
                    borderRadius: RF(10),
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: lightTheme.purple, fontSize: RF(14) }}>
                    1:00p.m
                  </Text>
                </View>

                <View
                  style={{
                    width: RF(60),
                    height: RF(20),
                    backgroundColor: lightTheme.lilac,
                    borderRadius: RF(10),
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: lightTheme.purple, fontSize: RF(14) }}>
                    9:00p.m
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ paddingHorizontal: RF(35) }}>
            <Text
              style={{
                fontSize: RF(15),
                fontWeight: "600",
                marginBottom: RF(5),
              }}
            >
              Directions
            </Text>
            <Text
              style={{
                fontSize: RF(17),
                fontWeight: "600",
                marginBottom: RF(45),
              }}
            >
              Use 2 hours after eating, don’t use if you are allergic to
              polysrate.Don’t use if pregnant or have ulcer. If sypmtoms persist
              after 3 days, please visit a physician. Keep and store in a cool
              dry place.
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default Ciplox;

const styles = StyleSheet.create({
  modalView: {
    width: "100%",
    height: RF(370),
    backgroundColor: "#f2f2f2",
    borderTopLeftRadius: RF(20),
    borderTopRightRadius: RF(20),
    elevation: 2,
    shadowColor: "rgba(57,57,57,0.10)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
});
