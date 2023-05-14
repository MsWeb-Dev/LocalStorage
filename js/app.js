// get iteem 
// set item
//clear()

// const ism = "Shaxnoza"

// localStorage.setItem("name",ism)

// const getName = localStorage.getItem("name")

// console.log(getName)

// localStorage.clear()

const ismlar = ["Diyor","Javohir","Alisher"]

localStorage.setItem("nameArray",JSON.stringify(ismlar))


console.log(ismlar)

// malumotlar string tipida boryapti JSON.stringifydan foydalanib json formatga otkazamiz

const arrName = JSON.parse(localStorage.getItem("nameArray"))
//JSON parse metodi orqali string turidagi malumotni JSON ga aylantirish mumkin
console.log(arrName)