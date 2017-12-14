function slow() {
    var count = 0;
    while(count < 100) {
        count++;
    }
    while(count > 0) {
        count--;
    }    
}

function run() {
    console.time('for');

    var total = 0;
    for (var i = 0; i < 9000000; i++) {
        if (i % 2) {
            total++;
            slow();
        } else {
            total--;
        }
    }

    console.timeEnd('for');
    console.log('total', total);
}


run();
run();
run();
run();
run();


