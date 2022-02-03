// js is loosely typed languange

/**
 * *bisa banyak
 * *baris
 */

// ! identifier
/**
 * * Aturan penamaan fungsi, variabel, kelas, constructor
 * * karakter pertamanya boleh a-z, A-Z, simbol underscore, ataupun dollar
 * * tidak boleh diawali oleh angka
 * * tidak boleh menggunakan bahasa yang sudah ada default di js
 */

// ! statement
/**
 * * statement = suatu pernyataan js yang paling dasar dan memiliki tugas tertentu
 */
//let name = 'Hello World'
//console.log(name)

// ! expression
/**
 * *expression merupakan expresi js yang berfungsi menghasilkan nilai tertentu
 */


//let first = 1
//let second = 2
//let result = first + second


//if(result > 1) {
//    var j = 10
//    console.log(`maka hasilnya ${result} cm`);
//}

// ! scope
/**
 * * cakupan kode agar bisa mengakses atau membatasi 
 */

// ! global scope
/**
 * *merupakan cakupan di seluruh file
 */

//!  perbedaan const, var, let
/**
 *  * keyword   global scope     block scope     local scope
 * * 1. const         yes            yes            yes
 * * 2. var           yes            no             yes
 * * 3. let           yes            yes            yes
 */

//* var : tidak punya block scope
//* const, let : punya block scope
//* const : constant, tidak bisa diubah
//* let : bisa diubah

//var a = 'Hallo rekan-rekan'
//function first() {
//    console.log(a)
//    if(true) {
//        const b = 'hello john'
//        b = 'hello fulan'
//        console.log(b)
//    }
//}

//function second() {
//    a = 'nilai sudah diubah'
//    first()
//}

//first()
//second()

//const a = 'mobil'
//function kendaraan() {
//    console.log(a)
//}
//kendaraan()

// * tugas bikin 1 global scope, 1 block scope , 1 local scope
//let a = 10 // saya adalah global scope karena ditaruh diluar function atau block apapun
//function f() {
//    const b = 20 // saya adalah local scope karena saya tidak bisa dibaca diluar function f()
//    if(true) {
//        let c = 69 // saya adalah block scope karena saya tidak bisa dibaca di function f()
//    }
//    c = 420 // akan menghasilkan error
//}

// * Closure
/**
 * * Closure adalah cara mengakses variable dari parent scope didalam child scope
 */

//function hello(sapa) {
//    var text = `Assalamu'alaikum ` + sapa
//    return function () {
//        console.log(text)
//    }
//}
//hello('Utis')()

//function Counter() {
//    var count = 0
//    return function() {
//        return ++count
//    }
//}

//let count = Counter()
//console.log(count())
//console.log(count())
//console.log(count())

// challange:   
//console.log(`nama : Dias Utsman`)
//console.log(`kelas : x rpl a`)
//function bio(nama, kelas) {
//    return function() {
//        console.log(`nama : ${nama}\nkelas : ${kelas}`)
//    }
//}
//var printBio = bio('Dias Utsman', 'x rpl a')
//printBio()



//* Tipe data pada js
/**
 * * Tipe data adalah karakteristik dari nilai sebuah data, di js terdapat
 * * ada 7
 * * null, undefined, boolean, number, string, Symbol, BigInt (es6)
 * * dan tipe data kompleks: object
 * 
 * * tipe data pada js itu loosely type (gk jelas) yaitu variabel tidak menentukan tipe datanya 
 * * melainkan nilainya yang menentukannya
 */

//let a = "Saya" //! ini pasti string
//let c = 2 //! ini pasti number

//let z = null

//console.log(typeof z); //* digunakan untuk mengetahui nilainya yang dibentuk 

/**
 * * Tipe data undefined
 */

//let a = 1
//function first() {
//    a = 2
//}
//first()
//console.log(a)

//function second() {
//    a = "ini function kedua"
//    console.log(a)
//}

//first()
//second()

/**
 * * tipe data null
 * * tipe data primitif yang nilainya adala kosong / null
 */

//let a = null
//console.log(typeof a);

// ! number
/**
 * * number adalah angka 
 * * dan kakaknya yang mampu menampung nilai lebih banyak adalah BigInt dengan menaruh n dibelakang angka
 * * contoh: 69420n
 */




/**
 * * NaN atau Not a Number
 * * NaN merupakan nilai yang muncul dikarenakan nilai tersebut bukanlah angka (Not a Number)
 * * atau bukan number
 */
//let a = 17
//if (a >= 17) {
//    a = 'anda belum cukup umur'
//    console.log(a / 2)
//} else {
//    a = 'sudah cukup'
//    console.log(a)
//}

/**
 * * string
 * * merupakan tipe data yang menampung karakter.
 * * symbolnya bisa '', "", ``
 */

//let a = 'dias'
//console.log(a.length)



//let kata = 'helloworld'
//for (let i = 0;i < kata.length;i++) {
//    console.log(kata[i])
//}

/**
 * * boolean
 * * sebuah tipe data yang menentukan kebenaran, dan hanya memiliki 2 nilai
 * * yaitu true dan false
 */

//let belajar = true
//if (belajar) {
//    console.log('Kelas ini sedang belajar')
//}

/**
 * * object
 * * merupakan tipe data komplek yang berisi props (properties)
 */
//let identitas = {
//    firstName: 'Dias',
//    lastName: 'Utsman',
//    email: 'utsmand91@gmail.com',
//    instagram: '@utssr',
//    phoneNumber: '0812 8646 5924',
//    //address: {
//    //    city: 'Bekasi',
//    //    number: 'F15',
//    //    street: 'Jln Greenville'
//    //}
//}

// * cara memanggil objek

// * 1. menggunakan titik
//console.log(`nama saya : ${identitas.firstName}`)
//console.log(`saya tinggal di : ${identitas.address.city}`)

// * 2. menggunakan brackets []
//console.log(`nama saya : ${identitas['firstName']}`)
//console.log(`saya tinggal di : ${identitas['address']['city']}`)

// * 3. memprint dalam bentuk table
//console.table(identitas);


//const table = {
//    kendaraan: {
//        mobil: 'peugeot',
//        motor: 'v-xion',
//        sepeda: 'united'
//    },
//    jalan: 'Jalan berkah',
//    kota: 'bekasi',
//    platNomor: 'jabodetabek',
//    kereta: {
//        namaKa: 'Argo bromo anggrek',
//        tujuan: 'senen - pasar turi'
//    }
//}

//console.table(table)

//const mobil = 'peugeot'
//const motor = 'ninja'

//

// * template literal
//console.log('mobil saya adalah '+ mobil +' dan motor saya adalah ' + motor)
//console.log(`mobil saya adalah ${mobil} dan motor saya adalah ${motor}`)


// * shorthand named property
//let [a, b, c] = [1, 2, true] 



// * ternary operator
// * template: condition? true : false
//let a = 9

// * ini yang menggunakan if-else biasa
//if (a < 10) {
//    console.log('nilai A kurang dari 10')
//}else {
//    console.log('nilai a lebih dari atau sama dengan 10')
//}

// * ini yang menggunakan ternary operator

//a < 10? console.log('nilai A kurang dari 10') :  console.log('nilai a lebih dari atau sama dengan 10')

/**
 * * function
 * * merupakan sebuah blok kode untuk membungkus sebuah proses penulisan kode agar tidak diulang kembali
 */

//* function biasa

//function name(params) {
//    console.log("saya belajar javascript")
//}
//name()

//* anonymous function
//* mendeklarasi variabel kemudian dimasukin function tanpa nama (anonymous function)
//const anon = function(a) {
//    console.log(a)
//}
//anon('Saya belajar javascript')

//* arrow function
//* gak ada keyword "function"-nya aja
//const a = () => {
//    console.log(this)
//}
//a()

//const satu = parameter => {
//    let a = parameter
//    console.log(a)
//}

//satu('ini adalah arrow function')

//const dua = function(num1, num2) {
//    let a = num1, b = num2
//    console.log(a, b)
//}
//dua()

/**
 ** higher order function
 ** higher order function adalah fungsi yang mengambil fungsi sebagai "argumen", atau mengembalikan "function"
 * */

//* normal function
//* langsung manggil function genap()
//function genap(number) {
//    return number % 2 == 0
//}

//function print(number) {
//    let isTrue = genap(number)
//    if (isTrue) {
//        console.log(`${number} adalah bilangan genap`)
//    }else {
//        console.log(`${number} adalah bilangan ganjil`)
//    }
//}
//print(10)

//* Higher order function
//* manggil function genap() lewat variable callback
//function genap(number) {
//    return number % 2 == 0
//}

//function ganjil(number) {
//    return number % 2 == 1
//}

//function print(number, callback) {
//    const isTrue = callback(number)
//    if (isTrue) {
//        console.log(`${number} adalah bilangan genap`)
//    } else {
//        console.log(`${number} adalah bilangan ganjil`)
//    }
//}
//print(10, genap)

//function speed(mobil) {
//    return mobil >= 100
//}

//function warna(mobil) {
//    return mobil == 'merah'
//}

//function kendaraan(mobil, callback) {
//    let a = callback(mobil)
//    if(a) {
//        console.log(`mobil dengan ${mobil} adalah mobil saya`);
//    }else {
//        console.log(`mobil dengan ${mobil} bukan mobil saya`);
//    }
//}

//kendaraan(80, speed)
/**
 **  jadi function speed atau warna itu dijadikan seperti nilai function yang bisa dipanggil
 */

/**
 * TODO: terdapat 2 function 
 * * tahun() = y <= 2001? gak usah bayar pajak : harus bayar pajak
 * * cc() =  s >= 150 => harus bayar pajak
 */

function tahun(y) {
    return y > 2001
}

function cc(s) {
    return s >= 150
}

function bayarPajakMotor(nilai, callback) {
    console.log(`mobil ini ${nilai} ${callback.name} ${callback(nilai)? 'harus' : 'gak usah'} bayar pajak`)
}

bayarPajakMotor(124, cc)