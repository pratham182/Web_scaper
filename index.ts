import axios from "axios";
import qs from "qs";


const result=async(rollno:string,session:string,sem:string,examType:string)=>{
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
        data : data
      };
      
      const response=await axios.request(config)
      console.log(response.data);
      
}
// result("210010139002","DEC-2023","5th")

//cherios,nodejs-html-parser