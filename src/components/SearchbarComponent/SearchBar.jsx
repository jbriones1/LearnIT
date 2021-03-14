import React from 'react';
import { Input } from "@chakra-ui/react"

const SearchBar = ({ handleChange }) => {
  return (
    <Input placeholder="Enter location" size="lg" onChange={handleChange} />
  );
}

export default SearchBar
