import { BrowserRouter, Link } from 'react-router-dom';
import ScrollingSubtitle from './ScrollingSubtitle';

const Header = () => {
  return (
    <header className='showcase'>
      <h1 className='nameShowcase'>Tim Soenksen</h1>

      <ScrollingSubtitle />
      <br></br>
      <BrowserRouter>
        <Link
          to={{
            pathname:
              'https://docs.google.com/document/d/1pm7hdlkKR-pJ04g-tnzmjzdBYbBETnA4Wi1aCldKOiM/edit?usp=sharing',
          }}
          target='_blank'
          className='showcaseButton'
        >
          Resume{' '}
        </Link>
      </BrowserRouter>

      <BrowserRouter>
        <Link
          to={{ pathname: 'mailto:contact@timsoenksen.com?subject=Hello!' }}
          target='_blank'
          className='showcaseButton'
        >
          Contact Me
        </Link>
      </BrowserRouter>
    </header>
  );
};

export default Header;
