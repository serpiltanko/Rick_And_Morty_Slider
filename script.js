document.addEventListener('DOMContentLoaded', function () {
    fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => {
            const characters = data.results;
            const splideList = document.querySelector('.splide__list');




            characters.forEach(character => {
                const listItem = document.createElement('li');
                listItem.className = 'splide__slide';                
                listItem.innerHTML = `
                <div class="character-card">
                    <img src="${character.image}" alt="${character.name}">
                    <div class="character-info">
                        <p class="character-name">${character.name}</p>
                        <p class="character-status">${character.status} - ${character.species}</p>
                    </div>
                </div>             
            ` ;
    
                splideList.appendChild(listItem);       

            });

            

            new Splide('#image-carousel', {
                type: 'loop',
                perPage: 3,
                arrows: true,
                perMove: 3,
                gap: 20,
                arrowPath: 'm15.5 0.932-4.3 4.38...',
                breakpoints: {
                    640: {
                        perPage: 1,
                    },
                },
            }).mount();
        })
        .catch(error => console.error('API verileri alınamadı:', error));


});

