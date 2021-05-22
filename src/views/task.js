// 练习题：同步任务 & 微任务 & 宏任务

new Promise(function (resolve) { // ! 不变
    console.log('2-1');
    resolve(); // ? 可以和 reject 调换顺序，也可以删除
}).then(function () { // ! 不变
    console.log('4-2');
    setTimeout(function () { // ! 不变
        console.log('8-2');
    }); // ! 不变
    console.log('1-2');
}).catch(function () { // ! 不变
    console.log('5');
}); // ! 不变

setTimeout(function () { // ! 不变
    console.log('8-1');
    new Promise(function (resolve) { // ! 不变
        console.log('2-3');
        resolve(); // ? 可以和 reject 调换顺序，也可以删除
    }).then(function () { // ! 不变
        console.log('4-4');
        setTimeout(function () { // ! 不变
            console.log('8-3');
        }); // ! 不变
        console.log('1-2');
    }).catch(function () { // ! 不变
        console.log('5');
        console.log('8');
    }); // ! 不变
}); // ! 不变

console.log('4-1');
console.log('1-1');

new Promise(function (resolve) { // ! 不变
    console.log('2-2');
    resolve(); // ? 可以和 reject 调换顺序，也可以删除
    reject(); // ? 可以和 resolve 调换顺序，也可以删除
}).then(function () { // ! 不变
    console.log('4-3');
    setTimeout(function () { // ! 不变
        console.log('5-1');
        new Promise(function (resolve) { // ! 不变
            console.log('2-4');
            resolve(); // ? 可以和 reject 调换顺序，也可以删除
        }).then(function () { // ! 不变
            console.log('4-5');
            setTimeout(function () { // ! 不变
                console.log('8-5');
            }); // ! 不变
            console.log('1-3');
        }).catch(function () { // ! 不变
            console.log('5');
        }); // ! 不变 
        console.log('8-4');
    }); // ! 不变
}).catch(function () { // ! 不变
    console.log('5');
    console.log('1');
    setTimeout(function () { // ! 不变
        console.log('8');
    }); // ! 不变
}); // ! 不变




// 答案：



// 2-1,4-1,1-1,2-2,
// 4-2,1-2,
// 4-3,
// 8-1,
// 2-3,
// 4-4,1-2,
// 8-2,
// 5-1,
// 2-4,8-4,
// 4-5,1-3,
// 8-3,
// 8-5,