// prova con funzione fetch file JSON

document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.getElementById('filterBtn');
    const announcementCardsContainerAnno = document.getElementById('announcementsWrapper'); // Spostato fuori dallo scope dell'evento

    fetch('mock/data.json')
        .then(response => response.json())
        .then(announcements => {
            renderAnnouncements(announcements, announcementCardsContainerAnno);

            const categorySelect = document.getElementById('categoryInput');
            categorySelect.innerHTML = '<option value="Tutte le categorie">Tutte le categorie</option>'; // Aggiungi l'opzione "Tutte le categorie" all'inizio
            const categories = Array.from(new Set(announcements.map(announcement => announcement.category)));
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categorySelect.appendChild(option);
            });

            filterButton.addEventListener('click', function() {
                const searchInput = document.getElementById('searchInput').value.toLowerCase();
                const categoryInput = document.getElementById('categoryInput').value;
                const minPriceInput = parseFloat(document.getElementById('minPriceInput').value);
                const maxPriceInput = parseFloat(document.getElementById('maxPriceInput').value);

                const filteredAnnouncements = announcements.filter(announcement => {
                    const titleMatch = announcement.title.toLowerCase().includes(searchInput);
                    const categoryMatch = categoryInput === 'Tutte le categorie' || announcement.category === categoryInput;
                    const priceMatch = (isNaN(minPriceInput) || announcement.price >= minPriceInput) &&
                                        (isNaN(maxPriceInput) || announcement.price <= maxPriceInput);
                    return titleMatch && categoryMatch && priceMatch;
                });

                renderAnnouncements(filteredAnnouncements, announcementCardsContainerAnno);

                document.getElementById('searchInput').value = '';
/*                 document.getElementById('categoryInput').value = 'Tutte le categorie'; */  // decidere se svuotare o meno il campo tutte le categorie
                document.getElementById('minPriceInput').value = '';
                document.getElementById('maxPriceInput').value = '';
            });
        })
        .catch(error => {
            console.error('Errore nel caricamento dei dati:', error);
        });
});

function renderAnnouncements(announcementsArray, container) {
    container.innerHTML = '';

    announcementsArray.forEach(function (announcement) {
        const card = document.createElement('div');
        card.classList.add('col-6', 'col-md-3', 'mb-4', 'announcement-card');
        card.innerHTML = `
            <div class="card-announcement">
                <div class="image overflow-hidden position-relative">
                    <p class="type-announcement ${announcement.type === 'Vendo' ? 'bg-danger' : 'bg-success'} text-white rounded">${announcement.type}</p>
                    <img src="${announcement.image}" alt="${announcement.title}">
                </div>
                <div class="details">
                    <p class="fs-3 c-main fw-semibold mb-1" style="color: var(--main)">${announcement.price} $</p>
                    <h3 class="c-dark fw-semibold">${announcement.title}</h3>
                    <p class="c-neutral mb-0">${announcement.description}</p>
                </div>
                <div class="footer-announcement bg-white d-flex">
                    <div class="col text-center py-2 c-main">
                        <i class="fa-solid fa-tag"></i>
                        ${announcement.category}
                    </div>
                    <div class="col text-center py-2 c-main">
                        <i class="fa-solid fa-calendar-day"></i>
                        ${announcement.date}
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}



/* 

|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ

*/