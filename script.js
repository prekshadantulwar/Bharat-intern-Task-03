document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'url("https://st4.depositphotos.com/27490524/37881/i/450/depositphotos_378819254-stock-photo-calgary-alberta-canada-june-2020.jpg")',
        'url("https://wallpapers.com/images/hd/sweet-home-netflix-cover-photo-sitn8pxjfe8ecuk4.jpg")',
        'url("https://getwallpapers.com/wallpaper/full/5/d/2/1075801-netflix-wallpapers-1920x1080-free-download.jpg")',
        'url("https://images.squarespace-cdn.com/content/v1/610c0b8e6021504c9c302cdb/b85e1981-d7bd-4d8d-8bf5-bfae75d525f1/Updated+Homepage+background+%281%29.png")'
    ];

    const banner = document.getElementById('banner');
    const randomImage = images[Math.floor(Math.random() * images.length)];
    banner.style.backgroundImage = randomImage;

    const movieData = [
        { title: "Stranger Things", language: "English", imgSrc: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY1200_CR165,0,630,1200_AL_.jpg" },
        { title: "Money Heist", language: "Spanish", imgSrc: "https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==" },
        { title: "Lupin", language: "French", imgSrc: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19204904_b_v13_al.jpg" },
        { title: "Dark", language: "German", imgSrc: "https://resizing.flixster.com/lpJkDxnEFNQT1OWJjnmYfvpAHJ0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI2NjgyOS53ZWJw" },
        { title: "Alice in Borderland", language: "Japanese", imgSrc: "https://thesun.my/binrepository/aib-key-art-image-courtesy-netflix_1956294_20210104123739.jpg" }
    ];
    

    const galleryRows = document.querySelectorAll('.gallery-row');

    galleryRows.forEach(row => {
        movieData.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'gallery-card';
            card.innerHTML = `
                <img src="${movie.imgSrc}" alt="${movie.title}">
                <div class="title">${movie.title}</div>
                <div class="language">${movie.language}</div>
            `;
            row.appendChild(card);
        });
    });
});
