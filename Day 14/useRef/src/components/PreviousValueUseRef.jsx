import React, { useRef, useState, useEffect } from 'react'

const PreviousValueUseRef = () => {
    const prevCountRef = useRef(null)
    const [count, setCount] = useState(0)

    const styles = {
        container: {
            maxWidth: '400px',
            margin: '2rem auto',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            background: '#fff'
        },
        display: {
            textAlign: 'center',
            marginBottom: '2rem'
        },
        countText: {
            color: '#333',
            margin: '1rem 0'
        },
        span: {
            color: '#2196f3',
            fontWeight: 'bold'
        },
        buttonGroup: {
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center'
        },
        button: (type) => ({
            padding: '0.8rem 1.5rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            background: type === 'increment' ? '#4caf50' : '#f44336',
            color: 'white',
        })
    }

    useEffect(() => {
        prevCountRef.current = count
    }, [count])

    return (
        <div style={styles.container}>
            <div style={styles.display}>
                <h2 style={styles.countText}>Current Count: <span style={styles.span}>{count}</span></h2>
                <h2 style={styles.countText}>Previous Count: <span style={styles.span}>{prevCountRef.current}</span></h2>
            </div>
            <div style={styles.buttonGroup}>
                <button 
                    style={styles.button('increment')}
                    onClick={() => setCount(count + 1)}
                >
                    Increment
                </button>
                <button 
                    style={styles.button('decrement')}
                    onClick={() => setCount(count - 1)}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default PreviousValueUseRef