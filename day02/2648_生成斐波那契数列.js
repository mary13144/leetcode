/**
 * @return {Generator<number>}
 * yield 后面表达式一定要加分号
 */
var fibGenerator = function*() {
    let pre_one = 0;
    let pre_two = 1;
    while (true){
        yield pre_one;
        [pre_one,pre_two] = [pre_two,pre_one+pre_two];
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
