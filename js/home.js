categories.forEach(function (category) {
    const card = document.createElement('div');
    card.classList.add('col-6', 'col-md-3', 'mb-4', 'category-card');
    card.innerHTML = `
            <div class="card">
                <div class="category-icon">
                    <i class="${getIconClass(category.name)}"></i>
                </div>
                <div class="card-body">
                    <h4 class="card-title">${category.name}</h4>
                    <p class="card-text">${category.announcementsCount} annunci</p>
                </div>
            </div>`;
    categoryWrapper.appendChild(card);
});



announcements.forEach(function (announcement) {
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
    announcementCardsContainer.appendChild(card);
});



/* 

|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ

*/