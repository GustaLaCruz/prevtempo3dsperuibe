import axios from 'axios';

const api= axios.create({
    baseURL:'https://api.hgbrasil.com/'
})

export default api;


//https://api.hgbrasil.com/weather?array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date,description&key=ddce6cfe&city_name=peruibe,SP