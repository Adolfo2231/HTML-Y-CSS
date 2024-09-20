function Cube(side) {
    this.side = side;
    
    this.calculateVolume = function() {
        console.log(this.side * this.side * this.side);
    }
    
    this.setSide = function(newSide) {
        this.side = newSide;
    }
}