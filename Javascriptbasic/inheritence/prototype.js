function Animal(type)
{
	this.type=type;
};
Animal.prototype.getAnimalType=function(){
	console.log("Animal Type: "+this.type);
};
function Lion(name)
{
	Animal.call(this,"carnibore");
	this.animalName=name;
}
Lion.prototype=Object.create(Animal.prototype);
Lion.prototype.constructor=Lion;
Lion.prototype.roar=function()
{
	console.log(this.animalName);
}
var animal=new Lion("lion");
console.log("Animal Name: "+animal.animalName);
animal.getAnimalType();
animal.roar();
