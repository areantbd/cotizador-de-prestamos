import { useState } from "react";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Dropdown = () => {
  const [selectedMonths, setSelectedMonths] = useState(null);

  console.log(selectedMonths)

  return (
    <Picker
      prompt="select months"
      mode="dialog"
      style={styles.inputAndroid}
      selectedValue={selectedMonths}
      onValueChange={(itemValue, itemIndex) => setSelectedMonths(itemValue)}
    >
      <Picker.Item label="3 meses" value="3" />
      <Picker.Item label="6 meses" value="6" />
      <Picker.Item label="12 meses" value="12" />
      <Picker.Item label="24 meses" value="24" />
    </Picker>
  );
};

const styles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    backgroundColor: "#fff",
    marginHorizontal: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    backgroundColor: "#fff",
    marginHorizontal: -5,
  },
});

export default Dropdown;