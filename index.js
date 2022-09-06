let a = [1, 5, 3, 7, 3, 6, 4];
let max = 0;
let f = 0;
let l = 6;
for(let i=f; i<l; i++) {
    if(a[Math.ceil(a.length / 2)] > 7) {
        f = a[Math.ceil(a.length / 2)]
    } else if (a[Math.ceil(a.length / 2)] < 7) {
        l = a[Math.ceil(a.length / 2)]
    } else if(a[Math.ceil(a.length / 2)] === 7) {
        console.log(i)
        break;
    }
}
