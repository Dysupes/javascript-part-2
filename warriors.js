function MakeWarrior (name,gender) {
        this.name = name;
        this.gender = gender;
        this.level = 1;
        this.weapon = 'wooden sword';
        this.power = (Math.floor(Math.random() * 100));
        this.fight = function(){
            console.log(this.name + "rushes to the arena with" + this.weapon);
        };
        this.faceoff = function(opponent){
            if (this.power > opponent.power){
                console.log("You won!");
            } else {
                console.log(opponent.name + " won!");
            }
        };
}


var codrin = new MakeWarrior("Codrin",'M');
var dylan = new MakeWarrior("Dylan",'M');

dylan.faceoff(codrin);
console.log(codrin);