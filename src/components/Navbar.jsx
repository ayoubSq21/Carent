function Navbar() {
    return (
        <nav style={styles.nav}>
            <div style={styles.container}>

                {/* Logo */}
                <h1 style={styles.logo}>CARENT</h1>

                {/* Liens de navigation */}
                <ul style={styles.navLinks}>
                    <li>Home</li>
                    <li style={styles.activeLink}>Car Catalogue</li>
                    <li>Contact Us</li>
                    <li>Help</li>
                </ul>

                {/* Boutons */}
                <div style={styles.buttons}>
                    <button style={styles.registerBtn}>Register</button>
                    <button style={styles.signInBtn}>Sign In</button>
                </div>

            </div>
        </nav>
    )
}

const styles = {
    nav: {
        backgroundColor: 'white',
        padding: '20px 40px',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
    },
    logo: {
        fontSize: '22px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '3px',
    },
    navLinks: {
        display: 'flex',
        listStyle: 'none',
        gap: '20px',
        cursor: 'pointer',
        color: '#596780',
        fontWeight: 500,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    activeLink: {
        fontWeight: 600,
        color: '#000',
    },
    buttons: {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    registerBtn: {
        background: 'none',
        border: 'none',
        color: '#503f93',
        fontWeight: 600,
        cursor: 'pointer',
        fontSize: '14px',
    },
    signInBtn: {
        color: '#503f93',
        background: 'none',
        border: '2px solid #d8d2d2',
        borderRadius: '12px',
        padding: '8px 20px',
        fontWeight: 600,
        cursor: 'pointer',
        fontSize: '14px',
    },
}

export default Navbar