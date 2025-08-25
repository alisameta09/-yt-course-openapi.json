import axios from 'axios';

const usersData = axios.get('https://icherniakov.ru/yt-course/account/test_accounts')
    .then(response =>
        console.log(response)
    )
    .catch(err =>
        console.log(err)
    )
    .finally(() => {});

console.log(usersData);

// async function getUsers() {
//     try {
//         const response = await axios.get('https://icherniakov.ru/yt-course/account/test_accounts');
//         console.log(response);
//     } catch (err) {
//         console.log(err);
//     }
// }
//
// console.log(getUsers());
