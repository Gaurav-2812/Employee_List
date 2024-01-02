import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchBarComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 5 ,padding:10,borderRadius: 10}}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        onChange={handleSearch}
      />
      {/* <Button title="Search" onPress={handleSearch} /> */}
    </View>
  );
};

export default SearchBarComponent;
