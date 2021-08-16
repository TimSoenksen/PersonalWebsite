import '../ScrollingSubtitle.css';

const ScrollingSubtitle = () => {
  return (
    <div>
      <div className='content'>
        <div className='content__container'>
          <ul className='content__container__list'>
            <li className='content__container__list__item'>Programmer</li>
            <li className='content__container__list__item'>Web Developer</li>
            <li className='content__container__list__item'>IT Person</li>
            <li className='content__container__list__item'>Coffee Drinker</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScrollingSubtitle;
