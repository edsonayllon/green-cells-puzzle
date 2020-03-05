// create empty 2D array

function solution(cols) {
    // pattern repeats ever 120, every 120 has 6 all green columns
    // get quotient and remainder
    let [quot, rem] = [Math.floor(cols/120), cols % 120];

    let count = 6 * quot;

    if (rem !== 0) {
        // get empty array of remainders
        let arr = new Array(rem + 1)

        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(5)
        }

        // populate 2d array with green cells
        for (let i = 0; i < arr.length; i++) {
            arr[i][0] = [1].includes(i % 2) ? 1 : 0
            arr[i][1] = [1,2].includes(i % 4) ? 1 : 0
            arr[i][2] = [1,2,3].includes(i % 6) ? 1 : 0
            arr[i][3] = [1,2,3,4].includes(i % 8) ? 1 : 0
            arr[i][4] = [1,2,3,4,5].includes(i % 10) ? 1 : 0
        }

        // check how many columns are all green cells
        arr.forEach(i => {
            if (i.reduce((a, b) => a + b, 0) == 5) count++
        })
    }


    return count;
}



console.log(solution(120))


