import { API } from '../backend';
  export const fetchWeather = () => {
    return fetch(`${API}getweather`, {
      method: "GET"
    })
      .then(response => {
        //   console.log(response);
        return response.json();
      })
      .catch(err => console.log(err));
  };
  