const BASE_URL = 'http://localhost:3000';

function removeBook(boodId) {
    const url = `${BASE_URL}/books/${boodId}`;
    const options = {
        method: 'DELETE',
    };
    return fetch(url, options);
}

removeBook(3).catch(error => console.log(error));

// function makeSmoothie() {
//     getFruit('apple').then(apple => {
//         console.log(apple);

//         getFruit('kiwi').then(apple => {
//             console.log(apple);
//         });
//     });
// }
// makeSmoothie();
        
// async function aMakeSmoothie() {
//     console.time('aMakeSmoothie');
//     const apple = getFruit('apple');
//     const kiwi = getFruit('kiwi');
//     const berry = getFruit('strawberry');

//     const fruits = await Promise.all([apple, kiwi, berry]);
//     console.log(fruits);

//     console.timeEnd('aMakeSmoothie');
// }

async function aMakeSmoothie() {
    try {
        const apple = getFruit('apple');
        const kiwi = getFruit('kiwi');
        const berry = getFruit('strawberry');

        const fruits = await Promise.all([apple, kiwi, berry]);
        return fruits;
    } catch (error) {
        console.log('Error');
    }
}    
aMakeSmoothie().then(fruits => console.log(fruits));
