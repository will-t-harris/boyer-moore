import { boyerMooreSearch } from "./boyer-moore";

test("can find each word in a sentence separately", () => {
  const text = "Snoot is a good cat";

  const firstWord = boyerMooreSearch(text, "Snoot");
  const secondWord = boyerMooreSearch(text, "is");
  const thirdWord = boyerMooreSearch(text, "a");
  const fourthWord = boyerMooreSearch(text, "good");
  const fifthWord = boyerMooreSearch(text, "cat");

  expect(firstWord).toEqual(0);
  expect(secondWord).toEqual(6);
  expect(thirdWord).toEqual(9);
  expect(fourthWord).toEqual(11);
  expect(fifthWord).toEqual(16);
});

test("returns -1 if word is not found", () => {
  const text = "Snoot is a good cat";

  const result = boyerMooreSearch(text, "bad");

  expect(result).toEqual(-1);
});

test("returns -1 if search is empty", () => {
  const text = "Snoot is a good cat";

  const result = boyerMooreSearch(text, "");

  expect(result).toEqual(-1);
});
