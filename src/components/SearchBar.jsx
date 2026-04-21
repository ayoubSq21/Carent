import { MapPin, Calendar, Search } from 'lucide-react'

function SearchBar({
  pickupLocation,
  setPickupLocation,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  onSubmitSearch,
}) {
  return (
    <form
      style={styles.form}
      onSubmit={(e) => {
        e.preventDefault()
        onSubmitSearch?.()
      }}
      aria-label="Booking search"
    >
      <div className="searchbar-inner" style={styles.inner}>
        <div style={styles.fieldBlock}>
          <span style={styles.fieldLabel}>Pickup location</span>
          <div style={styles.fieldRow}>
            <MapPin size={18} color="var(--text-secondary)" strokeWidth={1.75} aria-hidden />
            <input
              type="text"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              placeholder="Airport, city, or branch"
              style={styles.textInput}
              autoComplete="off"
              aria-label="Pickup location"
            />
          </div>
        </div>

        <div className="searchbar-divider" style={styles.divider} aria-hidden />

        <div style={styles.fieldBlock}>
          <span style={styles.fieldLabel}>Date range</span>
          <div style={styles.dateRow}>
            <div style={styles.dateCell}>
              <Calendar size={16} color="var(--text-secondary)" strokeWidth={1.75} aria-hidden />
              <input
                type="date"
                value={startDate}
                onChange={(e) => {
                  const v = e.target.value
                  setStartDate(v)
                  if (endDate && v && endDate < v) setEndDate(v)
                }}
                style={styles.dateInput}
                aria-label="Pickup date"
              />
            </div>
            <span style={styles.dateSep}>→</span>
            <div style={styles.dateCell}>
              <Calendar size={16} color="var(--text-secondary)" strokeWidth={1.75} aria-hidden />
              <input
                type="date"
                value={endDate}
                min={startDate || undefined}
                onChange={(e) => setEndDate(e.target.value)}
                style={styles.dateInput}
                aria-label="Return date"
              />
            </div>
          </div>
        </div>

        <div className="searchbar-divider" style={styles.divider} aria-hidden />

        <button type="submit" style={styles.searchBtn} aria-label="Search availability">
          <Search size={20} color="var(--text-on-accent)" strokeWidth={2} />
          <span style={styles.searchLabel}>Search</span>
        </button>
      </div>
    </form>
  )
}

const styles = {
  form: {
    width: '100%',
    marginBottom: '8px',
  },
  inner: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    gap: '0',
    backgroundColor: 'var(--bg-elevated)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    boxShadow: 'var(--shadow-search)',
    overflow: 'hidden',
    minHeight: '72px',
  },
  fieldBlock: {
    flex: '1 1 220px',
    padding: '14px 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '6px',
    minWidth: 0,
  },
  fieldLabel: {
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'var(--text-secondary)',
  },
  fieldRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    minWidth: 0,
  },
  textInput: {
    flex: 1,
    minWidth: 0,
    border: 'none',
    outline: 'none',
    fontSize: '15px',
    fontWeight: 500,
    color: 'var(--text)',
    background: 'transparent',
    fontFamily: 'inherit',
  },
  dateRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  dateCell: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    minWidth: 0,
  },
  dateInput: {
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--text)',
    background: 'transparent',
    fontFamily: 'inherit',
    minWidth: '8.5rem',
  },
  dateSep: {
    color: 'var(--text-subtle)',
    fontSize: '14px',
    fontWeight: 500,
  },
  divider: {
    width: '1px',
    backgroundColor: 'var(--border)',
    alignSelf: 'stretch',
    flexShrink: 0,
  },
  searchBtn: {
    flex: '0 0 auto',
    minWidth: '132px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '0 24px',
    border: 'none',
    backgroundColor: 'var(--accent)',
    color: 'var(--text-on-accent)',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  searchLabel: {
    letterSpacing: '0.02em',
  },
}

export default SearchBar
