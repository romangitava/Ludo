// get main container so that we can create elements inside it
let getChildContainer = document.querySelector(".ludo-container")

// using for loop to create elements and insert inside the child container
for (let i = 0; i<79; i++){
    getChildContainer.insertAdjacentHTML("beforeend", `<div class='cell cell${i}'></div>`)
}


// __________________________________For Red Persons______________________________
// get cell classses
let getCellClasses = document.querySelectorAll(".cell")

// create element and insert inside <cell0> class
getCellClasses[0].insertAdjacentHTML("beforeend", "<div class='red-side'></div>")

// get red-side container
let getRedSideContainer = document.querySelector(".red-side")

// create and insert inside the <red-side> classs
getRedSideContainer.insertAdjacentHTML("afterbegin", "<div class='red-home'></div>")



// get <red-home> class to insert elements inside it
let getRedHome = document.querySelector(".red-home")

getRedHome.insertAdjacentHTML("afterbegin", "<div class='red-persons-place'></div>")


// using for loop to create and insert elements inside <red-home> class
for (let i = 0; i<4; i++){
    document.querySelector(".red-persons-place").insertAdjacentHTML("beforeend", "<div class='red-person-place'></div>")
}


// get <red-person-place> class to insert persons
let getPersonPlace = document.querySelectorAll(".red-person-place")

// using for loop to insert person every this
for(let i = 0; i<getPersonPlace.length; i++){
    getPersonPlace[i].innerHTML = "<div class='red-persons'><div>"
}




//_______________________________For Green Persons________________________________
getCellClasses[4].insertAdjacentHTML("beforeend", "<div class='green-side'></div>")

// get <green-side> class 
let getGreenSideContainer = document.querySelector(".green-side")


// create and insert inside the <green-side> classs
getGreenSideContainer.insertAdjacentHTML("afterbegin", "<div class='green-home'></div>")


// get <green-home> class to insert elements inside it
let getGreenHome = document.querySelector(".green-home")

getGreenHome.insertAdjacentHTML("afterbegin", "<div class='green-persons-place'></div>")

// using for loop to create and insert elements inside <green-home> class
for (let i = 0; i<4; i++){
    document.querySelector(".green-persons-place").insertAdjacentHTML("beforeend", "<div class='green-person-place'></div>")
}


// get <green-person-place> class to insert persons
let getGreenPersonPlace = document.querySelectorAll(".green-person-place")

// using for loop to insert person every this
for(let i = 0; i<getGreenPersonPlace.length; i++){
    getGreenPersonPlace[i].innerHTML = "<div class='green-persons'><div>"
}




// ______________________________For Blue Persons___________________________________
getCellClasses[74].insertAdjacentHTML("beforeend", "<div class='blue-side'></div>")

// get <blue-side> class 
let getBlueSideContainer = document.querySelector(".blue-side")


// create and insert inside the <blue-side> classs
getBlueSideContainer.insertAdjacentHTML("afterbegin", "<div class='blue-home'></div>")


// get <blue-home> class to insert elements inside it
let getBlueHome = document.querySelector(".blue-home")

getBlueHome.insertAdjacentHTML("afterbegin", "<div class='blue-persons-place'></div>")

// using for loop to create and insert elements inside <blue-home> class
for (let i = 0; i<4; i++){
    document.querySelector(".blue-persons-place").insertAdjacentHTML("beforeend", "<div class='blue-person-place'></div>")
}


// get <blue-person-place> class to insert persons
let getBluePersonPlace = document.querySelectorAll(".blue-person-place")

// using for loop to insert person every this
for(let i = 0; i<getBluePersonPlace.length; i++){
    getBluePersonPlace[i].innerHTML = "<div class='blue-persons'><div>"
}







// _______________________For Yellow Person__________________________________
getCellClasses[78].insertAdjacentHTML("beforeend", "<div class='yellow-side'></div>")

// get <yellow-side> class 
let getYellowSideContainer = document.querySelector(".yellow-side")


// create and insert inside the <yellow-side> classs
getYellowSideContainer.insertAdjacentHTML("afterbegin", "<div class='yellow-home'></div>")


// get <yellow-home> class to insert elements inside it
let getYellowHome = document.querySelector(".yellow-home")

getYellowHome.insertAdjacentHTML("afterbegin", "<div class='yellow-persons-place'></div>")


// using for loop to create and insert elements inside <yellow-home> class
for (let i = 0; i<4; i++){
    document.querySelector(".yellow-persons-place").insertAdjacentHTML("beforeend", "<div class='yellow-person-place'></div>")
}


// get <yellow-person-place> class to insert persons
let getYellowPersonPlace = document.querySelectorAll(".yellow-person-place")

// using for loop to insert person every this
for(let i = 0; i<getYellowPersonPlace.length; i++){
    getYellowPersonPlace[i].innerHTML = "<div class='yellow-persons'><div>"
}







// ______________________________________get cell design______________________________

let num = 0 // create a variable and by default i passed 0

// using for loop to give background design 
for (let i = 0; i<getCellClasses.length; i++){
    num+=3
    
    // condition if num >73 then break
    if(num == 74){
        break
    }

    // conditio to give green background
    else if(num>5 && num<=18){
        getCellClasses[num].style.background = "green"
    }

    // condition to give red background 
    else if(i > 33 && i<= 38){
        getCellClasses[i].style.background = "red"
    }

    // condition to give yellow background
    else if(i>=39 && i<44){
        getCellClasses[i].style.background = "yellow"
    }
    
    // condition to give aqua background
    else if(num>=58 && num<73){
        getCellClasses[num-2].style.background = "rgb(4, 225, 225)"
    }
    
    
    // condition to give aqua background
    else if(i == 69){
        getCellClasses[i].style.background = "rgb(4, 225, 225)"
        
    }
    
    // condition to give red background
    if(i == 21){
        getCellClasses[i].style.background = "red"
    }

    // condition to give green background
    if(i == 7){
        getCellClasses[i].style.background = "green"
    }

    // condition to give yellow background
    if(i == 55){
        getCellClasses[i].style.background = "yellow"
    }

}




// give arrows on a index 
getCellClasses[33].innerHTML = "<p class='arrow arrow-red'>&rarr;</p>"
getCellClasses[2].innerHTML = "<p class='arrow arrow-green'>&darr;</p>"
getCellClasses[2].innerHTML = "<p class='arrow arrow-green'>&darr;</p>"
getCellClasses[73].innerHTML = "<p class='arrow arrow-aqua'>&uarr;</p>"
getCellClasses[73].innerHTML = "<p class='arrow arrow-aqua'>&uarr;</p>"
getCellClasses[44].innerHTML = "<p class='arrow arrow-yellow'>&larr;</p>"


// give stars on a index
getCellClasses[8].innerHTML = "<img src='ludo-star.png' class='star'>"
getCellClasses[30].innerHTML = "<img src='ludo-star.png' class='star'>"
getCellClasses[68].innerHTML = "<img src='ludo-star.png' class='star'>"
getCellClasses[47].innerHTML = "<img src='ludo-star.png' class='star'>"





















// ___________________________________________Ludo Dice Logic______________________________

const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');

const randomDice = () => {

    const random = Math.floor(Math.random() * 6);

    if (random >= 1 && random <= 6) {
        rollDice(random);
        console.log(random)
    }
    else {
        randomDice();
    }
}

const rollDice = random => {

    dice.style.animation = 'rolling 4s';

    setTimeout(() => {

        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            default:
                break;
        }

        dice.style.animation = 'none';

    }, 4050);

}

rollBtn.addEventListener('click', randomDice);



