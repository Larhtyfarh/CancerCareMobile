import React from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Linking,
  Dimensions,
  Platform,
} from "react-native";
import { lightTheme } from "../../styles/colors";
import RF from "../../utils/RF";
import MapView from "react-native-maps";

function Chemotherapy({ modalVisible, onHide }) {
  const scheme = Platform.select({ ios: "maps:0,0?q=", android: "geo:0,0?q=" });
  const latLng = `${52.477913},${-1.893199}`;
  const label = "52, Peters drive, MidLands road.";
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

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
              paddingHorizontal: RF(10),
              paddingVertical: RF(20),
            }}
          >
            <View style={{ marginRight: RF(20) }}>
              <Image
                style={{ height: RF(40), width: RF(40) }}
                source={require("../../assets/images/appointment.png")}
              />
            </View>

            <View>
              <Text
                style={{
                  fontSize: RF(24),
                  fontWeight: "700",
                  color: lightTheme.orange,
                  marginBottom: RF(6),
                }}
              >
                Chemotherapy
              </Text>
              <Text
                style={{
                  fontSize: RF(24),
                  fontWeight: "700",
                  marginBottom: RF(6),
                }}
              >
                Dr. Tim
              </Text>
              <Text
                style={{
                  fontSize: RF(24),
                  fontWeight: "500",
                  marginBottom: RF(6),
                }}
              >
                General
              </Text>
              <Text
                style={{
                  fontSize: RF(16),
                  fontWeight: "500",
                  marginBottom: RF(6),
                }}
              >
                52, Peters drive, MidLands road.
              </Text>

              <View style={{ flexDirection: "row", marginBottom: RF(10) }}>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:${phone}`)}
                >
                  <Image
                    style={{
                      width: RF(20),
                      height: RF(20),
                      marginRight: RF(20),
                    }}
                    source={require("../../assets/images/call.png")}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: RF(14),
                    fontWeight: "500",
                    marginBottom: RF(6),
                  }}
                >
                  +44 300 790 6268
                </Text>
              </View>

              <View style={{ flexDirection: "row", marginBottom: RF(20) }}>
                <View
                  style={{
                    width: RF(106),
                    height: RF(20),
                    backgroundColor: lightTheme.peach,
                    borderRadius: RF(10),
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: RF(15),
                  }}
                >
                  <Text style={{ color: lightTheme.orange, fontSize: RF(14) }}>
                    Mon 16, November
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
                    1:00a.m
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginBottom: RF(25), justifyContent: "centre" }}>
            <TouchableOpacity onPress={() => Linking.openURL(url)}>
              <Image
                style={{
                  width: "90%",
                  height: RF(150),
                  marginHorizontal: RF(20),
                }}
                source={require("../../assets/images/mapFull.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default Chemotherapy;

const styles = StyleSheet.create({
  modalView: {
    width: "100%",
    height: RF(400),
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
