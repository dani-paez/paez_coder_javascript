//variables

let ingresoNombre = prompt("Hola! ingresa tu nombre para comenzar");

alert("Bienvenido/a" + " " + ingresoNombre);
alert( "Somos de THE KETO LAB y a continuación detallaremos los próximos talleres/labs a los que podrás inscribirte… \n1-LAB DE PANES Y PIZZAS \n2-LAB DE REPOSTERIA \n3-LAB DE NUTRICION");

let labPanesPizzas = 1250; 
let labReposteria = 1300;
let labNutricion = 2000;


let labs = prompt("Elige cualquiera de nuestros LABS disponiles: \n1-LAB DE PANES Y PIZZAS \n2-LAB DE REPOSTERIA \n3-LAB DE NUTRICION \nPresiona x para finalizar.");

function talleres (){
    if (labs == "1") {
        
        alert("Te has inscripto al LAB de Panes y Pizzas, con un costo de" + " " + "$" + labPanesPizzas);
} else if (labs =="2") {
        
        alert("Te has inscripto al LAB de Reposteria, con un costo de" + " " + "$" + labReposteria);
} else if (labs == "3") {
        
        alert("Te has inscripto al LAB de Nutrición, con un costo de" + " " + "$" + labNutricion);
} else {
        alert("No te inscribiste a ningún Lab!");
}
}  

talleres ();

let saludo = console.log( prompt ("Buenísimo!!! Escribe tu mail para que te enviemos todos los datos del lab al que te anotaste!!!")); 
