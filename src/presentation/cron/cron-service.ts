import { CronJob } from "cron";

type CronTime = string | Date;
type OnTick=()=>void;

export class CronService {

    static createJob (cronTime:CronTime,onTick:OnTick){
        
        const job = new CronJob(
            cronTime,//'*/2 * * * * *', // cronTime
            onTick, //Callback que ejecuta lo que quieras que haga la funcion
  
            null, // onComplete
            true, // start
            'America/Los_Angeles' // timeZone
        );
        job.start();
        return job;
    }
}