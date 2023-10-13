import Sorting from "./Sorting";

export const InsertionSort = async (arr, setArr) => {
  const sortedArr = [...arr];
  for (let i = 1; i < sortedArr.length; i++) {
    const currentElement = sortedArr[i][0];
    let j = i - 1;
    await Display_Onscreen(sortedArr, setArr, i, 1, "yellow");
    while (j >= 0 && sortedArr[j][0] > currentElement) {
      await Display_Onscreen(sortedArr, setArr, j, 1, "yellow");
      sortedArr[j + 1][0] = sortedArr[j][0];
      j--;
      await Display_Onscreen(sortedArr, setArr, j+2, 1, "red");
    }
    sortedArr[j + 1][0] = currentElement;
    await Display_Onscreen(sortedArr, setArr, j + 1, 1, "red");
    for (let k = 0; k < i; k++) {
      await Display_Onscreen(sortedArr, setArr, k, 1, "green");
    }
    await Display_Onscreen(sortedArr, setArr, i, 1, "green");
  }
  sortedArr[sortedArr.length - 1][1] = "green";
  setArr((prev) => [...sortedArr]);
};

export const BubbleSort = async (arr,setArr) =>{
    const sortedArr = [...arr];
    for(let i = 0;i<sortedArr.length;i++){
        for(let j = 0;j<sortedArr.length - i - 1;j++){
            await Display_Onscreen(sortedArr,setArr,j,1,'yellow');
            await Display_Onscreen(sortedArr,setArr,j+1,1,'yellow');
            if(sortedArr[j] > sortedArr[j+1]){
                [sortedArr[j],sortedArr[j+1]] = [sortedArr[j+1],sortedArr[j]];
            }
            await Display_Onscreen(sortedArr,setArr,j,1,'red');
        }
        await Display_Onscreen(sortedArr,setArr,arr.length - i-1,1,'green');
        for(let j = 0;j<sortedArr.length - i - 1;j++){
            await Display_Onscreen(sortedArr,setArr,j,1,'blue');
        }
        await Display_Onscreen(sortedArr,setArr,0,1,null);
    }
    setArr((prev) => [...sortedArr]);
}

const Display_Onscreen = async (sortedArr, setArr, i, j, color) => {
  if (color !== null) sortedArr[i][1] = color;
  setArr((prev) => [...sortedArr]);
  await new Promise((resolve) => setTimeout(resolve, 1000));
};
