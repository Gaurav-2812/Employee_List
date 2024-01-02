import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons

const SearchBarComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleCancel = () => {
    setSearchQuery('');
    onSearch(''); // You may want to clear the search results as well
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by name, email or role"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        onChange={handleSearch}
      />
      {searchQuery.length > 0 && (
        <TouchableOpacity onPress={handleCancel}>
          <Ionicons name="ios-close-circle" size={24} color="black" style={styles.cancelIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    borderRadius: 10,
  },
  input: {
    height: 40,
    flex: 1,
    marginLeft: 10,
  },
  cancelIcon: {
    marginLeft: 10,
    paddingRight:10
  },
});

export default SearchBarComponent;
