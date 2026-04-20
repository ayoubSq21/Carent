import { useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import CarCard from './components/CarCard'
import cars from './data/cars'

function App() {
  const [selectedCar, setSelectedCar] = useState(6)

  return (
    <div style={styles.app}>

      <div style={styles.mainCard}>

        <Navbar />
        <SearchBar />
        <FilterBar />

        {/* cars */}
        <div style={styles.grid}>
          {cars.map((car) => (
            <div key={car.id} onClick={() => setSelectedCar(car.id)}>
              <CarCard
                car={car}
                isSelected={selectedCar === car.id}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

const styles = {
  app: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #E0E7FF 0%, #F3E8FF 100%)',
    padding: '15px', // Reduced for mobile
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    boxSizing: 'border-box',
  },
  mainCard: {
    backgroundColor: 'white',
    borderRadius: '30px',
    width: '100%',
    maxWidth: '1200px',
    paddingBottom: '40px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
    boxSizing: 'border-box',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
}

export default App