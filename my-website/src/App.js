import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='showcase'>
        <h1 className='nameShowcase'>Tim Soenksen</h1>
        <p className='nameSubtitle'>
          (Projects will be showcased here eventually!)
        </p>
      </header>
      <div className='showcaseButtonContainer'>
        <button
          className='showcaseButton'
          onClick={() =>
            window.open(
              'https://docs.google.com/document/d/1pm7hdlkKR-pJ04g-tnzmjzdBYbBETnA4Wi1aCldKOiM/edit?usp=sharing',
              '_blank',
            )
          }
        >
          Resume
        </button>
        <button
          className='showcaseButton'
          onClick={() =>
            window.open('mailto:contact@timsoenksen.com?subject=Hello!')
          }
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default App;
