import app from "./app.js";

const main = ()=>{
    app.listen(app.get('port'));
    console.log(`Estamos en el puerto ${app.get('port')}`);
}

main();