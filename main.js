//**** Class to make Apple object ***
class TheApple {
    constructor (name) {
        this.name = name;
        this.weight = 10;
    }
    decrease () {
        this.weight -=1;
    }
    isEmpty () {
        if (this.weight==0) return true;
        else return false;
    }
    getWeight () {
        return this.weight;
    }
}
//*********************************************

//*** Class to make Adam and Eva ***
class Human {
    constructor(name,gender,weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    }
    isMale (){
        if (this.gender == male)
            return true;
        else return false;
    }
    setGender (gender) {
        this.gender = gender;
    }
    checkApple (apple){
        return apple.weight;
    }
    eat (apple){
        apple.weight -= 1;
        this.weight += 1;
    }
    say (something) {
        console.log(something);
    }
    getName (){
        return this.name;
    }
    setName (newName){
        this.name = newName;
    }
    getWeight (){
        return this.weight;
    }
    setWeight (newWeight){
        this.weight = newWeight;
    }
}
//*********************************************

let apple = new TheApple('apple');
let eva = new Human('eva','female',50);
let adam = new Human('adam', 'male', 60)

adam.say('hello');

function showAppleWeight(){
    document.getElementById('apple-height').value = apple.getWeight();
}
function showEva (){
    document.getElementById('eva-name').value = eva.getName();
    document.getElementById('eva-weight').value = eva.getWeight();
}
function showAdam (){
    document.getElementById('adam-name').value = adam.getName();
    document.getElementById('adam-weight').value = adam.getWeight();
}
function eatApple (human){
    if (apple.isEmpty()==false)
    human.eat(apple);
    showAll();
}

function showAll (){
    showAppleWeight();
    showEva();
    showAdam();
}

showAll();
