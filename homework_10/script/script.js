'use strict';

//код для выполнения пункта 1

const url = 'https://reqres.in/api/users?per_page=12'

fetch(url)
  .then((response) => response.json())
  .then((result) => {
    const users = result.data

    console.log('----------------');
    console.log('Пункт №1');
    console.log('----------------');
    console.log(users); 



    //код для выполнения пункта 2
    console.log('----------------');
    console.log('Пункт №2');
    console.log('----------------');
    users.forEach((user) => {
      console.log(user.last_name);
    })

    //код для выполнения пункта 3
    console.log('----------------');
    console.log('Пункт №3');
    console.log('----------------');
    users.forEach((user) => {
      const isStartsWithF = user.last_name.startsWith('F')
      
      if (isStartsWithF) {
        console.log(user);
      }
    })
    
    //код для выполнения пункта 4
    console.log('----------------');
    console.log('Пункт №4');
    console.log('----------------');
    const initText = 'Наша база содержит данные следующих пользователей:'
    const resultText = users.reduce((previuosValue, currentValue) => {
      const {first_name, last_name} = currentValue 
      
      return previuosValue + `\n ${first_name} ${last_name}`
    }, initText)
    
    console.log(resultText);
  
    //код для выполнения пункта 5
    console.log('----------------');
    console.log('Пункт №5');
    console.log('----------------');
    const userCell = users[0]
      Object.keys(userCell).forEach((keyName) => {
        console.log(keyName);
    })
  })