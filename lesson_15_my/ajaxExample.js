import { filmsList } from './filmsList.js'

fetch('https://my-json-server.typicode.com/oksana-p/home-work/movies')
.then((resp) => {
    return resp.json();
})
.then((data) => {
    filmsList(document.querySelector('body'), data);
})