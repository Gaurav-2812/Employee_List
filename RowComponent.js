// RowComponent.js
import React from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

const RowComponent = ({ data, isSelected, onSelect }) => {
  const handleSelect = () => {
    onSelect(data.id);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
        <CheckBox
          checked={isSelected}
          onPress={handleSelect}
          containerStyle={{ marginLeft: 0, marginRight: 0 }}
        />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text>{data.name}</Text>
        </View>
      </View>
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text>{data.email}</Text>
      </View>
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text>{data.role}</Text>
      </View>
    </View>
  );
};

export default RowComponent;
