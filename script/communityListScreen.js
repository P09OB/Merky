
const communityContainer = document.querySelector('.communityListContainer');
console.log(users);

const comunitylists = [{
    id: Math.random(),
    name: "Comida de mar",
    userId: 1,
    products: [2, 3]

}]


const renderCommunityList = () => {


    comunitylists.forEach(list => {

        let user = users.find(element => {

            return element.id === list.userId;
        });
        console.log(user);

        const container = document.createElement('a');

        container.classList.add('community-list');
        container.setAttribute('href', `./myProducts.html?id=${list.id}&type=comunidad`)
        container.innerHTML =
            `
        
        <h3 class="community-list-title">${list.name}</h3>
        <div class="community-list-info">
        <div class="community-list-img-container">
            <img class="community-list-image"
                src=${user.profilePicture}
                alt="">
        </div>
            <p class="community-list-user">${user.userName}</p>
            <p class="community-list-products">${list.products.length} productos</p>
        
    </div>
    `
        communityContainer.appendChild(container)


    });


}
renderCommunityList();