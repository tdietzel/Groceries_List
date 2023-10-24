window.addEventListener("load", (e) => {
    e.preventDefault();
    document.querySelector("form#grocery-list").addEventListener("submit", handleForm);
});
function handleForm(e) {
    e.preventDefault();
    const form = document.getElementById("grocery-list");
    form.setAttribute("class", "hidden");
    const checkedGroceries = document.querySelectorAll("input[name=grocery-item]:checked");
    
    let groceryArray = [];
        checkedGroceries.forEach((grocery) => {
        groceryArray.push(grocery.value);
    });

    let organizedGroceryArray = groceryArray.sort();

    organizedGroceryArray.forEach((item) => {
        const paragraph = document.createElement("p");
        paragraph.append(item);
        document.body.append(paragraph);
    });
}