
// En el Polo Norte todavia usan fotocopiadora de papel. 
// Los elfos las usan para copiar las cartas que los niños envian a Santa
// y asu poder enviarlas a todos los departamentos de regalos
// Sin embargo ya son muchos viejas y no funcionan muy bien.
// Cada vez que se hacen una copia, la calidad de la copia disminuye ligeramente,
// un fenomeno conocido como perdida generacional
// necesitas detectar si una carta es una copia de otra.
// Las cartas son muy largas y no puedes leerlas, pero puedes compararlas con un algoritmo.
// Existe una gran probabilidad de que un caracter se degrade en cada copia. Y al ocurrir, la regla que sigue es:
// Los caracteres de A a Z se degradan de mayusculas a minusculas (A-Z => a-z)
// Las letras se degradan en una serie de caracteres en este orden: a-z => #  => + => : => . =>
// Ten encuenta que el ultimo es un espacio en blanco, no un caracter vacio.
// Los caracteres que no son letra (como digitos) no de degradan.
// Sabiendo esto y recibiendo la carta original y la copia, debes determinar si la copia es una copia de la original.

function checkIsValidCopy(original: string, copy: string) {
    const simbolos = "#+:. ";
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const esMayuscula = (s: string)=> mayusculas.includes(s);
    const esMinuscula = (s: string) => minusculas.includes(s);

    const pasaAMinuscula = (s: string) => {
        return s.toLowerCase()
    }

    const pasaAMinusculas = (s: string)=>{
        return s.toUpperCase()
    }

    const dameOptionesDegradacion = (s: string) =>{
        // Caso 1: Si es mayusculas => mayusculas, minusculas, simbolos
        if (esMayuscula(s)) {
            return s + pasaAMinuscula + simbolos
        }

        // Caso 2: si es minusculas => minuscula, simbolos
        if (esMinuscula(s)) {
            return s +  simbolos
        }

        // Caso 3: si no es s una letra => el mismo caracter
        return s
    }

    if(original.length !== copy.length){
        return false;
    }
    
    for(let i=0; i < original.length; i++){
        const caracterOriginalActual = original[i];
        const combinacionesConFallosValidos = dameOptionesDegradacion(caracterOriginalActual);
        const caracterCopiaActual = copy[i]
        if (combinacionesConFallosValidos.includes(caracterCopiaActual)) {
            return false;
        }
    }

    return true
}