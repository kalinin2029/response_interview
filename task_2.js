function fx (){
    let x = 1//2
    function multiply(){
        x *= 10//x
        console.info(x)
    }
    setTimeout(
        () => console.info(x),
        1000 //100
    )

    return multiply;
}

const customFX = fx()
// в моем случае вывелось все 3 значения.
customFX() //10
customFX() //100
customFX() //1000
console.log(x); //ошибка, так как переменная не глобальная (видна только в теле фенкции fx)

// если закоменчиваем console.log(x);, то customFX() выведет в 4-й раз 1000, это связанно с setTimeout,
// после завершения multiply, она все равно продолжить изменять х.