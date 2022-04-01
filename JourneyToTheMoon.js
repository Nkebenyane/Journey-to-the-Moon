
let n = 10
let astronaut = [[0, 2], [1, 8], [1, 4], [2, 8], [2, 6], [3, 5], [6, 9]] // one the failing test

const journeyToMoon = (n, astronaut) => {
    const arr = []
    const parentArr = []
    const childArr = []
    const count = []
    let sum = 0
    const noCountry = []
    let arr1d = []
    let total = 0

    const tesitng = []
    const country = []
    let countryCount = 0


    const hash = Object.create(null)

    for (let i = 0; i < n; i++) {
        arr.push(i)
        astronaut.forEach(element => {
            if (!parentArr.includes(element[0])) {
                parentArr.push(element[0])
            }
        });

        astronaut.forEach(element => {
            if (!tesitng.includes(element[0])) {
                tesitng.push(element[0])
                // console.log('testing ==================================== ', tesitng)
            }
            if (!tesitng.includes(element[1])) {
                tesitng.push(element[1])
            }

            if (tesitng.includes(element[0]) || tesitng.includes(element[1])) {
                console.log('testingAgain ==================================== ', tesitng)

            }




        })

    }
    const objParent = parentArr.map((a) => {
        return {
            "id": a
        }
    })


    astronaut.forEach(element => {
        if (parentArr.includes(element[0])) {
            if (!childArr.includes(element[1])) {
                childArr.push({
                    "id": element[0],
                    "sub": element[0],
                    "country": element[1],
                })
            }
        }
    })



    console.log('astronaut ', astronaut)

    console.log('parent ', parentArr)
    console.log('childArr ', childArr)


    // grouped 
    const result = objParent.map((a, i) => {
        hash[a.id] = { id: a.id }
        return hash[a.id]
    }, hash);

    childArr.forEach((a) => {
        hash[a.sub].map = hash[a.sub].map || [];
        hash[a.sub].map.push(a.country);
    }, hash);


    const finalArr = result.map((a) => {

        console.log('a === ', a)
        const s = []
        s.push(a.id)

        a.map.forEach((element) => {
            s.push(element)
        })
        return s
    });

    console.log(' finalArr == ', finalArr)

    // convet 2d arry to 1d arry
    for (let i = 0; i < finalArr.length; i++) {
        arr1d = arr1d.concat(finalArr[i])
    }
    console.log(' arr1d ===== ', arr1d)

    // astronaut with no countries 
    arr.forEach((element) => {
        if (!arr1d.includes(element)) {
            // console.log(' not includes =  ', element, ' = ', arr1d)
            noCountry.push([element])
        }
    })

    finalArr.push(...noCountry)

    console.log(' finalArr down here == ', finalArr)


    finalArr.forEach((element) => {
        // console.log('element length ', element.length)
        count.push(element.length)
    })

    // console.log('count ', count)

    // count [ i ]
    let array = count.reverse();
    array = array.map((elem, index) => array.slice(0, index + 1).reduce((a, b) => a + b));

    console.log('array line 97 = ', array)

    // Prifix [ i ]
    const prifix = array.reverse();
    console.log('reversed:', prifix);


    count.reverse()
    for (let i = 0; i < count.length; i++) {
        const temp = []
        for (let j = 0; j < count.length; j++) {
            if (prifix[j + 1]) {
                sum = count[i] * prifix[i + 1]
                i++
                temp.push(sum)
                total = temp.reduce((partialSum, a) => partialSum + a, 0)
            }
        }
    }

    console.log('total', total)
    return total
}

journeyToMoon(n, astronaut)