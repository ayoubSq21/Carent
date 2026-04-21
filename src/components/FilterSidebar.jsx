const divider = { borderBottom: '1px solid var(--border)', paddingBottom: 20, marginBottom: 20 }

function FilterSidebar({
  keyword,
  setKeyword,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  priceFloor,
  priceCeil,
  brand,
  setBrand,
  brands,
  filterCapacity,
  setFilterCapacity,
  filterTransmission,
  setFilterTransmission,
  onClearAll,
  hasActiveFilters,
}) {
  return (
    <aside className="filter-sidebar" style={styles.aside} aria-label="Filters">
      <div style={{ ...styles.header, ...divider }}>
        <h2 style={styles.title}>Filters</h2>
        {hasActiveFilters && (
          <button type="button" style={styles.clearBtn} onClick={onClearAll}>
            Clear all
          </button>
        )}
      </div>

      <div style={divider}>
        <label htmlFor="filter-keyword" style={styles.label}>
          Model or keyword
        </label>
        <input
          id="filter-keyword"
          type="search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search fleet…"
          style={styles.input}
          autoComplete="off"
        />
      </div>

      <div style={divider}>
        <p style={styles.sectionLabel}>Price / day ($)</p>
        <div style={styles.row2}>
          <div>
            <label htmlFor="price-min" style={styles.microLabel}>
              Min
            </label>
            <input
              id="price-min"
              type="number"
              min={priceFloor}
              max={priceCeil}
              value={priceMin}
              onChange={(e) => setPriceMin(Number(e.target.value))}
              style={styles.input}
            />
          </div>
          <div>
            <label htmlFor="price-max" style={styles.microLabel}>
              Max
            </label>
            <input
              id="price-max"
              type="number"
              min={priceFloor}
              max={priceCeil}
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
              style={styles.input}
            />
          </div>
        </div>
      </div>

      <div style={divider}>
        <label htmlFor="filter-brand" style={styles.label}>
          Brand
        </label>
        <select id="filter-brand" value={brand} onChange={(e) => setBrand(e.target.value)} style={styles.select}>
          <option value="All">All brands</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div style={divider}>
        <label htmlFor="filter-seats" style={styles.label}>
          Seats
        </label>
        <select
          id="filter-seats"
          value={filterCapacity}
          onChange={(e) => setFilterCapacity(e.target.value)}
          style={styles.select}
        >
          <option value="All">Any capacity</option>
          <option value="2">2 seats</option>
          <option value="5">5 seats</option>
          <option value="8">8 seats</option>
          <option value="9">9 seats</option>
        </select>
      </div>

      <div>
        <label htmlFor="filter-transmission" style={styles.label}>
          Transmission
        </label>
        <select
          id="filter-transmission"
          value={filterTransmission}
          onChange={(e) => setFilterTransmission(e.target.value)}
          style={styles.select}
        >
          <option value="All">Any transmission</option>
          <option value="Manual">Manual</option>
          <option value="Auto">Automatic</option>
        </select>
      </div>
    </aside>
  )
}

const styles = {
  aside: {
    flexShrink: 0,
    backgroundColor: 'var(--bg-elevated)',
    borderRight: '1px solid var(--border)',
    padding: '24px 20px 32px',
    alignSelf: 'stretch',
    minHeight: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
  },
  title: {
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '0.02em',
    color: 'var(--text)',
  },
  clearBtn: {
    border: 'none',
    background: 'none',
    color: 'var(--link)',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
    padding: '4px 0',
  },
  sectionLabel: {
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--text-secondary)',
    marginBottom: '10px',
  },
  label: {
    display: 'block',
    fontSize: '13px',
    fontWeight: 500,
    color: 'var(--label-text)',
    marginBottom: '8px',
  },
  microLabel: {
    display: 'block',
    fontSize: '11px',
    fontWeight: 500,
    color: 'var(--text-secondary)',
    marginBottom: '6px',
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--input-bg)',
    fontSize: '14px',
    color: 'var(--text)',
    outline: 'none',
    fontFamily: 'inherit',
  },
  select: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--input-bg)',
    fontSize: '14px',
    color: 'var(--text)',
    cursor: 'pointer',
    outline: 'none',
    fontFamily: 'inherit',
    fontWeight: 500,
  },
  row2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
}

export default FilterSidebar
