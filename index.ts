import { fetch_result } from './src/fetch-result';

import dotenv from 'dotenv'; 

dotenv.config();
interface Result{
   name:string,
   rollno:string,
   marks:string
}



export const main = async () => {
  let overall_result: Result[] = [];

  
  let iterate_rollno: number = 210010130001;
  let response=null;
  
  do {  
     response = await fetch_result(iterate_rollno.toString(), "DEC2023", "5", "MAIN");
    if (response) {
      // console.log(overall_result);
      overall_result.push(response);
      
    }
    iterate_rollno++;
    if (iterate_rollno == 210010130073) {
      iterate_rollno = 210010139001
    }



  }while (response != null)

 
  }

main();







//send batch request
//30 request