1. filtros en network

`is:from-cache`
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

10. break on, botón derecho nodo / call stack

11. https://tree.taiga.io/discover, network, analytics, click derecho block request
