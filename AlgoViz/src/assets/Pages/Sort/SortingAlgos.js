const initial = '#0085FF;'
const done = '#1BDBAD'
export const InsertionSort = async (arr, setArr, delay) => {
  const sortedArr = [...arr];
  for (let i = 1; i < arr.length; i++) {
    const currentElement = sortedArr[i][0];
    let j = i - 1;
    await Display_Onscreen(sortedArr, setArr, i, 1, "#FFA800", delay);
    while (j >= 0 && sortedArr[j][0] > currentElement) {
      await Display_Onscreen(sortedArr, setArr, j, 1, "#FFA800", delay);
      sortedArr[j + 1][0] = sortedArr[j][0];
      j--;
      await Display_Onscreen(sortedArr, setArr, j + 2, 1, "#F22C2C", delay);
    }
    sortedArr[j + 1][0] = currentElement;
    await Display_Onscreen(sortedArr, setArr, j + 1, 1, "#F22C2C", delay);
    for (let k = 0; k < i; k++) {
      await Display_Onscreen(sortedArr, setArr, k, 1, "#1BDBAD", delay);
    }
    await Display_Onscreen(sortedArr, setArr, i, 1, "#1BDBAD", delay);
  }
  sortedArr[arr.length - 1][1] = "#1BDBAD";
  setArr((prev) => [...sortedArr]);
};

export const BubbleSort = async (arr, setArr, delay) => {
  const sortedArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        await Display_Onscreen(sortedArr, setArr, j, 1, "#FFA800", delay);
        await Display_Onscreen(sortedArr, setArr, j + 1, 1, "#FFA800", delay);
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
        await Display_Onscreen(sortedArr, setArr, j, 1, "#F22C2C", delay);
      }
    }
    await Display_Onscreen(sortedArr,setArr,arr.length - i - 1,1,"#1BDBAD",delay);
    for (let j = 0; j < arr.length - i - 1; j++) {
      await Display_Onscreen(sortedArr, setArr, j, 1, "#0085FF;", delay);
    }
    await Display_Onscreen(sortedArr, setArr, 0, 1, null, delay);
  }
  setArr((prev) => [...sortedArr]);
};

const Display_Onscreen = async (sortedArr, setArr, i, j, color, delay) => {
  if (color !== null) sortedArr[i][1] = color;
  setArr((prev) => [...sortedArr]);
  await new Promise((resolve) => setTimeout(resolve, delay));
};
