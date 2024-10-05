let cadena: string | number = "Joam Delgado";
let numero: number = 12;
let buleano: boolean = true;
let cualquiera: any = 'arroz';
var lenguajes: Array<string> = ["php", "js", "css"];
let years: number[] = [2018, 2019, 2020];
let letters: string[] = ["A", "B", "Y", "Z"];


type alfanumerico = string | number

let cadena2: alfanumerico = "quince";

//console.log(cadena, cadena2, numero, buleano, cualquiera, lenguajes, years, letters); 

/*  CLASES */
//Molde del objeto
class Camiseta implements CamisetaBase{
    //Propiedades del objeto
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;
    
    //Metodos del objeto
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio
    }

    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }
}

var camiseta = new Camiseta("rojo", "new Age", "Ovejita", "XXL", 14);
//camiseta.setColor = 'Rojo'; //no funciona

//console.log(camiseta);

class Main{
    constructor(){
        console.log("Aplciacion JS Cargada !!!");
    }
}

var main = new Main();


interface CamisetaBase{
    setColor(color);
    getColor();
}

//Herencia
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha(){
        return this.capucha;
    }
}

var sudadera_nk = new Sudadera("rojo2", "new Age2", "Ovejita2", "XXL2", 142);;
sudadera_nk.setCapucha(true);
sudadera_nk.setColor("gray");
console.log(sudadera_nk);

