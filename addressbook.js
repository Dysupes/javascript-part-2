function MakeNewPerson (firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
};

function Email (address,typeEmail){
    this.address = address;
   
    var typeOfEmail = ["work","home","other"];
     if(typeOfEmail.indexOf(typeEmail) > -1) {
            return this.emailType = typeEmail;
        } else {
            return this.emailType = "other";
        }
}

MakeNewPerson.prototype = {
    addEmail: function(emailAddress,type){
        this.emails.push(new Email(emailAddress, type))
    }
}

var dylan = new MakeNewPerson ("Dylan","Pelletier");
dylan.addEmail('dysupes79@gmail.com', 'work');
console.log(dylan);