document.addEventListener('DOMContentLoaded', function() {
    const insertButton = document.getElementById('insertButton');
    insertButton.addEventListener('click', function() {
        const title = document.getElementById('titleInput').value;
        const description = document.getElementById('descriptionInput').value;
        const price = document.getElementById('priceInput').value;
        const category = document.getElementById('categoryInput').value;
        const type = document.getElementById('typeInput').value;

        const newAnnouncement = {
            title: title,
            description: description,
            price: price,
            category: category,
            type: type,
            date: new Date().toLocaleDateString()
        };

        const announcements = JSON.parse(localStorage.getItem('announcements')) || [];
        
        announcements.push(newAnnouncement);
        
        localStorage.setItem('announcements', JSON.stringify(announcements));

        window.location.href = 'announcement.html';
    });
});



/* 

|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ

*/
