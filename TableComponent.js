// TableComponent.js
import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from Expo vector icons
import RowComponent from './RowComponent';

const TableComponent = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);

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
    <View style={{ flex: 1, backgroundColor: '#F0F0F0', padding: 10 }}>
    {/* Column Titles */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, backgroundColor: '#eee', borderRadius: 10, marginBottom: 5, alignItems: 'center' }}>
      <Text />
      <Text>Name</Text>
      <Text >Email</Text>
      <Text style={{ paddingRight: 10 }}>Role</Text>
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
      style={{marginRight: 0, flex: 1}}
    />

      {/* Action Buttons */}
      {selectedRows.length > 0 && (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#fff' }}>
          <View style={{ flex: 1, backgroundColor: 'transparent' }}>
            <TouchableOpacity onPress={handleEdit} disabled={selectedRows.length !== 1}>
              <View style={{ display: 'flex',alignItems:'center',backgroundColor: 'blue', borderRadius: 50, padding: 5 }}>
                <MaterialIcons name="edit" size={24} color={selectedRows.length === 1 ? 'white' : 'gray'} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, marginLeft: 10, backgroundColor: 'transparent' }}>
            <TouchableOpacity onPress={handleDelete} disabled={selectedRows.length === 0}>
              <View style={{ display: 'flex',alignItems:'center',backgroundColor: 'red', borderRadius: 50, padding: 5 }}>
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
