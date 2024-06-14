import axios from "axios";
import qs from "qs";

import cheerio from 'cheerio';


import { Result } from './types'; 

const batchSize = 5;
const result = async (rollno: string, session: string, sem: string, examType: string) => {
  let data = qs.stringify({
    'todo': 'post',
    'rollno': rollno,
    'session': session,
    'sem': sem,
    'examType': examType,
    'getdmc': 'SEARCH'
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://210.212.119.171/regresult/dmc.php',
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7',
      'Cache-Control': 'max-age=0',
      'Connection': 'keep-alive',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Origin': 'http://210.212.119.171',
      'Referer': 'http://210.212.119.171/regresult/res.php',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      'If-None-Match': '"TtE1NjjDkktiaEtYKfOAHdiTLBQ="',
      'If-Modified-Since': 'Thu, 21 Mar 2024 08:35:15 GMT'
    },
    data: data
  };

  try {
    const response = await axios.request(config)
    const parsedData = parseHtml(JSON.stringify(response.data));
    if (parsedData) {
      return parsedData;
    }

  }
  catch (err) {
    return null;
  }





}


//cherios,nodejs-html-parser


// todo: post
// rollno: 210010139002
// session: DEC2023
// sem: 5
// examType: MAIN
// getdmc: SEARCH


//parse the html
const parseHtml = (htmlContent: string) => {
  const $ = cheerio.load(htmlContent);

  //name 
  let name: string = '';
  const nameSelector = "body > table:nth-of-type(2) > tbody > tr:nth-child(3) > td:nth-child(2)";
  const nameElement = $(nameSelector);
  name = nameElement.text().trim() || 'N/A';


  //rollno
  let rollno: string = '';
  const rollnoSelector = "body > table:nth-of-type(2) > tbody > tr:nth-child(2) > td:nth-child(2)";
  const rollnoElement = $(rollnoSelector);

  rollno = rollnoElement.text().trim() || 'N/A';


  //marks
  let marks: string = '';
  const markselector = "body > table:nth-of-type(3) > tbody > tr:nth-child(3) > td:nth-child(2)"
  const marksElement = $(markselector);

  marks = marksElement.text().trim() || 'N/A';

  if (marks == 'N/A')
    return null;
  return {
    name, rollno, marks
  }


  //later rafactored this code by making a function
}


export const main = async () => {
  let overall_result: Result[] = [];

  
  let iterate_rollno: number = 210010130001
  while (iterate_rollno <= 210010139018) {
   
    
    const response = await result(iterate_rollno.toString(), "DEC2023", "5", "MAIN");
    if (response) {
      overall_result.push(response);
      
    }
    iterate_rollno++;
    if (iterate_rollno == 210010130073) {
      iterate_rollno = 210010139001
    }



  }

  const compare = (a: Result, b: Result): number => {
    
    if (a.marks > b.marks) {
      return -1;
  }
    if (a.marks < b.marks) {
        return 1;
    }
    
    return 0;
};
  return overall_result.sort(compare);

}








//send batch request
//30 request