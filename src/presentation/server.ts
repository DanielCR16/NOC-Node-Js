import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";


export class Server {
    public static start(){
        console.log('Server started...');

        //CADA MAS SEGUNDOS ES: */2
        CronService.createJob('*/5 * * * * *',    ()=> {
            const url ='https://google.com';
       new CheckService(()=>console.log(`${url} is ok`),(err)=>console.log(err)).execute(url);
       //new CheckService().execute('http://localhost:3000/posts');
      
        } );


    }
}       