import { useState } from 'react'
import { Fuel, Star, Flame, Sparkles, Heart, Users, Repeat2 } from 'lucide-react'

const iconProps = { size: 18, color: 'var(--spec-icon)', strokeWidth: 1.75 }

function CarCard({ car }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const status = car.price > 55 ? 'popular' : 'new'

  return (
    <article className="car-card" style={styles.card}>
      <div style={styles.imageStage}>
        <div style={styles.badgeLeft}>
          {status === 'popular' ? (
            <span
              style={{
                ...styles.badge,
                backgroundColor: 'var(--badge-popular-bg)',
                color: 'var(--badge-popular-fg)',
              }}
            >
              <Flame size={12} strokeWidth={1.75} /> Popular
            </span>
          ) : (
            <span
              style={{
                ...styles.badge,
                backgroundColor: 'var(--badge-new-bg)',
                color: 'var(--badge-new-fg)',
              }}
            >
              <Sparkles size={12} strokeWidth={1.75} /> New
            </span>
          )}
        </div>
        <button
          type="button"
          className="wishlist-btn"
          style={styles.wishlist}
          aria-pressed={isWishlisted}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart
            size={18}
            strokeWidth={1.75}
            color={isWishlisted ? '#DC2626' : 'var(--heart-off)'}
            fill={isWishlisted ? '#DC2626' : 'none'}
          />
        </button>
        <div style={styles.imageFrame}>
          <img src={car.image} alt={car.name} style={styles.image} />
        </div>
      </div>

      <div style={styles.body}>
        <div style={styles.titleRow}>
          <h3 style={styles.name}>{car.name}</h3>
          <div style={styles.rating} aria-label="Rating 4.8 out of 5">
            <Star size={14} color="#F59E0B" fill="#FBBF24" strokeWidth={0} />
            <span style={styles.ratingText}>4.8</span>
          </div>
        </div>

        <div style={styles.specs}>
          <div style={styles.spec}>
            <Repeat2 {...iconProps} />
            <span style={styles.specLabel}>{car.transmission}</span>
          </div>
          <div style={styles.spec}>
            <Users {...iconProps} />
            <span style={styles.specLabel}>{car.seats} seats</span>
          </div>
          <div style={styles.spec}>
            <Fuel {...iconProps} />
            <span style={styles.specLabel}>{car.mpg} MPG</span>
          </div>
        </div>

        <div style={styles.priceRow}>
          <span style={styles.currency}>$</span>
          <span style={styles.amount}>{car.price}</span>
          <span style={styles.per}>/day</span>
        </div>

        <button type="button" className="rent-now-btn" style={styles.rentBtn}>
          Rent Now
        </button>
      </div>
    </article>
  )
}

const styles = {
  card: {
    backgroundColor: 'var(--bg-elevated)',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    boxShadow: 'var(--shadow-card)',
  },
  imageStage: {
    position: 'relative',
    aspectRatio: '3 / 4',
    background:
      'linear-gradient(180deg, var(--image-stage-top) 0%, var(--image-stage-bot) 100%)',
    borderBottom: '1px solid var(--border)',
  },
  imageFrame: {
    position: 'absolute',
    inset: '12px 16px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    objectPosition: 'center',
    filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.08))',
  },
  badgeLeft: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    zIndex: 2,
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 8px',
    borderRadius: '8px',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.02em',
  },
  wishlist: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 2,
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--wishlist-bg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: 0,
  },
  body: {
    padding: '16px 16px 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    flex: 1,
  },
  titleRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '12px',
  },
  name: {
    fontSize: '15px',
    fontWeight: 600,
    lineHeight: 1.35,
    color: 'var(--name-text)',
    letterSpacing: '-0.01em',
    textTransform: 'capitalize',
    margin: 0,
    flex: 1,
    minWidth: 0,
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    flexShrink: 0,
  },
  ratingText: {
    fontSize: '13px',
    fontWeight: 600,
    color: 'var(--rating-text)',
  },
  specs: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '8px',
    paddingTop: '12px',
    borderTop: '1px solid var(--border)',
  },
  spec: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    flex: 1,
    minWidth: 0,
  },
  specLabel: {
    fontSize: '11px',
    fontWeight: 500,
    color: 'var(--text-secondary)',
    textAlign: 'center',
    lineHeight: 1.2,
  },
  priceRow: {
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
    gap: '2px',
    paddingTop: '4px',
  },
  currency: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--text)',
  },
  amount: {
    fontSize: '24px',
    fontWeight: 700,
    color: 'var(--text)',
    letterSpacing: '-0.02em',
  },
  per: {
    fontSize: '12px',
    fontWeight: 500,
    color: 'var(--text-tertiary)',
    marginLeft: '2px',
  },
  rentBtn: {
    width: '100%',
    marginTop: '4px',
    padding: '12px 16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'var(--accent)',
    color: 'var(--text-on-accent)',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'inherit',
    letterSpacing: '0.02em',
  },
}

export default CarCard
