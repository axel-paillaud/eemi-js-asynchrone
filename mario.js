let marioPyramid = "";

for (let i = 1; i < 10; i++) {
    marioPyramid += "#\n";

    for (let j = 0; j < i; j++)

        marioPyramid += "#";
}

marioPyramid += "#";

console.log(marioPyramid);