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
          return(
            <Card
              coverImg= {`/src/assets/images/${data.coverImg}`}
              rating={data.stats.rating}
              reviewCount={data.stats.reviewCount}
              country={data.location}
              title={data.title}
              price={data.price}
            />
          )
        })
      }
      </div>
      
      
      
    </>
  )
}


