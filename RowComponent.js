// RowComponent.js
import React from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

const RowComponent = ({ data, isSelected, onSelect }) => {
  const handleSelect = () => {
    onSelect(data.id);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, marginLeft: 10, backgroundColor: isSelected ? '#ddd' : 'white', borderRadius: 10, marginBottom: 10 }}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <CheckBox
          checked={isSelected}
          onPress={handleSelect}
          containerStyle={{ marginLeft: 0, marginRight: 0 }}
        />
      </View>
      <View style={{ marginRight: 5, flex: 1,paddingTop:10 }}>
        <Text>{data.name}</Text>
      </View>
      <View style={{ flex: 2.5, marginLeft: 0,paddingTop:10 }}>
        <Text>{data.email}</Text>
      </View>
      <View style={{ flex: 1,marginLeft:10,paddingTop:10 }}>
        <Text>{data.role}</Text>
      </View>
    </View>
  );
};

export default RowComponent;
