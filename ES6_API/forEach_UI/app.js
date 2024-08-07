// array element show in webpage
const products = [
    { id: 1, name: "apple", price: 500, color: "golden" },
    { id: 2, name: "xiaomi", price: 124, color: "black" },
    { id: 3, name: "samsung", price: 200, color: "black" },
    { id: 4, name: "samsung2", price: 200, color: "black" },
    { id: 5, name: "lenovo", price: 300, color: "pink" },
    { id: 6, name: "xiaomi", price: 100, color: "pink" },
    { id: 7, name: "lenovo", price: 300, color: "pink" },
];
// get html div by id
const productContainer = document.getElementById("product-container");
const result = products.forEach((pd) => {
    // console.log(pd);
    const value = document.createElement("h1");
    value.innerText = pd.name;
    productContainer.appendChild(value);
});