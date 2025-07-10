// static
import flashImg from 'assets/icons/ion_flash-sharp.svg';

const Banner = () => {
  return (
    <div className="container banner">
      <p className="banner-text">Доставка вкусной еды и полуфабрикатов</p>
      <span className="banner-text-special">
        <img alt="Иконка молнии" src={flashImg} />
        быстро
      </span>
    </div>
  );
};

export default Banner;
