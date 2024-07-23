function add(a: number, b: number) {
    return a + b
}

function m(a: number, b: number) {
    return a - b
}


console.log(m(50, 15))

function open(d: number, b: number, c: number, x: number) {
    return d * b * c * x
}

console.log(open(5, 15, 12, 6))


function gradr(homeowork: number, midterm: number, final: number) {
    let score: number = homeowork + midterm + final
    if (score < 50) {
        return 'เกรด F' 
    } else if (score <60) {
        return 'เกรด D'
    } else if (score <70) {
        return 'เกรด C'
    } else if (score <80) {
        return 'เกรด B'
    } else {
        return 'เกรด A'
    }
    
}
console.log(gradr(50, 40, 30))