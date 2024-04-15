


  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const country = data[randomIndex];
    console.log("Метод fetch:");
    console.log("Название страны: " + country.name.common);
    console.log("Флаг: " + country.flags.png);
    console.log("Столица: " + country.capital);
  })
  .catch(error => console.error('Ошибка:', error));



  const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const randomIndex = Math.floor(Math.random() * data.length);
      const country = data[randomIndex];
      console.log("Метод XMLHttpRequest:");
      console.log("Название страны: " + country.name.common);
      console.log("Флаг: " + country.flags.png);
      console.log("Столица: " + country.capital);
    } else {
      console.error('Ошибка:', xhr.statusText);
    }
  }
};
xhr.onerror = function () {
  console.error('Ошибка запроса');
};
xhr.send();


axios.get('https://restcountries.com/v3.1/all')
  .then(response => {
    const data = response.data;
    const randomIndex = Math.floor(Math.random() * data.length);
    const country = data[randomIndex];
    console.log("Метод axios:");
    console.log("Название страны: " + country.name.common);
    console.log("Флаг: " + country.flags.png);
    console.log("Столица: " + country.capital);
  })
  .catch(error => console.error('Ошибка:', error));
