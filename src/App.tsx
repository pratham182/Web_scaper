import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {main} from "../index";


interface Result {
  
  name: string;
  marks: string;
  rollno:string
}
  

const App: React.FC = () => {
    const [data, setData] = useState<Result[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await main(); 
                setData(result);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
      <div>
          <h1>Scraped Data:</h1>
          {data.length > 0 ? (
              <table>
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Marks</th>
                      </tr>
                  </thead>
                  <tbody>
                      {data.map((result, index) => (
                          <tr key={index}>
                              <td>{result.name}</td>
                              <td>{result.marks}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          ) : (
              <p>Loading...</p>
          )}
      </div>
  );
}

export default App
