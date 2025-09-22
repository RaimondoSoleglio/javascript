/*  Write a JS program to get the extension of a filename */

// const filename = 'example.txt';

// const extArray = filename.split(".");
// const extension = extArray.pop();

// console.log(extension);


const getExt = (str) => {
    return str.split(".").at(-1)
}

console.log(getExt('example.txt'));