// api.js
import data from './leaderboard.json';

export const searchUsers = username => {
  // Simulate an API call by filtering data based on the username
  return new Promise((resolve, reject) => {
    const filteredData = data.filter(user => user.name === username);
    console.log('filteredData', filteredData);
    if (filteredData.length === 0) {
      reject(new Error('User not found'));
    } else {
      resolve(filteredData);
    }
  });
};
