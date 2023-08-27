document.addEventListener('DOMContentLoaded', function() {
    const announcementCardsContainerAnnoLocal = document.getElementById('announcementsWrapperLOCAL');

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

    const filterButton = document.getElementById('filterBtn');
    const searchInput = document.getElementById('searchInput');
    const categoryInput = document.getElementById('categoryInput');
    const minPriceInput = document.getElementById('minPriceInput');
    const maxPriceInput = document.getElementById('maxPriceInput');

    filterButton.addEventListener('click', function() {
        const searchQuery = searchInput.value.toLowerCase();
        const selectedCategory = categoryInput.value;
        const minPrice = parseFloat(minPriceInput.value) || 0;
        const maxPrice = parseFloat(maxPriceInput.value) || Number.POSITIVE_INFINITY;

        const filteredAnnouncements = announcements.filter(function (announcement) {
            const titleMatch = announcement.title.toLowerCase().includes(searchQuery);
            const categoryMatch = selectedCategory === 'Tutte le categorie' || announcement.category === selectedCategory;
            const priceMatch = (isNaN(minPrice) || parseFloat(announcement.price) >= minPrice) && (isNaN(maxPrice) || parseFloat(announcement.price) <= maxPrice);

            return titleMatch && categoryMatch && priceMatch;
        });

        renderAnnouncements(filteredAnnouncements, announcementCardsContainerAnnoLocal);

        document.getElementById('searchInput').value = '';
        /*                 document.getElementById('categoryInput').value = 'Tutte le categorie'; */  // decidere se svuotare o meno il campo tutte le categorie
                        document.getElementById('minPriceInput').value = '';
                        document.getElementById('maxPriceInput').value = '';
    });

    const categorySelect = document.getElementById('categoryInput');
    categorySelect.innerHTML = '<option value="Tutte le categorie">Tutte le categorie</option>';
    const categories = Array.from(new Set(announcements.map(announcement => announcement.category)));
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    renderAnnouncements(announcements, announcementCardsContainerAnnoLocal);
});
