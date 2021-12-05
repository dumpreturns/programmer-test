const oldArray = [
    { id: 1, nome: 'Liz', idade: 2 },
    { id: 2, nome: 'Thais', idade: 32 },
    { id: 3, nome: 'Jonathan', idade: 30 },
    { id: 4, nome: 'Thaina', idade: 29 },
    { id: 5, nome: 'Fabiano', idade: 45 },
]


//numeros.splice(numeros.indexOf(5), 1)

const newArray = oldArray.forEach((id) => {
    oldArray.pop(id)
})

console.log(newArray)