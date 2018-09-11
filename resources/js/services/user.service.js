// import axios from 'axios';
//
// export const userService={
//     register,
//     login,
//     logout,
// }
//
// async function register(user){
//
//     return new Promise(function(resolve, reject) {
//
//         axios.post('api/register', {
//             name: user.name,
//             email: user.email,
//             password: user.password,
//             password_confirmation: user.confirmed_password
//         })
//             .then(function (response) {
//                 resolve(response.data.user);
//
//             })   .catch(error => {
//             if (error.response) {
//                 reject(error.response);
//             }
//         });
//     })
// }
//
// async function login(user){
//
//     return new Promise(function(resolve, reject) {
//         axios.post('api/login', {
//             name: user.username,
//             password: user.password
//         })
//             .then(function (response) {
//                 if(response.data.status) {
//                     localStorage.setItem('user', JSON.stringify(response.data.user));
//                     resolve(response.data.user);
//                 }
//             })
//             .catch(error => {
//                     if (error.response) {
//                         reject(error.response);
//                     }
//                 }
//             )
//     })
// }
//
// async function logout(){
//
//     return new Promise(function(resolve, reject) {
//         axios.get('api/logout').then(function (response) {
//
//             localStorage.removeItem('user');
//             resolve(response.data.user);
//             console.log(response)
//         })
//             .catch(error => {
//                     if (error.response) {
//
//                         reject(error.response);
//                     }
//                 }
//             )
//     })
// }