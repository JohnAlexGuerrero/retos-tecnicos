const giftIds = [5,1,50,10,90,55]

function findFirstRepeated(gifts) {
    // el idRegalo se repite en la lista de regalos
    const isRepeatGift = (g)=> gifts.indexOf(g) !== gifts.lastIndexOf(g) ? true : false
    const listGiftsRepeat = []

    for (let index = 0; index < gifts.length; index++) {
        const gift = gifts[index];
        if (isRepeatGift(gift)) {
            listGiftsRepeat.push(gifts.lastIndexOf(gift))
        }
    }
    // encuentre el primer idregalo que se ha repetido
    // de los idregalos repetidos devuelve el idregalo con el indice mas pequeño
    if (listGiftsRepeat.length > 1) {
        listGiftsRepeat.sort()
        return gifts[listGiftsRepeat[0]]
    }
    // si no existe idregalo repetidos devuelve -1
    return -1
}

console.log(findFirstRepeated(giftIds))