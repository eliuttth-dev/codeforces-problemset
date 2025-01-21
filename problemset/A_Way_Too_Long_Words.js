process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", () => {
    inputString = inputString.trim().split("\n");
    main();
});

function readline() {
    return inputString[currentLine++];
}

function main() {
    const n = parseInt(readline()); 
    const ans = [];

    for(let i = 0; i < n; i++){
      const word = readline().trim();

      if(word.length <= 10) {
        ans.push(word);
      } else {
        const abbreviated = `${word[0]}${word.length - 2}${word[word.length - 1]}`
        ans.push(abbreviated);
      }

    }

    console.log(ans.join("\n"));
}

