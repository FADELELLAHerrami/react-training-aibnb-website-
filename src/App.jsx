import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import data from './components/data/data';


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='card--list'>
      {
        data.map((data)=>{
          {console.log(data)}
          return(
            <Card
              key = {data.id}
              item = {data}
            />
          )
        })
      }
      </div>
      
      
      
    </>
  )
}


