// Home work week 3 - Learning javascript
// Soal 1
// - Tentukan letiabel apa saja yang dibutuhkan
const determineWater = (temperature) => {
  if (temperature >= -100 && temperature <= 0) {
    return "Air dalam bentuk beku";
  } else if (temperature >= 1 && temperature <= 100) {
    return "Air dalam bentuk cair";
  } else if (temperature >= 101 && temperature <= 500) {
    return "Air dalam bentuk uap";
  } else {
    return "Suhu diluar rentang yang ditentukan, keadaan tidak terdefinisi";
  }
};
// Contoh pemanggilan fungsi dengan suhu tertentu
let suhuDetermine = 550;
let waterCondition = determineWater(suhuDetermine);
console.log(`Suhu: ${suhuDetermine} air dalam bentuk ${waterCondition}`);

//Soal 2 If statement
const determineTypeBBM = (platColor, typeVahichel, capacityCC) => {
  if (platColor === "kuning" || typeVahichel === "motor") {
    return "BBM subsidi";
  } else if (typeVahichel === "mobil" && capacityCC < 1500) {
    return "PERTAMAX";
  } else {
    return "Pertamax Turbo";
  }
};

// Contoh pemanggilan fungsi dengan kondisi tertentu
determinePlatcolors = "hitam";
determineTypeahichels = "mobil";
determineCapacityCC = 2000;
let typeBBM = determineTypeBBM(
  determinePlatcolors,
  determineTypeahichels,
  determineCapacityCC
);
console.log(
  `Plat warna: ${determinePlatcolors}, Jenis Kendaraan: ${determineTypeahichels}, CC: ${determineCapacityCC}, tipe BBM ${typeBBM}`
);
