
const categoriesContainer = document.getElementById("catagories");

const loadeCatagorie = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then ((res) => res.json())
    .then ((data) => {
        // console.log(data.categories);
        const category = data.categories;
        category.forEach (cat => {
            categoriesContainer.innerHTML += `
                <li id="${cat.id}" class="list-none text-black hover:text-white hover:bg-green-700 py-2 px-4 rounded cursor-pointer mr-5 transition duration-300">
                ${cat.category_name}
                </li>`
        })
    })
    };
   
   const displayAllData = document.getElementById("main-card");
   displayLesson = () => {
     fetch("https://openapi.programming-hero.com/api/plants")
        .then((res) => res.json())
            .then((plants) => allDisplayLessonUi(plants.plants));

   };
  
   const allDisplayLessonUi = (lessons) => {
    const mainContainer = document.getElementById("main-card");
    mainContainer.innerHTML = ""; 

    for (let lesson of lessons) {
        mainContainer.innerHTML += `
            <div class="bg-white card p-4 shadow-xl">
                <img src="${lesson.image}" alt="${lesson.name}" class="w-full h-48 object-cover rounded-lg my-2" />
                <h2 onclick="my_modal_1.showModal()" class="font-semi-bold text-2xl cursor-pointer">${lesson.name}</h2>
                <p>${lesson.description}</p>
                <div class="flex justify-between mt-2 items-center">
                 <button class="py-1 px-4 bg-[#DCFCE7] rounded-full text-[#15803D]">${lesson.category}</button>
                <h2 class="font-bold">
                    <span class="text-2xl font-bold">৳</span>
                    <span class="text-xl text-black">${lesson.price}</span>
                </h2>
                </div>
                <button class="add-to-cart-btn bg-[#15803D] rounded-full py-2 w-full text-white cursor-pointer mt-2">Add to Cart</button>
            </div>
        `;
    }
};
 
   displayLesson();
    loadeCatagorie();






