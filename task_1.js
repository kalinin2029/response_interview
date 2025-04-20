Promise.resolve(10) //
.then(console.log.bind(null, 'A:')) //В первый раз выведет А: 10.
//.then((value) => console.log('A:', value)) // аналогичный способ, как предложил DeepSeek
.then(res => !res
    ? new Error('Got error')        //Так как, в первом then мы в методе bind указали (null), вернется пустое значение и выполниться Error.
    :res
)
.then(res => console.info('B:', res))
.catch(res => console.error('D:', res)) // Не выполниться, так как промис не был отклонен.

//В консоле у нас будет.
//A: 10
//B: Error: Got error