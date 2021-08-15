const HeaderButtons = ({ link, text }) => {
  return (
    <button
      className='showcaseButton'
      onClick={() => window.open({ link }, '_blank')}
    >
      {text}
    </button>
  );
};

export default HeaderButtons;
