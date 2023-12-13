const gifts = ['libro', 'ps5']
const materials = 'psli'

function manufacture(gifts, materials) {
    const manufacturedGifts = []

    const manufacturing = (g)=> {
        let countMaterials = 0
        for (const x of g) {
            if (materials.includes(x)) {
                countMaterials += 1
                continue
            }else{
                break
            }
        }
        
        if (countMaterials == g.length) {
            manufacturedGifts.push(g)
        }
    }

    for (const gift of gifts) {
        manufacturing(gift)    
    }

    return manufacturedGifts
}

console.log(manufacture(gifts,materials))