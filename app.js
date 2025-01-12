

const albums = getAlbums();
console.log(albums);

albums.map((album) => {
    const mainDiv = document.getElementById('content')
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const CoupleDiv = document.createElement('div');
    CoupleDiv.classList.add('cuopleDiv');
    mainDiv.classList.add('mainDiv');
    h3.classList.add('album-title');
    p.classList.add('album-body');
    mainDiv.appendChild(CoupleDiv);
    CoupleDiv.append(h3, p);

    h3.innerHTML = album.title;
    p.innerHTML = album.body;



});