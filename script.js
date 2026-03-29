//массив объектов для сайд меню
const sidebarMenu = [
    {id: 1, label: "Home", icon: "icons/home.png"},
    {id: 2, label: "Main", icon: "icons/main.png"},
    {id: 3, label: "Notification", icon: "icons/notif.png"},
    {id: 4, label: "Security", icon: "icons/security.png"},
    {id: 5, label: "Location", icon: "icons/location.png"},
    {id: 6, label: "Friends", icon: "icons/friends.png"},
    {id: 7, label: "Analytics", icon: "icons/analytics.png"},
]

//точка входа куда будут складываться все html-ссылки для меню
const navList = document.querySelector('.main-nav')

//функция, которая рендерит сайдбар
// function renderMenu(activeId = 1) {
//     //очистка навлиста на случай, чтобы кнопки не создавались бесконечное кол-во раз
//     navList.innerHTML = '';

//     sidebarMenu.forEach((menuBtn) => {
//         //проверка активного элемента, на которого кликнул пользователь
//         const activeClass = menuBtn.id === activeId ? 'active' : ''

//         const li = document.createElement('li');
//         li.className = `nav-item ${activeClass}`

//         li.innerHTML = `
//             <img src='${menuBtn.icon}' alt='${menuBtn.label}' class='nav-icon'>
//             <span class='nav-label'>${menuBtn.label}</span>
//         `
//         // li.onclick = () => renderMenu(menuBtn.id)
//         // navList.append(li); 

//         li.onclick = () => {
//             const currentActive = document.querySelector('.nav-item.active');

//             if (currentActive) {
//                 currentActive.classList.remove('active');
//             }

//             li.classList.add('active');
//         }

//         navList.append(li);
//     }); 
// }

function renderMenu(activeId = 1) {
    //очистка навлиста на случай, чтобы кнопки не создавались бесконечное кол-во раз
    navList.innerHTML = '';

    const marker = document.createElement('div');
    marker.className = 'marker';
    navList.append(marker);

    sidebarMenu.forEach((menuBtn) => {
        //проверка активного элемента  на которого кликнул пользователь
        const activeClass = menuBtn.id === activeId ? 'active' : ''

        const li = document.createElement('li');
        li.className = `nav-item ${activeClass}`

        li.innerHTML = `
            <img src='${menuBtn.icon}' alt='${menuBtn.label}' class='nav-icon'>
            <span class='nav-label'>${menuBtn.label}</span>
        `
        if (menuBtn.id === activeId) {
            setTimeout(() => {
                marker.style.top = li.offsetTop + 'px';
            }, 0);
        }

        li.onclick = () => {
            const currentActive = document.querySelector('.nav-item.active');

            if (currentActive) {
                currentActive.classList.remove('active');
            }

            li.classList.add('active');
            marker.style.top = li.offsetTop + 'px';
        }

        navList.append(li);
    }); 
}

renderMenu();

renderMenu();