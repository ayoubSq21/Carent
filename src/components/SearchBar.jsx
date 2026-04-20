import { MapPin, Calendar } from 'lucide-react';
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div style={styles.container}>

      {/* Localisation */}
      <div style={styles.field}>
        <MapPin size={16} color="#90A3BF" />
        <span style={styles.text}>New Zealand</span>
      </div>


      <div style={styles.field}>
        <Calendar size={16} color="#90A3BF" fill="#90A3BF" />
        <span style={styles.text}>27/11/2020</span>
      </div>

      <div style={styles.field}>
        <Calendar size={16} color="#90A3BF" fill="#90A3BF" />
        <span style={styles.text}>30/11/2020</span>
      </div>

      <button style={styles.searchBtn}>
        <FaSearch size={20} color="#6464C4" />
      </button>

    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    backgroundColor: '#fcfafa',
    padding: '15px 30px',
    borderRadius: '50px',
    width: '100%',
    maxWidth: 'fit-content',
    margin: '30px auto',
    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
  },
  field: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  text: {
    color: '#596780',
    fontWeight: '500',
    fontSize: '14px',
  },
  searchBtn: {
    backgroundColor: '#ffffff',
    border: 'none',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
}

export default SearchBar