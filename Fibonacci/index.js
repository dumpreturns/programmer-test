let f1 = 0
let f2 = 1
let f3


for (cont = 0; cont < 100; cont++) {
    f3 = f1 + f2
    console.log(f3)
    f1 = f2
    f2 = f3
}

