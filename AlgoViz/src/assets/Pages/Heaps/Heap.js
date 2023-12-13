const initial = "#0085FF";
const done = "#1BDBAD";
const select = "#FFA800";
const swapped = "#F22C2C";

export const MinHeapInsert = async (element, heapdata, setHeapdata) => {
  const tempheap = [...heapdata, [parseInt(element), initial]];
  let i = tempheap.length - 1;
  await Display_Onscreen(tempheap, setHeapdata, i, select, 1000);
  while (i > 1) {
    let parent = Math.floor(i / 2);
    await Display_Onscreen(tempheap, setHeapdata, parent, select, 1000);
    if (tempheap[parent][0] > tempheap[i][0]) {
      await Display_Onscreen(tempheap, setHeapdata, i, swapped, 500);
      await Display_Onscreen(tempheap, setHeapdata, parent, swapped, 1000);
      [tempheap[parent][0], tempheap[i][0]] = [
        tempheap[i][0],
        tempheap[parent][0],
      ];
      await Display_Onscreen(tempheap, setHeapdata, i, done, 1000);
      await Display_Onscreen(tempheap, setHeapdata, parent, select, 1000);
    } else {
      await Display_Onscreen(tempheap, setHeapdata, i, done, 500);
      await Display_Onscreen(tempheap, setHeapdata, parent, done, 1000);
      setHeapdata((prev) => [...tempheap]);
      break;
    }
    i = parent;
  }
  await Display_Onscreen(tempheap, setHeapdata, i, done, 1000);
};
export const MaxHeapInsert = async (element, heapdata, setHeapdata) => {
  const tempheap = [...heapdata, [parseInt(element), initial]];
  let i = tempheap.length - 1;
  await Display_Onscreen(tempheap, setHeapdata, i, select, 1000);
  while (i > 1) {
    let parent = Math.floor(i / 2);
    await Display_Onscreen(tempheap, setHeapdata, parent, select, 1000);
    if (tempheap[parent][0] < tempheap[i][0]) {
      await Display_Onscreen(tempheap, setHeapdata, i, swapped, 500);
      await Display_Onscreen(tempheap, setHeapdata, parent, swapped, 1000);
      [tempheap[parent][0], tempheap[i][0]] = [
        tempheap[i][0],
        tempheap[parent][0],
      ];
      await Display_Onscreen(tempheap, setHeapdata, i, done, 1000);
      await Display_Onscreen(tempheap, setHeapdata, parent, select, 1000);
    } else {
      await Display_Onscreen(tempheap, setHeapdata, i, done, 500);
      await Display_Onscreen(tempheap, setHeapdata, parent, done, 1000);
      setHeapdata((prev) => [...tempheap]);
      break;
    }
    i = parent;
  }
  await Display_Onscreen(tempheap, setHeapdata, i, done, 1000);
};

const Display_Onscreen = async (tempheap, setHeapdata, i, color, delay) => {
  if (color !== null) tempheap[i][1] = color;
  setHeapdata((prev) => [...tempheap]);
  await new Promise((resolve) => setTimeout(resolve, delay));
};
