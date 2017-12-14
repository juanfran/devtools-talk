creamos un snippet de http://bgrins.github.io/devtools-snippets, allcolors
ctrl + shift + p / !

- talk - console.table
- talk - console.assert
- talk - console.count
- talk - style console
- talk - console.time

----------------- Miscelánea

- activar experiments

chrome://flags/
Developer Tools experiments 
customize & control / settings / experiments

- capturas

ctrl + shif + p (capture screenshot o node screenshot)
ctrl + shift + c (inspect element mode) y luego control para hacer la captura

- alt + click expande todos los nodos de elements

- búsqueda

elements / control + f = busqueda .toggle

- seleccionamos un elemento del dom y en console $0

- si pulsamos alt en un variable de css cambia los decimales

- color picker, en un element con color pinchamos en el color.

- transition, ease preview, pinchado el iconico. (animation.html)

- box-shadow editor, input new-todo (vanillajs)

- en console escribir funcion
    pulsar alt mientras seleccionas para seleccionar en columana
    multi cursor con ctrl

- talk - filtros-negativos ['uno', 'dos', 'tres', 'cuatro'].forEach((it) => console.log(it)) / -dos

- talk - monitor-events

monitorEvents(window, 'click'); // creo que util para recordar la forma de un object

-  talk - copy

copy({hola: 2})

- talk - queryObjects

queryObjects(HTMLElement);

function Foo() {}

var littlefoo1 = new Foo();
littlefoo1.name = 'foo1';
var littlefoo2 = new Foo();
littlefoo2.name = 'foo2';

queryObjects(Foo);


---------- Network
- filtros

`is:from-cache`
`is:running`
`larger-than:10k`

- https://tree.taiga.io/discover, analytics, click derecho block request
- img / en preview boton derecho, copy as data uri
- Si pulsamos shift vemos quien llama a quién.
- En la columna initiator podemos ver quien llamo a ese recurso.

---------- More tools

- search, puedes buscar en tooodo el proyecto
- animations (animation.html)
- accesibility inspector (experimental)
- layers (layers.html)
- rendering, flashing (painting-flashing.html)
  hacer zoom en main hasta encontrar un paint, en summary vemos que esta repitando todo el documento

   transform: translateZ(0); promociona a su propio layer

  vamos a painting-gpu y vemos como ahora main está vacio, 
  vemos también que painting flashing no hace nada

  fijarnos en la barra de fps 

- rendering, fps metter
- sensors
- coverage 
- quick source / si inspeccionas css te sale abajo el archivo con la linea
- remote devices, abrimos chrome en el movil en alguna url y le damos a inspect

---------- Performance

- slow cpu. Performance / Settings / CPU
- tiempo de decode de una imagen

record the page load / pestaña raster / buscar img

- medir rendimiento / User timing, ver código (time-performance.html)
- talk - performance-observer / observando el rendimiento (images.html)

`js
function perf_observer(list, observer) { 
   console.log(list);
} 
var observer2 = new PerformanceObserver(perf_observer); 
observer2.observe({entryTypes: ["measure", "resource"]});

setTimeout(() => {
    performance.mark('start');

    var total = 0;
    for (var i = 0; i < 10000000; i++) {
        total++;
    }

    performance.mark('end');
    performance.measure('Global', 'start', 'end');
}, 2000);

await fetch('https://jsonplaceholder.typicode.com')
`

- talk - performance-getentries, ver todo los descargado (images.html)

`performance.getEntriesByType('resource') // measure, paint...` 

---------- Debug

- break (vanillajs) 

en el ul subtree modification

> ver callstack
> ver variables locales
> ponemos un break point varias lineas antes y volvemos a borrar
  ahora vemos que podemos poner abajo un continue to here
> en el callstack botón derecho restart frame

- ponemos un break point, boton derecho edit break point, ponemos una coindicion de ejecución

- seleccionamos la x de borrar y vamos a la pestaña "event listener"
  selecionas el elemento, handler, show function definition

- talk - getevents

var listener = getEventListeners($0); // selecionamos el ul que es el que tienes los eventos
    debug(listener.click[0].listener);

- black box sirve por ejemplo si estas debuggeando y quieres saltarte el fichero del framework de turno pues solo tienes que añadirlo.

- http://cabbi.bo/ performance grabamos, vamos al source js/global.js y vemos los ms

---------- Node

- node --inspect-brk node.js // en el chorme que tengamos abierto aparece un icono

--inspect no se pararia

chrome://inspect

vamos al primer run vemos el tiempo, comentamos y continuamos

---------- Docs

https://developer.chrome.com/devtools
https://umaar.com/dev-tips/
https://www.youtube.com/channel/UCnUYZLuoy1rq1aVMwx4aTzw 