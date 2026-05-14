
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{
        background: 'linear-gradient(135deg, #060d06 60%, #1a1f1a 100%)',
        fontFamily: 'Share Tech Mono, monospace',
        color: '#00ff41',
        border: '2px solid #00ff41',
        boxShadow: '0 0 24px #00ff4144',
        borderRadius: '18px',
        margin: '2rem',
        padding: '2rem',
        maxWidth: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <h1 style={{
          fontSize: '3rem',
          letterSpacing: '0.1em',
          textShadow: '0 0 8px #00ff41, 0 0 2px #fff',
          marginBottom: '1.5rem',
        }}>LINUX DRILL</h1>
        <p style={{
          fontSize: '1.3rem',
          color: '#ffb000',
          marginBottom: '2rem',
          textShadow: '0 0 4px #000',
        }}>
          Master the Linux terminal with in-depth command explanations, real-world examples, and Fedora tips.
        </p>
        <a
          className="App-link"
          href="extra/everyday-linux.md"
          style={{
            color: '#00ff41',
            background: '#131f13',
            border: '1px solid #00ff41',
            borderRadius: '8px',
            padding: '0.7em 1.5em',
            fontWeight: 'bold',
            textDecoration: 'none',
            margin: '0.5em',
            display: 'inline-block',
            boxShadow: '0 0 8px #00ff4144',
            transition: 'background 0.2s, color 0.2s',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Everyday Linux Usage
        </a>
        <a
          className="App-link"
          href="extra/command-explanations.md"
          style={{
            color: '#00ff41',
            background: '#131f13',
            border: '1px solid #00ff41',
            borderRadius: '8px',
            padding: '0.7em 1.5em',
            fontWeight: 'bold',
            textDecoration: 'none',
            margin: '0.5em',
            display: 'inline-block',
            boxShadow: '0 0 8px #00ff4144',
            transition: 'background 0.2s, color 0.2s',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Command Explanations
        </a>
        <p style={{
          marginTop: '2.5rem',
          color: '#55ddff',
          fontSize: '1.1rem',
        }}>
          <span style={{color:'#ff4444'}}>Fedora</span> friendly. <span style={{color:'#ffb000'}}>Retro</span> modern.
        </p>
      </header>
    </div>
  );
}

export default App;
