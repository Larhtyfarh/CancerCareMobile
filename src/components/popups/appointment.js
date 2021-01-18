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

function Appointment({ modalVisible, onHide, payload }) {
  const { title, name, type, address, time, date, phone } = payload;

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
              marginHorizontal: RF(10),
              marginVertical: RF(20),
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
                {title}
              </Text>
              <Text
                style={{
                  fontSize: RF(24),
                  fontWeight: "700",
                  marginBottom: RF(6),
                }}
              >
                {name}
              </Text>
              <Text
                style={{
                  fontSize: RF(24),
                  fontWeight: "500",
                  marginBottom: RF(6),
                }}
              >
                {type}
              </Text>
              <Text
                style={{
                  fontSize: RF(16),
                  fontWeight: "500",
                  marginBottom: RF(6),
                }}
              >
                {address}
              </Text>
              <Text
                style={{
                  fontSize: RF(14),
                  fontWeight: "500",
                  marginBottom: RF(6),
                }}
              >
                {phone}
              </Text>

              <View style={{ flexDirection: "row", marginBottom: RF(10) }}>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:${phone}`)}
                >
                  <Image
                    style={{
                      width: RF(20),
                      height: RF(20),
                      marginRight: RF(40),
                    }}
                    source={require("../../assets/images/call.png")}
                  />
                </TouchableOpacity>
                {/* <MapView style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height,}} showsUserLocation={true} region={{latitude: 52.4776, longitude: 1.8945, latitudeDelta: 0.0922, longitudeDelta: 0.0421  }}/> */}
                <TouchableOpacity onPress={() => Linking.openURL(url)}>
                  <Image
                    style={{
                      width: RF(20),
                      height: RF(20),
                      marginRight: RF(40),
                    }}
                    source={require("../../assets/images/map.png")}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: "row" }}>
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
                    {date}
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
                    {time}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default Appointment;

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
