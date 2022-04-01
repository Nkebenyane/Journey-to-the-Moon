

const journeyToMoon = (n, astronaut) => {

    const relationalMap = {} 
    const graph = [] 
    const count = []
    const noCountry = []
    const TotalnumberOfAstronaut = []
    let prifix = []
    let totalPairsOfAstronauts = 0
    let arr1d = []


    for (let i = 0; i < n; i++) {
        TotalnumberOfAstronaut.push(i)
    }

    astronaut.forEach((element) => {
        const ast1 = element[0]
        const ast2 = element[1]

        if (relationalMap.hasOwnProperty(ast1) && relationalMap.hasOwnProperty(ast2)) {
            var graphIndex = relationalMap[ast1]
            var graphIndex2 = relationalMap[ast2]

            if (graphIndex === graphIndex2) {
                return
            }
            for (let i of graph[graphIndex2]) {
                graph[graphIndex].add(i)
                relationalMap[i] = graphIndex
            }
            graph[graphIndex2].clear()
        }
        else if (relationalMap.hasOwnProperty(ast1) || relationalMap.hasOwnProperty(ast2)) {
            let graphIndex = relationalMap[ast1] || relationalMap[ast2]
            graph[graphIndex].add(ast1).add(ast2)
            relationalMap[ast1] = graphIndex
            relationalMap[ast2] = graphIndex
        }
        else if (!relationalMap.hasOwnProperty(ast1) && !relationalMap.hasOwnProperty(ast2)) {
            let graphSet = new Set()
            graphSet.add(ast1).add(ast2)
            let graphIndex = (graph.push(graphSet) - 1) + ''
            relationalMap[ast1] = graphIndex
            relationalMap[ast2] = graphIndex
        }
    })

    // convert set to array
    const convertSetToArry = graph.map((set) => {
        let array = [];
        set.forEach(x => array.push(x))
        return array;
    });

    // astronaut with no countries 
    for (let i = 0; i < convertSetToArry.length; i++) {
        arr1d = arr1d.concat(convertSetToArry[i])
    }
    TotalnumberOfAstronaut.forEach((element) => {
        if (!arr1d.includes(element)) {
            noCountry.push([element])
        }
    })
    convertSetToArry.push(...noCountry)

    // find the length of an array  count[i]
    convertSetToArry.forEach((element) => {
        if (element.length != 0) {
            count.push(element.length)
        }
    })

    // count prifix[i]
    let array = count.reverse();
    array = array.map((elem, index) => array.slice(0, index + 1).reduce((a, b) => a + b));
    prifix = array.reverse()

    // Total number of pairs of Astronauts
    count.reverse()
    for (let i = 0; i < count.length; i++) {
        const temp = []
        for (let j = 0; j < count.length; j++) {
            if (prifix[j + 1]) {
                let sum = count[i] * prifix[i + 1]
                i++
                temp.push(sum)
                totalPairsOfAstronauts = temp.reduce((partialSum, a) => partialSum + a, 0)
            }
        }
    }

    console.log('totalPairsOfAstronauts =', totalPairsOfAstronauts)
    return totalPairsOfAstronauts
}


let n =  10 // 5
let astronaut =   [[0, 2], [1, 8], [1, 4], [2, 8], [2, 6], [3, 5], [6, 9]] //[[0, 1], [2, 3], [0, 4]]
journeyToMoon(n, astronaut)
