// UserList.js
import React from 'react';
import {View, Text, FlatList} from 'react-native';

const UserList = ({users}) => {
  console.log('users', users);
  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={item => item.name}
        renderItem={({item, index}) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Rank: {index + 1}</Text>
            <Text>Bananas: {item.bananas}</Text>
            <Text>
              Is the user the searched user? {item.isSearchedUser.toString()}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default UserList;
