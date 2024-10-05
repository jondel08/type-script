var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cadena = "Joam Delgado";
var numero = 12;
var buleano = true;
var cualquiera = 'arroz';
var lenguajes = ["php", "js", "css"];
var years = [2018, 2019, 2020];
var letters = ["A", "B", "Y", "Z"];
var cadena2 = "quince";
//console.log(cadena, cadena2, numero, buleano, cualquiera, lenguajes, years, letters); 
/*  CLASES */
//Molde del objeto
var Camiseta = /** @class */ (function () {
    //Metodos del objeto
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta("rojo", "new Age", "Ovejita", "XXL", 14);
//camiseta.setColor = 'Rojo'; //no funciona
//console.log(camiseta);
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplciacion JS Cargada !!!");
    }
    return Main;
}());
var main = new Main();
//Herencia
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var sudadera_nk = new Sudadera("rojo2", "new Age2", "Ovejita2", "XXL2", 142);
;
sudadera_nk.setCapucha(true);
sudadera_nk.setColor("gray");
console.log(sudadera_nk);
