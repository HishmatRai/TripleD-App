import React, { useState } from "react";
import { Text, View,TouchableOpacity, ImageBackground } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { back } from "react-native/Libraries/Animated/src/Easing";

const TimePciker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker} style={{backgroundColor:"white",height:50,borderRadius:5,alignItems:"center",justifyContent:"center"}}>
          <Text style={{fontSize:16,color:"#070707"}}>
              08:30
          </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default TimePciker;