import { Server } from "./presentation/server";

const namex:string='Dan';


console.log(namex);

(async ()=>{
    main();
})();

function main(){
    Server.start();
}