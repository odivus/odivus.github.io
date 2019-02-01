const getData = (apiId) => {
  new Promise((resolve, reject) => {
    if (document.readyState === 'complete') {
      VK.init({
        apiId: apiId
      });
      resolve();
    }
  })
}

getData(6838385)
  .then(() => { // User Login
    return new Promise((resolve, reject) => {
      VK.Auth.login(response => {
        if (response.session) {
          resolve();
        } else {
          reject(new Error('Не удалось авторизоваться'));
        }
      }, 8);
    })
  })
  .then(() => { // Get User Full Name
    return new Promise((resolve, reject) => {
      VK.api('users.get', { 'name_case': 'gen', 'v': '5.92' },
        response => {
          if (response.error) {
            reject(new Error(response.error.error_msg));
          } else {
            let headerInfo = document.querySelector('.header');
            headerInfo.textContent = 'Музыка на странице '
              + response.response[0].first_name + ' ' + response.
                response[0].last_name;
            resolve();
          }
        });
      })
    })
  .catch((e) => {
    console.log('Ошибка: ' + e.message);
  });
