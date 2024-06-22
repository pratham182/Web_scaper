import cheerio from "cheerio";
export const parseHtml = (htmlContent: string) => {
    const $ = cheerio.load(htmlContent);
  
    //name
    const nameSelector = "body > table:nth-of-type(2) > tbody > tr:nth-child(3) > td:nth-child(2)";
    let name: string=parseSpecificField($,nameSelector);
    
    
    // rollno
    
    const rollnoSelector = "body > table:nth-of-type(2) > tbody > tr:nth-child(2) > td:nth-child(2)";
    let rollno: string=parseSpecificField($,rollnoSelector);
  
   
  
  
  //marks 
    const markselector = "body > table:nth-of-type(3) > tbody > tr:nth-child(3) > td:nth-child(2)"
    let marks: string=parseSpecificField($,markselector);
   

    //individual subject marks


    const tbody = $('body > table:nth-child(5) > tbody');
    const marksDetails = [];

    tbody.find('tr').each(index,ele)=>{
      
    }
     
    

    if (marks == 'N/A')
      return null;
    return {
      name, rollno, marks,
      subject:{
        
      }
    }
  
  
    //later rafactored this code by making a function
  }


const parseSpecificField=(loadable:any,selector:any):string=>{
  const element = loadable(selector); 
  return element.text().trim() || 'N/A';
}
  