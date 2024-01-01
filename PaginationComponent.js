import React from 'react';
import { View, Button } from 'react-native';

const PaginationComponent = ({ onPageChange, currentPage, totalPages }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
      <Button title="First" onPress={() => onPageChange(1)} disabled={currentPage === 1} />
      <Button title="Previous" onPress={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
      <Button title="Next" onPress={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />
      <Button title="Last" onPress={() => onPageChange(totalPages)} disabled={currentPage === totalPages} />
    </View>
  );
};

export default PaginationComponent;
