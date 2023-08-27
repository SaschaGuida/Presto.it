// funzione scroll navbar
document.addEventListener('scroll', function () {
    const scrolled = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        if (scrolled > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// carousell swiper
const swiper = new Swiper('.swiper', {
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', // aggiungere le classi custom per i bottoni
    },
});



// CARD CATEGORIE
const categoryWrapper = document.querySelector('.categories .row');

function getIconClass(categoryName) {
    const iconMap = {
        "Auto": "fas fa-car",
        "Elettronica": "fas fa-laptop",
        "Moto": "fas fa-motorcycle",
        "Abbigliamento": "fas fa-tshirt",
        "Soprt": "fas fa-dumbbell",
        "Giardinaggio": "fas fa-tree",
        "Casa": "fas fa-home",
        "Cucina": "fas fa-utensils"
        // Aggiungi più categorie e icone
    };
    return iconMap[categoryName] || "fas fa-question";
}

const categories = [
    { name: "Auto", announcementsCount: 123 },
    { name: "Elettronica", announcementsCount: 87 },
    { name: "Moto", announcementsCount: 321 },
    { name: "Abbigliamento", announcementsCount: 123 },
    { name: "Soprt", announcementsCount: 87 },
    { name: "Giardinaggio", announcementsCount: 321 },
    { name: "Casa", announcementsCount: 321 },
    { name: "Cucina", announcementsCount: 321 }
    // Aggiungi più categorie
];


// card annunci
const announcements = [
    { title: "Titolo Annuncio", description: "Lorem Ipsum dolor sit amet...", price: "10", category: "Auto", date: "14/07/2023", type: "Vendo", image: "./images/auto.jpg" },
    { title: "Titolo Annuncio", description: "Lorem Ipsum dolor sit amet...", price: "500", category: "Elettronica", date: "14/07/2023", type: "Vendo", image: "./images/auto.jpg" },
    { title: "Titolo Annuncio", description: "Lorem Ipsum dolor sit amet...", price: "1000", category: "Sport", date: "14/07/2023", type: "Vendo", image: "./images/auto.jpg" },
    { title: "Titolo Annuncio", description: "Lorem Ipsum dolor sit amet...", price: "30", category: "Auto", date: "14/07/2023", type: "Cerco", image: "./images/auto.jpg" },
    { title: "Titolo Annuncio", description: "Lorem Ipsum dolor sit amet...", price: "30", category: "Giardinaggio", date: "14/07/2023", type: "Cerco", image: "./images/auto.jpg" },
    { title: "Titolo Annuncio", description: "Lorem Ipsum dolor sit amet...", price: "1000", category: "Casa", date: "14/07/2023", type: "Vendo", image: "./images/auto.jpg" },
    { title: "Titolo Annuncio", description: "Lorem Ipsum dolor sit amet...", price: "80", category: "Moto", date: "14/07/2023", type: "Cerco", image: "./images/auto.jpg" },
    { title: "Titolo Annuncio", description: "Lorem Ipsum dolor sit amet...", price: "1000", category: "Cucina", date: "14/07/2023", type: "Vendo", image: "./images/auto.jpg" }
    // Aggiungi altri dati degli annunci
];

const announcementCardsContainer = document.getElementById('announcementCards');


// Funzione per generare le opzioni delle categorie nel menu a discesa
function generateCategoryOptions() {
    const categoryInput = document.getElementById("categoryInput");

    let optionsHTML = '<option>Tutti gli annunci</option>';

    categories.forEach(category => {
        optionsHTML += `<option value="${category.name}">${category.name}</option>`;
    });

    categoryInput.innerHTML = optionsHTML;
}

generateCategoryOptions();



/* 

|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ

*/