1. filtros en network

`is:from-cache`
`is:running`
`larger-than:10k`

2. tiempo de decode de una imagen

performance / Raster, si la imagen es visible podemos ver cual es.

3. ver todo los descargado 

`performance.getEntriesByType('resource') // measure, paint...` 

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

5. slow cpu. Performance / Rueda / CPU

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

11. https://tree.taiga.io/discover, network, analytics, click derecho block request

12. node --inspect entry.js // chrome://inspect
--inspect-brk 119

13. time y timeEnd (con el anterior una funciona que se ejecuta n veces y hay que cambiar un paremetro para que vaya más rapida y lo hacemos live)

14. prettify, abajo a la izquierda

15. dom complejo, un css que afecta a muchos nodos, elements affected, box-shadow¿?¿¿, box-sizing??¿

16. busqueda más potente de lo que parece. En elements ctrl + f, buscar div

17. Network / img / en preview boton derecho, copy as data uri

18. en un archivo de network pulsar alt mientras seleccionas para seleccionar en columan, también multi cursor con ctrl

19. monitorEvents(window, 'click')

20. en elements seleccionas uno y luego $0

21. alt + click expande todos los nodos de elements

22. color picker, en un element con color pinchamos en el color

23. seleccionas un elemento del dom, en el panel derecho "event listener", selecionas el elemento, handler, show function definition

24. transition ease preview, pinchado el iconico

25. copy({hola: 2})

26. style console.log('%cHello world', 'font-size:40px;color:red;');

27. var listener = getEventListeners(node); debug(listeners.click[0].listener)

28. si pulsamos alt en un variable de css cambia los decimales

29. ponemos un break point, boton derecho edit break point, ponemos una coindicion de ejecución

30. 3 puntos, more tools,  search, puedes buscar en tooodo el proyecto

31. https://daneden.github.io/animate.css/ tools / animations

32. En network si pulsamos shift vemos quien llama a quien

33. localhost remote 80

34. console.table

35. en network en la columna initiator podemos ver quien llamo a ese recurso

36. ctrl + shif + p (capture screenshot o node screenshot)

37. en un js si tiene un for largo, si nos vamos a performance y medimos paramos y vamos al fichero vemos el tiempo 99.

38. chrome://flags/  Developer Tools experiments / 3 bolitas / settings / experiments / accesibility inspector

39. more tools / quick source / si inspeccionas css te sale abajo el archivo

40. more tools / sensors

41. si estamos editando html en elements, shift + tab autoindenta

42. box-shadow editor

43. coverage 

44. en source, ponemos poner un trozo de código en black box para que no se ejecute

45. snippets http://bgrins.github.io/devtools-snippets con ctr+shift + p  y ! puedes ver los snippets

46. fps metter en rendering

47. 

??
115, 117