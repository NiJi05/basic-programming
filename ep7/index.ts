const score = [10, 23, 26, 30, 33]

let sum: number = 0

for (let i = 0; i < score.length; i++) {
    sum = sum + score[i]
}

let avg = sum / score.length
console.log("Total: ", sum)
console.log("Total: ", avg)


const myStudents: string = "เซน,แทน,เวฟ,รุ้ง,เท็ก,สร"

const mySudentsArray: string[] = ["เซน,แทน,เวฟ,รุ้ง,เท็ก,สร"]

console.log(myStudents)
console.log(mySudentsArray)


const fullName: string ='สุดสวย สวยสุด'

console.log(fullName.split(' ')[1])

console.log(fullName.slice(0, fullName.indexOf(' ')))


const zoom: string = 'หมา*แม*กระต่าย*หมี'

const zoomarray =  zoom.split('*')

console.log(zoom)
console.log(zoomarray)


const zoom: string = 'หมา*แม*กระต่าย*หมี'

const zoomarray =  zoom.split('*')

console.log("ตั้งต้น: ", zoomarray)

zoomarray.pop() //เอาตัวสุดท้ายออก

console.log("เอาตัวสุดท้ายออก: ", zoomarray)

zoomarray.push('ยีราฟ') //ใส่ต่อท้ายหฟ

console.log("ใส่ต่อท้าย: ", zoomarray)

zoomarray.shift() //เอาตัวหน้าออก

console.log("เอาตัวหน้าออก: ",zoomarray)

zoomarray.unshift('กาปิบาร่า') //ใส่คัวหน้า

console.log("ใส่คัวหน้า: ",zoomarray)


const fruits = ["Banana", "Orange", "Apple", "Mango"]

fruits.sort()

console.log("เรียง A-Z: ",fruits)

fruits.reverse()

console.log("เรียง Z-A: ", fruits)

const fruitsSlice = fruits.slice(0, 2)

console.log("ตัด: ", fruits)


const sos: string = 'เจน, นุ่น, โบว์, กระต่าย'

const sosArray: string[] = sos.split(',')
sosArray.sort()

console.log(sosArray)

sosArray.reverse()

console.log(sosArray)


const me = {
    firstName: 'kittipong',
    lastName: 'satrg',
    age: 19
    

}


// ประวัติส่วนตัว

// ชื่อ: kittipong
// นามสกุล: satrg
// อายุ: 19
// เบอร์: 911
