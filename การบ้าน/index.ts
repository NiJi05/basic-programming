function Bmi (Height: number, Weight: number) {
    let score: number = (Weight/Height*Height)

    if(score < 18.50) {
        return 'น้ำหนักน้อย / ผอม'
    } else if (score < 22.90) {
        return 'ปกติ'
    } else if (score < 24.90) {
        return 'ท้วม'
    } else if (score < 29.90) {
        return 'อ้วน'
    } else {
        return 'อ้วนมาก'
    }
}

console.log (Bmi (1.77, 85))