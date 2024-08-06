const loadData = ((text) => {
    const searchText = document.querySelector(".search-input").value;
    // clear previous data & error
    clearPreviousData();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText ? searchText : text}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.meals) {
                showData(data.meals);
            } else {
                showError(`No result found for ${searchText}...`);
            }
        });
});

const clearPreviousData = (() => {
    // card data clear
    document.querySelector(".meals-container").innerHTML = "";
    // error massage clear
    document.querySelector(".error-massage").innerHTML = "";
    // total meal clear
    document.querySelector(".total-meal").innerText = "";
});

const showError = ((massage) => {
    const errorMassage = document.querySelector(".error-massage");
    const errorElement = document.createElement("div");
    errorElement.textContent = massage;
    errorElement.style.color = "red";
    errorMassage.append(errorElement);
});

const showData = ((data) => {
    document.querySelector(".total-meal").innerHTML = data.length === 0 ? 0 : data.length;
    const mealsContainer = document.querySelector(".meals-container");
    data.forEach((meal) => {
        const card = document.createElement("div");
        card.classList.add("box");
        card.innerHTML = `
            <img src="${meal?.strMealThumb}" alt="" class="box-img">
            <h4>${meal?.strMeal}</h4>
            <p>${meal?.strInstructions.slice(0, 40)}.....</p>
            <button onclick="displayData(${meal.idMeal
            })" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
        `;
        mealsContainer.append(card);
    });
});

const displayData = (async (id) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        displayDetails(data.meals[0]);
    } catch {
        (err) => {
            console.log(err);
        };
    }
});

const displayDetails = ((value) => {
    const detailsContainer = document.querySelector(".modal-body");
    detailsContainer.innerHTML = `
        <p>Food Category: ${value.strCategory}</p>
        <p>Country of Origin: ${value.strArea}</p>
        <p class="text-center">More On: </p>
        <div class="btn-details">  
        <a href="${value.strYoutube}" target="_blank">
            <i class="fab fa-youtube icon_details"></i>
        </a>
       </div>
    `;
});

// Initially load data
loadData("a");
