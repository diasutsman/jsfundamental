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


// TODO: buatlah objek sehingga menjadi persis seperti ini
const table = {
    kendaraan: {
        mobil: 'peugeot',
        motor: 'v-xion',
        sepeda: 'united'
    },
    jalan: 'Jalan berkah',
    kota: 'bekasi',
    platNomor: 'jabodetabek',
    kereta: {
        namaKa: 'Argo bromo anggrek',
        tujuan: 'senen - pasar turi'
    }
}

console.table(table)