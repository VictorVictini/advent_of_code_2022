import {input} from './input.js';
let lexColCol = input.split("\n\n");
let lexColArr = [];
lexColCol.forEach(elf => {
    let lexCol = elf.split("\n");
    let lexlexCol = 0;
    lexCol.forEach(col => {
        lexlexCol += parseInt(col);
    });
    lexColArr.push(lexlexCol);
});

let [x, y, z] = lexColArr.sort((a, b) => b - a);
console.log(x + y + z);