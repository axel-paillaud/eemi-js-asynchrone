const HEIGHT = 8;

for (let i = 0; i < HEIGHT; i++) {
    let line = "";

    for (let j = 0; j < i; j++) {
        line += "#";
    }

    console.log(line);
}

