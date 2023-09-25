import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {searchUsers} from './api';
import UserList from './UserList';

const SearchScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = () => {
    searchUsers(username)
      .then(data => {
        setUsers(data);
        setError('');
      })
      .catch(err => {
        setUsers([]);
        setError(
          'This user name does not exist! Please specify an existing user name.',
        );
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Enter a username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <Button title="Search" onPress={handleSearch} />
      {error ? <Text>{error}</Text> : null}
      <UserList users={users} />
    </View>
  );
};

export default SearchScreen;
