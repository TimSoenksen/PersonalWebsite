import HeaderButtons from './HeaderButtons';

const Header = () => {
  return (
    <header className='showcase'>
      <h1 className='nameShowcase'>Tim Soenksen</h1>
      <p className='nameSubtitle'>Web Developer | Programmer | IT Specialist</p>
      <HeaderButtons
        link='https://docs.google.com/document/d/1pm7hdlkKR-pJ04g-tnzmjzdBYbBETnA4Wi1aCldKOiM/edit?usp=sharing'
        text='Resume'
      />
      <HeaderButtons
        link='mailto:contact@timsoenksen.com?subject=Hello!'
        text='Contact Me'
      />
    </header>
  );
};

export default Header;
