function helloWorld() {
    console.log("สวัดดี")
}

helloWorld() // ไม่มี input ไม่มี output

function helloName(name: string) {
    console.log(name)
}

helloName('Rung') // มี input ไม่มี output

function getPi() {
    return 3.14
}

console.log(getPi()) // ไม่มี input ไม่มี output



function st(fname: string, sname: string) {
    
    if (fname === 'mix' || sname === 'zane') {
        console.log('เริ่มสอน') 
    } else {
        console.log('ไม่สอน')
    }
}

st('mix', 'zane')

function set(fname: string, sname: string, name: string) {

    if ((fname === 'mix' || sname === 'zane') && name === 'forth') {
        console.log('พร้อมเรียน')
    } else { 
        console.log('ยังไม่พร้อม')
    }
}

set('mix', 'zane', 'forth')

function search(gender: string, high: number, heavy: number) {
    if (gender === 'man' && (high > 170 || (heavy > 50 && heavy <= 110  ))) {
        console.log('ผ่านเกณร์')
    } else {
        console.log('ไม่ผ่านเกณร์')   
    }
} 

search('man', 170, 60)