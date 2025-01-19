//Правильно написана функція
async function getCapital() {
    const URL = 'https://restcountries.com/v3.1/name/';
    const arr = ['sddfdgdf', 'Ukraine', 'France'];

    const responses = arr.map(async (country) => {
        const resp = await fetch(`${URL}${country}`)
        if (!resp.ok) {
            throw new Error('Not found')
        }
        return resp.json()
    })
    const prom = await Promise.allSettled(responses)
    return prom;
};
getCapital()
    .then(data => {
        const res = data.filter(({ status }) => status === 'filfilled').map(({ value }) => value[0]);
        const ref = data.filter(({ status }) => status === 'rejected');
        console.log(res);
        console.log(ref);
    })
    .catch(e => console.log(e))


//неправильно написана функція. try-catch не потрібен. 
// async function getCapital() {
//     try {
//         const URL = 'https://restcountries.com/v3.1/name/';
//         const arr = ['sddfdgdf', 'Ukraine', 'France'];

//         const responses = arr.map(async (country) => {
//             const resp = await fetch(`${URL}${country}`)
//             if (!resp.ok) {
//                 throw new Error('Not found')
//             }
//             return resp.json()
//         })
//     const prom = await Promise.all(responses)
//     return prom;
//     } catch (e) {
//         console.log(e);}};
// getCapital().then(data => console.log(data)).catch(e => console.log(e)) 