export const userLogin = async ({ email, password }) => {
    return new Promise ((resolve, reject) => {
        console.log(email);
        console.log(password);
        setTimeout( () => {
            if(email === 'indo@ganteng.com' && password === '123') {
                resolve();
            }else{
                reject();
            }
        }, 3000);
    });
};