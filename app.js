function getElementByIndex(array, index) {
  const startTime = performance.now();
  const element = array[index];
  const endTime = performance.now();

  console.log(`Elemen di Indeks ${index}:`, element);
  console.log(`Waktu yang Dibutuhkan: ${(endTime - startTime).toFixed(5)} ms`);
}

const smallArray = [10, 20, 30, 40, 50];
const largeArray = Array.from({ length: 1000000 }, (_, i) => i + 1);

getElementByIndex(smallArray, 4);
getElementByIndex(largeArray, 100);