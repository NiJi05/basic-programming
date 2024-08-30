function sayHi(dayOfweek: number) {
    if (dayOfweek === 1) {
         console.log('สวัดดีวันอาทิตย์') 
    }
    else if (dayOfweek === 2) {
        console.log('สวัดดีวันจันทร์')
    }
    else if (dayOfweek === 3) {
        console.log('สวัดดีวันอังคาร') 
    }
    else if (dayOfweek === 4) {
        console.log('สวัดดีวันพุธ')
    }
    else if (dayOfweek === 5) {
        console.log('สวัดดีวันพฤหัต')
    }
    else if (dayOfweek === 6) {
        console.log('สวัดดีวันศุกร์')
    }
    else if (dayOfweek === 7) {
        console.log('สวัดดีวันเสาร์')
    }
}

sayHi(1)


function sayHi(dayOfweek: number) {
    switch (dayOfweek) {
        case 1:
            console.log('สวัดดีวันอาทิตย์')
            break
        case 2:
            console.log('สวัดดีวันจันทร์')
            break
        case 3:
            console.log('สวัดดีวันอังคาร')
            break
        case 4:
            console.log('สวัดดีวันพุธ')
            break
        case 5:
            console.log('สวัดดีวันพฤหัต')
            break
        case 6:
            console.log('สวัดดีวันศุกร์')
            break
        case 7:
            console.log('สวัดดีวันเสาร์')
            break
    }
}
sayHi(7)


function sizeGrb(size: string) {
    switch (size) {
    case ('s'):
        console.log('ผอม')
        break
    case ('m'):
        console.log('ผอม')
        break
    case ('l'):
        console.log('ท้วม')
        break
    case ('xl'):
        console.log('อ้วน')
        break
    case ('2xl'):
        console.log('อ้วน')
        break
    }
}
sizeGrb('2xl')


function fixedDecimal(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}

console.log(fixedDecimal(40.67676, 10))


function demon(r: number) {
    const x = r.toLocaleString()
    return x
}

console.log(demon(1000))

const str: string = "Kittipong"

console.log(str.toLocaleLowerCase())


function checkStringLength (n: string) {
    const t = n.length
    return t
}
 
 console.log(checkStringLength('rada'))


 function getCharByIndex(msg: string, index: number) {
    const x = msg.charAt(index)
    return x
}


console.log(getCharByIndex('หิวข้าว', 1))


const str: string = 'อยากกลับบ้าน'

console.log(str.indexOf("ย"))


const dik: string = 'จีบเธอไม่ได้ ก็เลยจีบแม่เธอแทน'    

console.log(dik.includes('จีบ'))


function slow(all: string, ran: string) {
    if (all.includes(ran) === true) {
        console.log(all.indexOf(ran))
    } else {console.log('ไมพบคำที่ค้นหา')
    }
}

slow('bakcToGoHome', 'rara')