import { Fuel } from 'lucide-react'
import { TbSteeringWheel } from "react-icons/tb";
import { PiSeatFill } from "react-icons/pi";
import { ArrowRight } from 'lucide-react'

function CarCard({ car, isSelected }) {
  return (
    <div style={{
      ...styles.card,
      border: isSelected ? '2px solid #5964C9' : '2px solid transparent',
    }}>

      {/* Nom et Prix */}
      <h3 style={styles.name}>{car.name}</h3>
      <div style={styles.price}>
        <span style={styles.dollar}>$</span>
        <span style={styles.amount}>{car.price}</span>
        <span style={styles.perDay}>/day</span>
      </div>

      {/* Image */}
      <img src={car.image} alt={car.name} style={{
        ...styles.image,
        position: 'relative',
        top: car.imageTop || '0px',
      }} />

      {/* Specs */}
      {!isSelected && (
        <div style={styles.specs}>
          <div style={styles.spec}>
            <TbSteeringWheel size={18} color="#90A3BF" />
            <span style={styles.specText}>{car.transmission}</span>
          </div>
          <div style={styles.spec}>
            <PiSeatFill size={18} color="#90A3BF" />
            <span style={styles.specText}>{car.seats} Seats</span>
          </div>
          <div style={styles.spec}>
            <Fuel size={18} color="#90A3BF" />
            <span style={styles.specText}>{car.mpg} MPG</span>
          </div>
        </div>
      )}

      {/* Bouton rent now*/}
      {isSelected && (
        <button style={styles.rentBtn}>
          <span>Rent Now</span>
          <span style={styles.arrowCircle}>
            <ArrowRight size={14} color="white" strokeWidth={3} />
          </span>
        </button>
      )}

    </div>
  )
}

const styles = {
  card: {
    backgroundColor: '#fcfafa',
    borderRadius: '16px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  name: {
    fontSize: '16px',
    fontWeight: 700,
    textTransform: 'capitalize',
    color: '#1A202C',
  },
  price: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '2px',
  },
  dollar: {
    fontSize: '14px',
    color: '#1A202C',
  },
  amount: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#1A202C',
  },
  perDay: {
    fontSize: '12px',
    fontWeight: 500,
    color: '#90A3BF',
    marginLeft: '2px',
  },
  image: {
    width: '100%',
    height: '220px',
    objectFit: 'contain',
    mixBlendMode: 'multiply',
    margin: '10px auto',
    display: 'block',
  },
  specs: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  spec: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  specText: {
    fontSize: '12px',
    fontWeight: 500,
    color: '#90A3BF',
  },
  rentBtn: {
    backgroundColor: '#6464C4',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    padding: '14px 20px',
    width: '100%',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: '10px',
  },
  arrowCircle: {
    backgroundColor: '#9FA1D6',
    color: 'white',
    borderRadius: '8px',
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    fontSize: '14px',
    position: 'absolute',
    right: '10px',
  },

}

export default CarCard