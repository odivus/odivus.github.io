const getData = new Promise((resolve, reject) => {
  VK.init({
    apiId: 6838385
  });

  VK.Auth.login((response) => {
    if (!response.session) {
      reject(new Error('Не удалось авторизоваться'));
      return false;
    }
  }, 8); // Доступ к музыке

  VK.api('users.get', { 'name_case': 'gen', 'v': '5.92' }, (response) => {
    if (response.error) {
      reject(new Error(response.error.error_msg));
      return false;
    }
    resolve(response);
  });
});

getData
  .then ((getUser) => true)
  .then((getUserMusic) => {
    let headerInfo = document.querySelector('.header');
    headerInfo.textContent = 'Музыка на странице '
      + getUserMusic.getUserMusic[0].first_name + ' ' 
      + getUserMusic.getUserMusic[0].last_name;
  })
  .catch((e) => {
    console.log('Ошибка: ' + e.message);
  });