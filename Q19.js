let age = 25;

function displayAge() {
    console.log("Current Age:", age);
}

function changeAge() {
    age = 30;
    console.log("Age Updated Inside changeAge:", age);
}

displayAge();
changeAge();
displayAge();
