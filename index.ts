import readLine from "readline";
import chalk from "chalk";
import { boyerMooreSearch } from "./src/boyer-moore.js";

async function main() {
  const text = await askQuestion(chalk.cyan("Enter the text to search: \n"));
  const pattern = await askQuestion(chalk.red("Enter the search term: \n"));

  const result = boyerMooreSearch(text, pattern);

  console.log(chalk.greenBright("RESULT: ", result));
  process.exit(0);
}

main();

function askQuestion(query: string): Promise<string> {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve =>
    rl.question(query, answer => {
      rl.close();
      resolve(answer);
    })
  );
}
