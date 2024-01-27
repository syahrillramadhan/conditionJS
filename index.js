// Home work week 3 - Learning javascript
// Soal 1
// - Tentukan letiabel apa saja yang dibutuhkan
function determineWater(suhu) {
    if (suhu >= -100 && suhu <= 0) {
        return "Air dalam bentuk beku";
    } else if (suhu >= 1 && suhu <= 100) {
        return "Air dalam bentuk cair";
    } else if (suhu >= 101 && suhu <= 500) {
        return "Air dalam bentuk uap";
    } else {
        return "Suhu diluar rentang yang ditentukan, keadaan tidak terdefinisi";
    }
}

// Contoh pemanggilan fungsi dengan suhu tertentu
let suhuDetermine = 25;
let waterCondition = determineWater(suhuDetermine);
console.log("Suhu:", suhuDetermine, "=>", waterCondition, "//ini menggunakan if statement");


// Use ternary operator soal 1
function tentukanKeadaanAir(suhu) {
    return (suhu >= -100 && suhu <= 0) ?
        "Air dalam bentuk beku" :
        (suhu >= 1 && suhu <= 100)  ?
        "Air dalam bentuk cair" :
        (suhu >= 101 && suhu <= 500) ?
        "Air dalam bentuk uap":
        "Suhu diluar rentang yang ditentukan, keadaan tidak terdefinisi";
}

let tentukanSuhu = 25;
let kondisiAir = tentukanKeadaanAir(tentukanSuhu);
console.log("Suhu:", tentukanSuhu, "=>", kondisiAir, "//ini menggunakan tenary operator");


//Soal 2
function tentukanJenisBBM(platColor, typeVahichel, capacityCC) {
    if (platColor === 'kuning' || typeVahichel === 'motor') {
        return "BBM subsidi";
    } else if (typeVahichel === 'mobil' && capacityCC < 1500) {
        return "PERTAMAX";
    } else if (typeVahichel === 'mobil' && capacityCC >= 1500) {
        return "PERTAMAX Turbo";
    } else {
        return "Jenis kendaraan tidak dikenali";
    }
    
}

// Contoh pemanggilan fungsi dengan kondisi tertentu
determinePlatcolors = 'kuning';
determineTypeahichels = 'mobil';
determineCapacityCC = 1200;
let typeBBM = tentukanJenisBBM(determinePlatcolors, determineTypeahichels, determineCapacityCC);
console.log("Plat warna:", determinePlatcolors,"Jenis Kendaraan:", determineTypeahichels,"CC:", determineCapacityCC, "=>", typeBBM, "//ini menggunakan if statement" );


// soal 2 tenary operator
function tentukanJenisBBM(platWarna, jenisKendaraan, kapasitasCC) {
    return (platWarna === 'kuning' || jenisKendaraan === 'motor') ?
        "BBM subsidi" :
        (jenisKendaraan === 'mobil' && kapasitasCC < 1500) ?
        "PERTAMAX" :
        "PERTAMAX Turbo";
}

// Contoh pemanggilan fungsi dengan kondisi tertentu
tentukanplatWarna = 'kuning';
tentukanJenisKendaraan = 'motor';
tentukanKapasitasCC = 1200;

let jenisBBM = tentukanJenisBBM(tentukanplatWarna, tentukanJenisKendaraan, tentukanKapasitasCC);
console.log("Plat Warna:", tentukanplatWarna, "Jenis Kendaraan:", tentukanJenisKendaraan, "CC:", tentukanKapasitasCC, "=>", jenisBBM, " //ini menggunakan tenary operator");



