const ingredients = [ "Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments", ];


for(let i=0;i<ingredients.length;i++){
const xd= document.createElement("li");
xd.innerText=ingredients[i];
xd.classList.add("item");
document.getElementById("ingredients").appendChild(xd);
}
