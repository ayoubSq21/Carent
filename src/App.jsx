import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import FilterSidebar from './components/FilterSidebar'
import CarCard from './components/CarCard'
import cars from './data/cars'

const DEFAULT_LOCATION = 'Auckland Airport'
const DEFAULT_START = '2026-04-21'
const DEFAULT_END = '2026-04-25'

function App() {
  const [pickupLocation, setPickupLocation] = useState(DEFAULT_LOCATION)
  const [startDate, setStartDate] = useState(DEFAULT_START)
  const [endDate, setEndDate] = useState(DEFAULT_END)

  const [keyword, setKeyword] = useState('')
  const [filterTransmission, setFilterTransmission] = useState('All')
  const [filterCapacity, setFilterCapacity] = useState('All')
  const [filterBrand, setFilterBrand] = useState('All')
  const [sortOrder, setSortOrder] = useState('default')

  const priceFloor = useMemo(() => Math.min(...cars.map((c) => c.price)), [])
  const priceCeil = useMemo(() => Math.max(...cars.map((c) => c.price)), [])

  const [priceMin, setPriceMin] = useState(priceFloor)
  const [priceMax, setPriceMax] = useState(priceCeil)

  const brands = useMemo(() => {
    const set = new Set(cars.map((c) => c.brand))
    return [...set].sort()
  }, [])

  const filteredCars = useMemo(() => {
    const lo = Math.min(priceMin, priceMax)
    const hi = Math.max(priceMin, priceMax)

    let result = cars.filter((car) => car.price >= lo && car.price <= hi)

    if (keyword.trim().length > 0) {
      const q = keyword.toLowerCase()
      result = result.filter(
        (car) =>
          car.name.toLowerCase().includes(q) || car.brand.toLowerCase().includes(q),
      )
    }

    if (filterBrand !== 'All') {
      result = result.filter((car) => car.brand === filterBrand)
    }

    if (filterTransmission !== 'All') {
      result = result.filter((car) => car.transmission === filterTransmission)
    }

    if (filterCapacity !== 'All') {
      result = result.filter((car) => car.seats === parseInt(filterCapacity, 10))
    }

    if (sortOrder === 'priceLowToHigh') {
      result = [...result].sort((a, b) => a.price - b.price)
    } else if (sortOrder === 'priceHighToLow') {
      result = [...result].sort((a, b) => b.price - a.price)
    }

    return result
  }, [
    keyword,
    filterTransmission,
    filterCapacity,
    filterBrand,
    sortOrder,
    priceMin,
    priceMax,
  ])

  const hasActiveFilters =
    keyword.trim().length > 0 ||
    filterBrand !== 'All' ||
    filterTransmission !== 'All' ||
    filterCapacity !== 'All' ||
    priceMin !== priceFloor ||
    priceMax !== priceCeil ||
    pickupLocation.trim() !== DEFAULT_LOCATION ||
    startDate !== DEFAULT_START ||
    endDate !== DEFAULT_END

  const clearAll = () => {
    setKeyword('')
    setFilterBrand('All')
    setFilterTransmission('All')
    setFilterCapacity('All')
    setSortOrder('default')
    setPriceMin(priceFloor)
    setPriceMax(priceCeil)
    setPickupLocation(DEFAULT_LOCATION)
    setStartDate(DEFAULT_START)
    setEndDate(DEFAULT_END)
  }

  return (
    <div className="app-page" style={styles.page}>
      <Navbar />

      <div className="layout-shell">
        <FilterSidebar
          keyword={keyword}
          setKeyword={setKeyword}
          priceMin={priceMin}
          setPriceMin={setPriceMin}
          priceMax={priceMax}
          setPriceMax={setPriceMax}
          priceFloor={priceFloor}
          priceCeil={priceCeil}
          brand={filterBrand}
          setBrand={setFilterBrand}
          brands={brands}
          filterCapacity={filterCapacity}
          setFilterCapacity={setFilterCapacity}
          filterTransmission={filterTransmission}
          setFilterTransmission={setFilterTransmission}
          onClearAll={clearAll}
          hasActiveFilters={hasActiveFilters}
        />

        <main className="app-main" style={styles.main}>
          <SearchBar
            pickupLocation={pickupLocation}
            setPickupLocation={setPickupLocation}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            onSubmitSearch={() => {}}
          />

          <div style={styles.toolbar}>
            <div>
              <h1 style={styles.heading}>Fleet</h1>
              <p style={styles.subheading}>
                {filteredCars.length} vehicle{filteredCars.length !== 1 ? 's' : ''} available
              </p>
            </div>
            <div style={styles.sortWrap}>
              <label htmlFor="sort-fleet" style={styles.sortLabel}>
                Sort
              </label>
              <select
                id="sort-fleet"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                style={styles.sortSelect}
              >
                <option value="default">Recommended</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div style={styles.grid}>
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
            {filteredCars.length === 0 && (
              <div style={styles.empty}>
                <p style={styles.emptyText}>No vehicles match your filters.</p>
                <button type="button" style={styles.emptyBtn} onClick={clearAll}>
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: 'var(--bg-page)',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    minWidth: 0,
    padding: '28px 28px 48px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap',
    paddingBottom: '4px',
    borderBottom: '1px solid var(--border)',
  },
  heading: {
    fontSize: '22px',
    fontWeight: 600,
    letterSpacing: '-0.02em',
    color: 'var(--text)',
    margin: 0,
  },
  subheading: {
    marginTop: '4px',
    fontSize: '14px',
    color: 'var(--text-secondary)',
    fontWeight: 500,
  },
  sortWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  sortLabel: {
    fontSize: '13px',
    fontWeight: 500,
    color: 'var(--text-secondary)',
  },
  sortSelect: {
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--bg-elevated)',
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--name-text)',
    cursor: 'pointer',
    fontFamily: 'inherit',
    minWidth: '180px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
    alignItems: 'stretch',
  },
  empty: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    padding: '48px 16px',
    border: '1px dashed var(--border-hover)',
    borderRadius: '8px',
    backgroundColor: 'var(--bg-elevated)',
  },
  emptyText: {
    color: 'var(--text-secondary)',
    fontSize: '15px',
    marginBottom: '16px',
  },
  emptyBtn: {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'var(--accent)',
    color: 'var(--text-on-accent)',
    fontWeight: 600,
    fontSize: '14px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
}

export default App
