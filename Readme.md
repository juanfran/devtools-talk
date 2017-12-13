creamos un snippet de http://bgrins.github.io/devtools-snippets, allcolors
ctrl + shift + p / !

- talk - console.table
- talk - console.assert
- talk - console.count
- talk - style console
- talk - console.time

----------------- miscelanea

- activar experiments

chrome://flags/
Developer Tools experiments 
customize & control / settings / experiments

- capturas

ctrl + shif + p (capture screenshot o node screenshot)
ctrl + shift + c (inspect element mode) y luego control para hacer la captura

-  alt + click expande todos los nodos de elements

- búsqueda

elements / control + f = busqueda .toggle

- seleccionamos un elemento del dom y en console $0

- si pulsamos alt en un variable de css cambia los decimales

- color picker, en un element con color pinchamos en el color.

- transition, ease preview, pinchado el iconico. (animation.html)

- en console escribir funcion
    pulsar alt mientras seleccionas para seleccionar en columana
    multi cursor con ctrl

- talk - filtros-negativos ['uno', 'dos', 'tres', 'cuatro'].forEach((it) => console.log(it)) / -dos

- talk - monitor-events

monitorEvents(window, 'click'); // creo que util para recordar la forma de un object

-  talk - copy

copy({hola: 2})


- queryObjects

queryObjects(HTMLElement);

function Foo() {}

var littlefoo1 = new Foo();
littlefoo1.name = 'foo1';
var littlefoo2 = new Foo();
littlefoo2.name = 'foo2';

queryObjects(Foo);


---------- network
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



---------- Performance

5. slow cpu. Performance / Rueda / CPU

2. tiempo de decode de una imagen

performance / Raster, si la imagen es visible podemos ver cual es.

4. medir rendimiento

`js
performance.mark('start');

var total = 0;
for (var i = 0; i < 10000000; i++) {
    total++;
}

performance.mark('end');


performance.measure('Global', 'start', 'end');
`

3. ver todo los descargado 

`performance.getEntriesByType('resource') // measure, paint...` 

6. observando el rendimiento

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
`





7. layers, customize devtools / more tools / layers, layers.html

8. painting flashing, customize devtools / more tools / painting flashing, painting-flashing.html

9. invalidar layout / layout-css-recalculate.html

10. break on, botón derecho nodo / call stack (cada función que sucedido antes de la función en la que estas) -> delete item en todo list
right click, continue to here
can use the console when is debugging, maybe change something?
call stack, boton derecho - restart this frame, esto hace que vuelva al principio de la función



12. node --inspect entry.js // chrome://inspect
--inspect-brk 119

13. time y timeEnd (con el anterior una funciona que se ejecuta n veces y hay que cambiar un paremetro para que vaya más rapida y lo hacemos live)



15. dom complejo, un css que afecta a muchos nodos, elements affected, box-shadow¿?¿¿, box-sizing??¿


23. seleccionas un elemento del dom, en el panel derecho "event listener", selecionas el elemento, handler, show function definition



27. var listener = getEventListeners(node); debug(listeners.click[0].listener)


29. ponemos un break point, boton derecho edit break point, ponemos una coindicion de ejecución

33. localhost remote 80



37. en un js si tiene un for largo, si nos vamos a performance y medimos paramos y vamos al fichero vemos el tiempo 99.

http://cabbi.bo/ permance grabamos, vamos al source js/global.js y vemos los ms

39. more tools / quick source / si inspeccionas css te sale abajo el archivo

40. more tools / sensors

41. si estamos editando html en elements, shift + tab autoindenta

42. box-shadow editor

43. coverage 

44. en source, ponemos poner un trozo de código en black box para que no se ejecute

46. fps metter en rendering




??
115, 117