function validSolution(matrix) {
    // Create arrays to compare columns rows and blocks
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let arrToCompare = []


    //Looping through the rows and columns of matrix
    for (let x = 0; x < matrix.length; x++) {
        //Check if rows is satisfy our task
        arrToCompare = []
        for (let y = 0; y < matrix.length; y++) {
            arrToCompare.push(matrix[x][y])
        }

        if (!equals(arr, arrToCompare.sort(sortArrNum))) {
            alert(false)
            return false;
        }

        //Check if columns is satisfy our task
        arrToCompare = []
        for (let y = 0; y < matrix.length; y++) {
            arrToCompare.push(matrix[y][x])
        }

        if (!equals(arr, arrToCompare.sort(sortArrNum))) {
            alert(false)
            return false;
        }

    }

    arrToCompare = []
    //Looping through the blocks of matrix and check if block satisfy our task
    for (let x = 0; x < matrix.length; x += 3) {
        for (let y = 0; y < matrix.length; y += 3) {
            for (let blockx = 0; blockx < 3; blockx++) {
                for (let blocky = 0; blocky < 3; blocky++) {
                    arrToCompare.push(matrix[x + blockx][y + blocky])
                }

            }
            console.log(arrToCompare)
            if (!equals(arr, arrToCompare.sort(sortArrNum))) {
                alert(false)
                return false;
            }
            arrToCompare = []

        }

    }

    alert(true)
}

//Func to compare arrays
const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b)

//Func to sort Array of numbers
const sortArrNum = (a, b) => { return a - b }