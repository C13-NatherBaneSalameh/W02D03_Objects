/* START CODE UNDER THIS LINE */
console.log("9/10/2024")
//===================pulse cheack=============
// Q1
//1
const person_1  ={name :"nather" ,age :"25 " ,gender:" male"  }
//2
const movie   ={name :"ellmbi" ,length :"2h" ,genre: "comedy " }
//3
const favoriteFood ={

    fav : ["mssf","shshbrk","ras kharof"]
}
//4
const store ={ 
    name : "nather ",
    address:{buildingNumber :"irbd ",street: "aborashed st"}


}
//Q2 
const orderedSolarSystem = {
    Mercery: "first",
    Venus: "second",
    Earth: "third",
    Mars: "fourth",};
//1
//a 
orderedSolarSystem.Mars
//b
orderedSolarSystem.Mars
//2
const animalDiet = {
    mammals: {
      cat: "carnivore",
      dog: "carnivore",
      koala: "herbivore",
    },
    fish: {
      shark: "carnivore",
    },
  };
  animalDiet.mammals.koala

  //Q3
  //1
  const studentOne = {
    englishGrade: 80,
    scienceGrade: 90,
  };
  studentOne.mathgrade=80;
  studentOne.englishGrade=80;
  studentOne.avarge= (studentOne.mathgrade+studentOne.englishGrade+studentOne.scienceGrade)/3
//2
studentOne["mathgrade"]=80;
  studentOne["englishGrad"]=80;
  studentOne["avarge"]= (studentOne.mathgrade+studentOne.englishGrade+studentOne.scienceGrade)/3
  //3
  const objectKey = "key";
const objectValue = "value";

const object = {};
object.key=objectKey;
object.value=objectValue;
//========================================Practice=======
//Q1
//const person_2 = (name: john, age:20)
const person_2 = {name: "john", age:20}
//const car = {brand "Toyota", model: 2020}
const car = {brand :"Toyota", model: 2020}
//const employee ={name: "Jane", position: developer}
const employee ={name: "Jane", position: "developer"}

//Q2
//1
const person_3 = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
};
person_3.age;
person_3.age=23;
person_3.work={position:"developer",salary:350}
//2
const employees = [
  {
    id: 1,
    name: {
      first: "John",
      last: "Doe",
    },
    position: "Designer",
  },
  {
    id: 2,
    name: {
      first: "Jane",
      last: "Doe",
    },
    position: "Engineer",
  },
];
employees[0].name.first;

employees[1].name.first;

employees [2]={name:"nather",position :" full-stack developer."}
//3
const cars = {
  toyota: {
    name: "prius",
    model: 2019,
  },
  nissan: {
    name: "leaf",
    model: 2020,
  },
};
cars.toyota.name;
cars.nissan.name;

cars.toyota.model=2020;
cars.bmw={name: "bmw",
  model: 2020,}
//Q3
  const createUser = function (firstName, lastName) {

    return {firstName:firstName,lastName:lastName}

  };
  //Q4
  const createCar = function (brand, name, color) {
return {brand:brand,name:name,color:color}

  };
  //Q5
  const getFullName = function (person) {
return person.first+" "+person.middle+ " "+person.last;  };

//Q6 
const olderThan = function (personOne, personTwo) {
if (personOne.age>personTwo.age){
  return personOne.name +" "+"is older than"+" " +personTwo.name

}else {
  return personTwo.name+" "+"is older than"+" "+ personOne.name
}

};
//Q7
const isPropertyOf = function (string, object) {
 
if (object[string]===undefined){
  return false;
}else{
  return true;
}
};

//Q8
const numberOfKeys = function (object) {
 return Object.keys(object).length

};
//Q9
const valuesToString = function (object) {
let a= Object.values(object)
return a.join(" ")
};

//Q10
const keyInObject = function (object, key) {
   return object.hasOwnProperty(key);
};
//=======================advance practice==============

//Q1
// 
const family = {name: "John",children: [{name: "Bill",children:[ {name:"Mark", children:[],}, {name:"Sarah",children: [{name: "Smith", children: [],  }, {name: "Stan", children: [], },], },{name: "Samuel", children: [], }, ], },{name: "Jane",children: [], },],
};

//1 
family.children[0].children[1].children[0].name
family.children[0].children[1].children[1].name 
family.children[0].children[2].children
//2 
family.children[0].children[2].children[0]={
  name : "sam",
  children:["marry", "Gwen"]

}
//3 
 delete family.children[0].children[0].children;
 delete family.children[0].children[1].children[0].children;
 delete family.children[0].children[1].children[1].children;
 delete family.children[1].children;

 //Q2

 const createIceCream = function (coneType, iceCreamFlavour, topping) {
 if (coneType===undefined){
  coneType="none"
 }else if(iceCreamFlavour===undefined){
  iceCreamFlavour="none"
 }else if (topping===undefined){
  topping="none";

 }
 return {
coneType: coneType,
Flavour :iceCreamFlavour,
topping:topping
 }
};

//Q3 
// اول if false ما رح يطبع اشي 
// ثاني if true رج يطبع john 
// ثالث if flse empity string مارح يطبع اشي 
//رابع if true رح يطبعه john 
//خامس if بتعطي undefined عشان بستدعي key مش موجود بالobject 


//Q4
const users = {
  mrpotato: {
    email: "mr.potato@gmail.com",
    password: "LonelyPotato",
  },
  thewiseman: {
    email: "wiseMan9999@gmail.com",
    password: "12345678",
  },
};

const isValidUser = function (loginInfo) {
if (loginInfo.username.toLowerCase()==="mrpotato"||loginInfo.username.toLowerCase()==="thewiseman"){return true}};