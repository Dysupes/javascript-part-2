// First question

var strings = [
    {str: "Dylan would love to go back to the Great Wall"},
    {str: "Emma would like to visit someday!"}
];

var longString = strings.sort(function (obj1,obj2){
    if (obj1.str.length > obj2.str.length){
        return -1;
    } if (obj1.str.length < obj2.str.length) {
        return 1;
    } else {
        return 0;
    }
});

// console.log(longString[0].str);

// Second question



var personDetails = [
        {name: "Dylan", email:"dysupes79@gmail.com"},
        {name: "Jen", email: "jen@hotmail.com"}
];

var sortNames = personDetails.sort(function (objt1, objt2){
    if (objt1.name.length > objt2.name.length){
        return -1;
    } if (objt1.name.length < objt2.name.length){
        return 1;
    } else {
        return 0;
    }
});

console.log(sortNames);

var sortEmails = personDetails.sort(function (objt1,objt2){
    if (objt1.email > objt2.email){
        return 1;
    } if (objt1.email < objt2.email){
        return -1;
    }  else {
        return 0;
    }
});

console.log(sortEmails);

