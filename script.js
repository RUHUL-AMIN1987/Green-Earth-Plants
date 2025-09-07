
const categoriesContainer = document.getElementById("catagories");

const loadeCatagorie = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then ((res) => res.json())
    .then ((data) => {
        console.log(data.categories);
        const category = data.categories;
        category.forEach (cat => {
            categoriesContainer.innerHTML += `
                <li id="${cat.id}" class="list-none text-black hover:text-white hover:bg-green-700 py-2 px-4 rounded cursor-pointer mr-5 transition duration-300">
                ${cat.category_name}
                </li>`
        })
    })
};
loadeCatagorie();





