new Promise(function (resolve) {
  if (document.readyState === 'complete') {
    resolve();
  } else {
    window.onload = resolve;
  }
})
  .then(function () {
    return new Promise(function (resolve, reject) {
      VK.init({
        apiId: 6838385
      });

      VK.Auth.login(function (response) {
        if (response.session) {
          resolve(response); // WTF
          //console.log(resolve(response));
        } else {
          reject(new Error('Не удалось авторизоваться'));
        }
      }, 8);
    }).then((result) => console.log(result)); // Ну так же надо?
  })
  .then(function () {
    return new Promise(function (resolve, reject) {
      VK.api('users.get', { 'name_case': 'gen', 'v': '5.92' },
        function (response) {
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
  .catch(function (e) {
    alert('Ошибка: ' + e.message);
  });
