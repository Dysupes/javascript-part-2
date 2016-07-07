function Tile(type){
    this.type = type;  
};

var tile;

Tile.prototype = {
    isWalkable: function() {
        if ((this.type === "grass") || (this.type === "sand")) {
            return true;
        } else {
            return false;
        }
    }
};

function randomType(){
    
    var type;
    var random = Math.random();
    if (random <= 0.33){
        type = 'sand';
    } else if (random <= 0.66){
        type = 'grass';
    } else {
        type = 'water';
    }
    return type;
};

function Map(width, height) {
    this.width = Math.floor(width);
    this.height = Math.floor(height);
   
    this.tiles = [];
    
    for (var rowIndex = 0; rowIndex < height; rowIndex++) {
       var columns = [];
       for (var columnIndex = 0; columnIndex < width; columnIndex++) {
           var typeR = randomType();
           columns.push(new Tile(typeR));
       }
       this.tiles.push(columns);
    }
    
    this.getWalkableOutput = function(){
    
        for (var rowIndex = 0; rowIndex < height; rowIndex++) {
           rowOutput = "";
           for (var columnIndex = 0; columnIndex < width; columnIndex++) {
                if (this.tiles[rowIndex][columnIndex].isWalkable()) {
                    var walkableOutput = "O"; 
                } else {
                    var walkableOutput = "X";
                }
               rowOutput = rowOutput + walkableOutput + " ";
           }
           console.log(rowOutput);
        }
    }    
    
    this.getAsciiOutput = function(){
    
        for (var rowIndex = 0; rowIndex < height; rowIndex++) {
            rowOutput = "";
            for (var columnIndex = 0; columnIndex < width; columnIndex++) {
                if (this.tiles[rowIndex][columnIndex].type === "grass") {
                    var asciiOutput = "*"; 
                } else if (this.tiles[rowIndex][columnIndex].type === "sand") {
                    var asciiOutput = ":";
                } else {
                    var asciiOutput = "~";
                }
               rowOutput = rowOutput + asciiOutput + " ";
            }
            console.log(rowOutput);
        }
    }
}

// var tile = new Tile('grass');
// console.log(tile.isWalkable());
var map = new Map(4,5);
// map.getWalkableOutput();
map.getAsciiOutput();



