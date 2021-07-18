/**
 * 
 * @param {DOMNode} wrapper 
 * @param {Array<{title: string, description: string, rating: number, preview: {high: string, low: string}, genre: string}>} films 
 */

function filmsList(wrapper, films) {
    const main = document.createElement('div');
    main.classList.add('main');

    for(let film of films) {
        const filmItem = document.createElement('div');
        filmItem.classList.add('main__film');

        const img = document.createElement('img');
        img.classList.add('main__film-img');
        img.src = film.preview.high;

        const filmHeader = document.createElement('div');
        filmHeader.classList.add('main__film-header');

        const h3 = document.createElement('h3');
        h3.classList.add('main__film-genre');
        h3.textContent = film.genre;

        const h4 = document.createElement('h4');
        h4.classList.add('main__film-rate');
        h4.textContent = film.rating;

        const filmInfo = document.createElement('div');
        filmInfo.classList.add('main__film-info');

        const h2 = document.createElement('h2');
        h2.classList.add('main__film-title');
        h2.textContent = film.title;

        const p = document.createElement('p');
        p.classList.add('main__film-decription');
        p.textContent = film.description;

        main.append(filmItem);
        filmItem.append(img);
        filmItem.append(filmHeader);
        filmItem.append(filmInfo);
        filmHeader.append(h3);
        filmHeader.append(h4);
        filmInfo.append(h2);
        filmInfo.append(p);
    }

    wrapper.append(main);
}

export { filmsList }