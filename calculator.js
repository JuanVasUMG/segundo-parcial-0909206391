//Extraemos el elemento dom de la entrada y el tratamiento.
var input_content = document.getElementById("operation").value;

//Declarar funciones en ambas secciones (calculadora científica y operaciones básicas)
function pulsada (tecla) {    
    switch(tecla) {
        case 'C':
            document.getElementById("operation").value = ' ';
            break;
    
        case '=':
            var resultado = eval(document.getElementById("operation").value);
            document.getElementById("operation").value = resultado;
            break;
            
        default:
            document.getElementById("operation").value = document.getElementById("operation").value + tecla;
    }
    
}

