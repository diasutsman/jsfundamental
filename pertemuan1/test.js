/**
 * bisa banyak
 * baris
*/

// identifier
/**
 * Aturan penamaan fungsi, variabel, kelas, constructor
 * karakter pertamanya boleh a-z, A-Z, simbol underscore, ataupun dollar
 * tidak boleh diawali oleh angka
 * tidak boleh menggunakan bahasa yang sudah ada default di js
 */

// statement
/**
 * statement = suatu pernyataan js yang paling dasar dan memiliki tugas tertentu
 */
//let name = 'Hello World'
//console.log(name)

// expression
/**
 * expression merupakan expresi js yang berfungsi menghasilkan nilai tertentu
 */


//let first = 1
//let second = 2
//let result = first + second


//if(result > 1) {
//    var j = 10
//    console.log(`maka hasilnya ${result} cm`);
//}

// scope
/**
 * cakupan kode agar bisa mengakses atau membatasi 
 */

// global scope
/**
 * merupakan cakupan di seluruh file
 */

// perbedaan const, var, let
/**
 *   keyword   global scope     block scope     local scope
 * 1. const         yes            yes            yes
 * 2. var           yes            no             yes
 * 3. let           yes            yes            yes
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

const a = 'mobil'
function kendaraan() {
    console.log(a)
}
kendaraan()

// tugas bikin 1 global scope, 1 block scope , 1 local scope
let a = 10 // saya adalah global scope karena ditaruh diluar function atau block apapun
function f() {
    const b = 20 // saya adalah local scope karena saya tidak bisa dibaca diluar function f()
    if(true) {
        let c = 69 // saya adalah block scope karena saya tidak bisa dibaca di function f()
    }
    c = 420 // akan menghasilkan error
}