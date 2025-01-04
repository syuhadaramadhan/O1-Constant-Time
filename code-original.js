function getElementByIndex(array, index) {
  // Waktu mulai
  const startTime = performance.now();

  // Operasi O(1): Mengakses elemen berdasarkan indeks
  const element = array[index];

  // Waktu selesai
  const endTime = performance.now();

  // Menampilkan hasil dan waktu yang diperlukan
  console.log(`Elemen di Indeks ${index}:`, element);
  console.log(`Waktu yang Dibutuhkan: ${(endTime - startTime).toFixed(5)} ms`);
}

// Contoh penggunaan smallArray dan largeArray
const smallArray = [10, 20, 30, 40, 50];
const largeArray = Array.from({ length: 1000000 }, (_, i) => i + 1);

// Mengakses elemen dari smallArray
getElementByIndex(smallArray, 1);

// Mengakses elemen dari largeArray
getElementByIndex(largeArray, 1);


getElementByIndex(smallArray, 4);
getElementByIndex(largeArray, 100);