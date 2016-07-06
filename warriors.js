function MakeWarrior (name,gender) {
    return {
        name: 'name',
        gender: 'gender',
        level: 1,
        weapon: 'wooden sword',
        power: (Math.random(0,100)),
        fight: function(){
            console.log(this.name + "rushes to the arena with" + this.weapon);
        },
        faceoff: function(opponent){
            if (this.power > opponent.power){
                console.log("You won!");
            } else {
                console.log(opponent.name + " won!");
            }
        }
    }
    
}

var codrin = new MakeWarrior("Codrin",'M');
var dylan = new MakeWarrior("Dylan",'M');

dylan.faceoff(codrin);