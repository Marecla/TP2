// Marce, te dejo algunas observaciones sobre tu TP
// En general esta muy bien. Se nota mucho el esfuerzo y algunas soluciones son
// muy creativas y prolijas. 
// Para trabajar a partir de ahora, te recomiendo empezar a mejorar los nombres de tus variables
// para que sean descriptivos, e ir acostumbrandote a estructuras mas breves que te ahorren codigo
// (por ejemplo, en lugar de escribir esto:
//  // ventas = ventas + 1
//  comenzar a practicar esto:
//  ventas++)

var local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  
    ventas: [
      { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
      { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
      { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],
  
    precios: [
      { componente: "Monitor GPRS 3000", precio: 200 },
      { componente: "Motherboard ASUS 1500", precio: 120 },
      { componente: "Monitor ASC 543", precio: 250 },
      { componente: "Motherboard ASUS 1200", precio: 100 },
      { componente: "Motherboard MZI", precio: 30 },
      { componente: "HDD Toyiva", precio: 90 },
      { componente: "HDD Wezter Dishital", precio: 75 },
      { componente: "RAM Quinston", precio: 110 },
      { componente: "RAM Quinston Fury", precio: 230 }
    ]
  };

  //// 1.Se pide desarrollar las siguientes funciones:

  // precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes,
  // que es la suma de los precios de cada componente incluido.

  function precioMaquina(parametros) { // esto es un detalle, pero preferimos que los nombres de los parametros, 
                                       // al igual que los de las variables, sean descriptivos: es decir, que 
                                       // le indiquen a otra persona que esta leyendo, que son los parametros. 
                                       // En este caso, por ejemplo, "componentes". 

    var precioTotal = 0
  
    for (var i = 0; i < parametros.length; i++) {
  
      for (var j = 0; j < local.precios.length; j++) {
        
  
        if (local.precios[j].componente === parametros[i]) {
          precioTotal = precioTotal + local.precios[j].precio
  
        }
      }
    }
    return precioTotal
  }

  console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])) 
  

  // cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido,
  // o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.

  function cantidadVentasComponente(componente) {
    var suma = 0;
    for (var i = 0; i < local.ventas.length; i++) {
      for (var j = 0; j < local.ventas[i].componentes.length; j++) {
        if (componente == local.ventas[i].componentes[j]) {
          
          suma = suma + 1;
            // o mas brevemente, 
            // suma++
            // o
            // suma += 1
        }
      }
    }
    return suma;
  }
  
  console.log (cantidadVentasComponente("Monitor ASC 543")); 


  // vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata 
  //en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. 
  //El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

  function vendedoraDelMes(mes, anio) {
    var arrayVendedoras = [];
    for (var i = 0; i < local.vendedoras.length; i ++) {
        var vendorasObj = {
            nombre: local.vendedoras[i],
            ventas: 0,
        }
        for (var j = 0; j < local.ventas.length; j++ ) {
            if (local.ventas[j].fecha.getMonth()+1 == mes && local.ventas[i].fecha.getFullYear() == anio){
                          if (local.vendedoras[i] === local.ventas[j].nombreVendedora) {
                    if (vendorasObj.nombre === local.ventas[j].nombreVendedora){
                        vendorasObj.ventas = vendorasObj.ventas + precioMaquina(local.ventas[j].componentes);
                    }
                }
            }
        }
        arrayVendedoras.push(vendorasObj)
    }
   
    var mejorVendedora;
    var ventaMax = 0;
    var posicion = 0
    
   
    for (var k = 0; k < arrayVendedoras.length; k++) {
        if (ventaMax < arrayVendedoras[k].ventas) {
            ventaMax = arrayVendedoras[k].ventas;
            posicion= [k]
        }
    }
   return arrayVendedoras[posicion].nombre
  }
   console.log(vendedoraDelMes(1, 2019)) 
  
// bien! una manera mas breve aun (pero mas abstracta) es esta:
// function vendedoraDelMes(mes, anio) {
//   var ventasVendedoras = {};

//   for (var i = 0; i < local.ventas.length; i++) {
//     if (local.ventas[i].fecha.getMonth() + 1 === mes && local.ventas[i].fecha.getFullYear() === anio) {
//       var vendedora = local.ventas[i].nombreVendedora;
//       if (!ventasVendedoras[vendedora]) {
//         ventasVendedoras[vendedora] = 0;
//       }

//       ventasVendedoras[vendedora] += precioMaquina( local.ventas[i].componentes );
//     }
//   }

//   var max = vendedoras[0];

//   for (var i = 0; i < vendedoras.length; i++) {
//     if (max && ventasVendedoras[vendedoras[i]] > ventasVendedoras[max]) {
//       max = vendedoras[i];
//     }
//   }

//   return max;
// }

// ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

function ventasMes(mes, anio) {

    var sumaVentas = 0;
  
    for (var i = 0; i < local.ventas.length; i++){
      if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
        sumaVentas = sumaVentas +  precioMaquina(local.ventas[i].componentes)      
      // o mas bremente:
      // sumaventas += precioMaquina(local.ventas[i].componentes
      }
    }
      return (sumaVentas)
  }

  console.log( ventasMes(1, 2019) );  
  
  


  // ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.

  function ventasVendedora(nombre){
  
    var ventasGrace = 0;
      // esta funcion sirve para cualquier vendedora, 
      // por lo que seria preferible otro nombre para la variable
    
    for (var i = 0; i < local.ventas.length; i++){
      if (local.ventas[i].nombreVendedora == nombre) {
        ventasGrace = ventasGrace + precioMaquina(local.ventas[i].componentes)
      }
    }
    return (ventasGrace)
  }
  
console.log( ventasVendedora("Grace") ); 




// componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. 
//El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

function componenteMasVendido(){

    var cantidadComponentes = []
    valorMaximo = 0
    posicionDelValorMaximo = 0
  
    for (var i = 0; i < local.precios.length; i++){
      cantidadComponentes.push(cantidadVentasComponente(local.precios[i].componente))
  
    for(var j =0; j<cantidadComponentes.length;i++){
      if(cantidadComponentes[j]>valorMaximo){
        valorMaximo = cantidadComponentes[j]
       posicionDelValorMaximo = [j] 
      } 
      return local.precios[i].componente
   }
   }
  }
  
console.log(componenteMasVendido()); 


// huboVentas(mes, anio): que indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

function huboVentas(mes, anio){

    var sumaVentas = 0;
  
    for (var i = 0; i < local.ventas.length; i++){
  
      if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
        sumaVentas = sumaVentas + 1
      }
      }
      if (sumaVentas){
        return true
      }else {
        return false
      }
    }
  
// una opcion mas breve seria asi:

// function huboVentas(mes, anio) {
//  sumaVentas = false
//   for (let i = 0; i < local.ventas.length; i++) {
//     if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
//       sumaVentas = true
//     }
//   }
//   return sumaVentas
// }

  console.log( huboVentas(3, 2019) );  




///// 2. Como se abrió una nueva sucursal en Caballito, ahora los datos de las ventas también tienen el nombre de la sucursal en la cual se realizó. 
//Por ejemplo: { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: 'Centro' }. 
//Por este cambio, se pide:
  
//  En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro (ya que es la sucursal original).

for (var i = 0; i < local.ventas.length; i++){
    local.ventas[i].sucursal = "Centro"
  } 

// Agregar al objeto principal la propiedad sucursales: ['Centro', 'Caballito']

local.sucursales = ["Centro", "Caballito"];


// Cargar la siguiente información en el array ventas, creando sus respectivos objetos siguiendo el patrón:
// fecha, nombreVendedora, componentes, sucursal.

// 12/02/2019, Hedy, [Monitor GPRS 3000, HDD Toyiva], Centro 
// 24/02/2019, Sheryl, [Motherboard ASUS 1500, HDD Wezter Dishital], Caballito 
// 01/02/2019, Ada, [Motherboard MZI, RAM Quinston Fury], Centro 
// 11/02/2019, Grace, [Monitor ASC 543, RAM Quinston], Caballito
// 15/02/2019, Ada, [Motherboard ASUS 1200, RAM Quinston Fury], Centro
// 12/02/2019, Hedy, [Motherboard ASUS 1500, HDD Toyiva], Caballito
// 21/02/2019, Grace, [Motherboard MZI, RAM Quinston], Centro 
// 08/02/2019, Sheryl, [Monitor ASC 543, HDD Wezter Dishital], Centro
// 16/02/2019, Sheryl, [Monitor GPRS 3000, RAM Quinston Fury], Centro
// 27/02/2019, Hedy, [Motherboard ASUS 1200, HDD Toyiva], Caballito
// 22/02/2019, Grace, [Monitor ASC 543, HDD Wezter Dishital], Centro
// 05/02/2019, Ada, [Motherboard ASUS 1500, RAM Quinston], Centro 
// 01/02/2019, Grace, [Motherboard MZI, HDD Wezter Dishital], Centro 
// 07/02/2019, Sheryl, [Monitor GPRS 3000, RAM Quinston], Caballito
// 14/02/2019, Ada, [Motherboard ASUS 1200, HDD Toyiva], Centro

local.ventas.push( { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro" })
local.ventas.push( { fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes:["Motherboard ASUS 1500", "HDD Wezter Dishital"] , sucursal: "Caballito" })
local.ventas.push( { fecha: new Date(2019, 1, 01), nombreVendedora: "Ada", componentes:["Motherboard MZI", "RAM Quinston Fury"] , sucursal: "Centro" })
local.ventas.push( { fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes:["Monitor ASC 543", "RAM Quinston"] , sucursal: "Caballito" })
local.ventas.push( { fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes:["Motherboard ASUS 1200", "RAM Quinston Fury"] , sucursal: "Centro" })
local.ventas.push( { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito" })
local.ventas.push( { fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes:["Motherboard MZI", "RAM Quinston"] , sucursal: "Centro" })
local.ventas.push( { fecha: new Date(2019, 1, 08), nombreVendedora: "Sheryl", componentes:["Monitor ASC 543", "HDD Wezter Dishital"] , sucursal: "Centro" })
local.ventas.push( { fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes:["Monitor GPRS 3000", "RAM Quinston Fury"] , sucursal: "Centro" })
local.ventas.push( { fecha: new Date(2019, 1, 27), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito" })
local.ventas.push( { fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes:["Monitor ASC 543", "HDD Wezter Dishital"] , sucursal: "Centro" })
local.ventas.push( { fecha: new Date(2019, 1, 05), nombreVendedora: "Ada", componentes:["Motherboard ASUS 1500", "RAM Quinston"] , sucursal: "Centro" })
local.ventas.push( { fecha: new Date(2019, 1, 01), nombreVendedora: "Grace", componentes:["Motherboard MZI", "HDD Wezter Dishital"] , sucursal: "Centro" })
local.ventas.push( { fecha: new Date(2019, 1, 07), nombreVendedora: "Sheryl", componentes:["Monitor GPRS 3000", "RAM Quinston"] , sucursal: "Caballito" })
local.ventas.push( { fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes:["Motherboard ASUS 1200", "HDD Toyiva"] , sucursal: "Centro" })


//Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

function ventasSucursal(sucursal) {

    var ventas = 0;
   
    for (var i = 0; i < local.ventas.length; i++){
      if (local.ventas[i].sucursal == sucursal) {
        ventas = ventas + precioMaquina(local.ventas[i].componentes)
      }
    }
    return ventas
  }
console.log( ventasSucursal("Centro") ); 

// faltaria responder esta pregunta:
// Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, 
//     ya que es la misma funcionalidad pero trabajando con una propiedad distinta. 
//     Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?


// Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal 
//que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica 
//la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

function sucursalDelMes(mes, anio){
  
  var arraySucursales =[]

  for (var i = 0; i < local.sucursales.length; i ++) {
    var sucursalesObj = {
      nombre: local.sucursales[i],
      ventas: 0,
    }
    for (var j = 0; j < local.ventas.length; j++ ) {
      if (local.ventas[j].fecha.getMonth()+1 == mes && local.ventas[i].fecha.getFullYear() == anio){
        if (local.sucursales[i] === local.ventas[j].sucursal) {
          if (sucursalesObj.nombre === local.ventas[j].sucursal){
            sucursalesObj.ventas = sucursalesObj.ventas + precioMaquina(local.ventas[j].componentes);
          }
      }
    }
  }
  arraySucursales.push(sucursalesObj)
}
 var mejorSucursal;
 var ventaMax = 0;
 var posicion = 0

for (var k = 0; k < arraySucursales.length; k++) {
        if (ventaMax < arraySucursales[k].ventas) {
            ventaMax = arraySucursales[k].ventas;
            posicion= [k]
        }
    }
   return arraySucursales[posicion].nombre
  }
console.log( sucursalDelMes(1, 2019) );  
 // bien!


//// 3. Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre las ventas por sucursal
// y por mes. Para esto, necesitamos crear las siguientes funciones:

// renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año

function renderPorMes(){

   var meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
   var arrayMes = []
    for ( var i =0; i <meses.length;i++){
      arrayMes.push( ventasMes(meses[i],2019))
  }
 return arrayMes
}

console.log( renderPorMes() );


// bien!

// renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal

function renderPorSucursal(){

  var arraySucursales= []

  for ( var i = 0; i < local.sucursales.length; i++){

    var sucursalesObj = {
      nombre: local.sucursales[i],
      ventas: 0,
  }
    for (var j = 0; j < local.ventas.length; j++ ) {
      if (local.sucursales[i] === local.ventas[j].sucursal){
        if (sucursalesObj.nombre === local.ventas[j].sucursal){
          sucursalesObj.ventas = sucursalesObj.ventas + precioMaquina(local.ventas[j].componentes)
      }
    }

  }
  arraySucursales.push(sucursalesObj)
}
  var ventaSucursal = 0

      for (var k = 0; k < arraySucursales.length; k++){
          ventaSucursal = arraySucursales[k].ventas  
}
return arraySucursales
}

console.log( renderPorSucursal() );




//render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó

function render(){
}




console.log( render() );
