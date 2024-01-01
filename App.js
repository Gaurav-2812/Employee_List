import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import axios from 'axios';
import SearchBarComponent from './SearchBarComponent'; // Update the path based on your project structure
import TableComponent from './TableComponent'; // Update the path based on your project structure
import PaginationComponent from './PaginationComponent'; // Update the path based on your project structure

export default function App() {
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
      const data = response.data;
      setUserData(data);
      setFilteredData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handler for search functionality
  const handleSearch = (query) => {
    const filtered = userData.filter((user) =>
      Object.values(user).some((value) => String(value).toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  // Handler for pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <View style={styles.container}>
      <SearchBarComponent onSearch={handleSearch} />
      <TableComponent
        data={filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
      />
      <PaginationComponent
        onPageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={Math.ceil(filteredData.length / itemsPerPage)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // Remove alignItems and justifyContent to make the content take the whole screen
  },
});
