let huli ={
    _Name: "Exp 626",
    // { _Name: 'Exp 626 Taco', Name: [Setter] } "ask ben about"
set Name(Title) {
    if (typeof Title != "number") {
        console.log("Huli Huli Chicken")
    } else {
        this._Name = Name;
    }},
    get Name() {
        return this._Name;
     } 
    
}

console.log(huli);

let Exp_626 = {
    Prep_Time: "10 mins",
    Cook_Time: "20 mins.",
    Total_Time: "30 mins.",

    Serving_Size: "10-12",

}
console.log(Exp_626);

let ingredients = {
    "4lbs": "boneless chicken thighs ",
    "1c.": "pineapple juice",
    "1/2c.": "soy sauce & brown sugar",
    "1/3c.": "ketchup",
    "1/4c.": "chicken broth",
    "2tsp.": "minced ginger root",
    "1 1/2tsp.": "minced garlic",
    "1 pkg.": "Blue Corn Tortillas",
    Garnish: "sliced green onions, cilantro, lime wedge",
}
console.log(ingredients);

let Directions = {
    First: "In a medium sized bowl, whisk together pineapple juice, soy sauce, brown sugar, ketchup, chicken broth, ginger and garlic. Reserve 1 cup sauce for basting. Add the chicken thighs and sauce to a ziplock bag and marinate at least 3 hours or overnight.",
    Second: "Grill chicken, covered, over medium heat for 6-8 minutes on each side or until no longer pink. Baste occasionally with reserved marinade during the last 5 minutes. Garnish with green onions if desired",
    Third: "Shred chicken and place in warmed Blue Corn Tortilla w/ pineapple mango salsa, cilantro, and diced onion"

}
console.log(Directions);

ingredients_values.forEach(item => {
    console.log(item) });
