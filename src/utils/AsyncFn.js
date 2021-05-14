export const fetchData = (isAuth) => (
    new Promise((resolve, reject) => {
        if (isAuth) return resolve('you are loged in')
        else return reject('error')
    })
)