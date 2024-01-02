// PaginationComponent.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from Expo vector icons

const PaginationComponent = ({ onPageChange, currentPage, totalPages }) => {
  return (
    <View style={styles.paginationContainer}>
      <TouchableOpacity onPress={() => onPageChange(1)} disabled={currentPage === 1}>
      <View style={[styles.button, { borderColor: currentPage === 1 ? 'black' : '#3b65d1' }]}>
          <MaterialIcons name="first-page" size={24} color={currentPage === 1 ? 'black' : '#3b65d1'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <View style={[styles.button, { borderColor: currentPage === 1 ? 'black' : '#3b65d1' }]}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color={currentPage === 1 ? 'black' : '#3b65d1'} />
        </View>
      </TouchableOpacity>
      <Text style={{ fontWeight: 'bold',color:'#474747' }}>{currentPage}</Text>
      <TouchableOpacity onPress={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <View style={[styles.button, { borderColor: currentPage === totalPages ? 'black' : '#3b65d1' }]}>
          <MaterialIcons name="keyboard-arrow-right" size={24} color={currentPage === totalPages ? 'black' : '#3b65d1'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
        <View style={[styles.button, { borderColor: currentPage === totalPages ? 'black' : '#3b65d1' }]}>
          <MaterialIcons name="last-page" size={24} color={currentPage === totalPages ? 'black' : '#3b65d1'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: 'gray',
    margin:5
  },
  button: {
    borderWidth: 0,
    borderRadius: 50,
    padding:5
  },
});

export default PaginationComponent;
