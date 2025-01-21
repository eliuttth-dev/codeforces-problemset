process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
            return string.trim();
        });

    main(); // Call main function after reading input
});

function readline() {
    return inputString[currentLine++];
}

function main() {
  const w = parseInt(readline()); // Read input and parse it as an integer
  console.log(w % 2 === 0 && w > 2 ? "YES" : "NO");
}


