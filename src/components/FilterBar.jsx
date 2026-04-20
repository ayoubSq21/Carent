import { ChevronDown } from 'lucide-react'

function FilterBar() {
    return (
        <div style={styles.container}>

            {/* Titre */}
            <div style={styles.titleSection}>
                <h2 style={styles.title}>Car Catalogue</h2>
                <p style={styles.subtitle}>Explore out cars you might like!</p>
            </div>

            {/* Filtres */}
            <div style={styles.filters}>

                <button style={styles.filterBtn}>
                    <span>Price</span>
                    <ChevronDown size={14} color="#555" />
                </button>

                <button style={styles.filterBtn}>
                    <span>Manufacture</span>
                    <span style={styles.badge}>5</span>
                    <ChevronDown size={14} color="#555" />
                </button>

                <button style={styles.filterBtn}>
                    <span>Type</span>
                    <span style={styles.badge}>2</span>
                    <ChevronDown size={14} color="#555" />
                </button>

                <button style={styles.filterBtn}>
                    <span>Rating</span>
                    <ChevronDown size={14} color="#555" />
                </button>

            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '10px 20px',
        marginTop: '20px',
    },
    titleSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    },
    title: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#111',
    },
    subtitle: {
        fontSize: '16px',
        color: '#323232',
    },
    filters: {
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
    },
    filterBtn: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: 'white',
        border: '1.4px solid #cdcaca',
        borderRadius: '8px',
        padding: '8px 16px',
        cursor: 'pointer',
        fontSize: '14px',
        color: '#333',
    },
    badge: {
        backgroundColor: '#f97316',
        color: 'white',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '11px',
        fontWeight: 'bold',
    },
}

export default FilterBar