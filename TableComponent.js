// TableComponent.js
import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from Expo vector icons
import RowComponent from './RowComponent';
import { CheckBox } from 'react-native-elements';

const TableComponent = ({ data }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedRows(selectAll ? [] : data.map((item) => item.id));
  };

  const handleRowSelect = (id) => {
    // Toggle selection for a row
    const isSelected = selectedRows.includes(id);
    setSelectedRows((prevSelectedRows) =>
      isSelected
        ? prevSelectedRows.filter((rowId) => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  const handleEdit = () => {
    // Handle edit based on the selected rows
    if (selectedRows.length === 1) {
      // Edit a single row
      console.log('Edit row with ID:', selectedRows[0]);
    }
  };

  const handleDelete = () => {
    // Handle delete based on the selected rows
    console.log('Delete selected rows:', selectedRows);
    // Clear selected rows after delete
    setSelectedRows([]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
    {/* Column Titles */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#eee', marginLeft: 0, marginRight: 30, alignItems: 'center' }}>
        {/* <TouchableOpacity onPress={handleSelectAll}>
          <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft:10 }}>
            <MaterialIcons name={selectAll ? 'check-box' : 'check-box-outline-blank'} size={24} />
          </View>
        </TouchableOpacity> */}
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
        <CheckBox
          checked={selectAll}
          onPress={handleSelectAll}
          containerStyle={{ marginLeft: 15,marginTop:10, marginRight: 0,alignItems:'center',justifyContent:'center' }}
          />
        </View>
        <View style={{ marginLeft: 0, flex: 1,alignItems:'center' }}>
          <Text>Name</Text>
        </View>
        <View style={{ marginLeft: 0, flex: 2.5,alignItems:'center' }}>
          <Text>Email</Text>
        </View>
        <View style={{ marginLeft: 10, flex: 1,alignItems:'center' }}>
          <Text>Role</Text>
        </View>
    </View>

    {/* Table Rows */}
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <RowComponent
          data={item}
          isSelected={selectedRows.includes(item.id)}
          onSelect={handleRowSelect}
        />
      )}
      style={{marginRight: 10, flex: 1,marginBottom:20}}
    />

      {/* Action Buttons */}
      {selectedRows.length > 0 && (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#fff' }}>
          <View style={{ flex: 1, backgroundColor: 'transparent' }}>
            <TouchableOpacity onPress={handleEdit} disabled={selectedRows.length !== 1}>
              <View style={{ display: 'flex',alignItems:'center',backgroundColor: selectedRows.length === 1 ? '#3b65d1' : 'gray', borderRadius: 50, padding: 5 }}>
                <MaterialIcons name="edit" size={24} color={selectedRows.length === 1 ? 'white' : '#424242'} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, marginLeft: 10, backgroundColor: 'transparent' }}>
            <TouchableOpacity onPress={handleDelete} disabled={selectedRows.length === 0}>
              <View style={{ display: 'flex',alignItems:'center',backgroundColor: '#d13b3b', borderRadius: 50, padding: 5 }}>
                <MaterialIcons name="delete" size={24} color={selectedRows.length > 0 ? 'white' : 'gray'} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default TableComponent;
