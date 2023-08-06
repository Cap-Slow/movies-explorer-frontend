import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SliderMenu from '../SliderMenu/SliderMenu';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import firstImagePath from '../../images/movie-placeholders/33slova.jpg';
import secondImagePath from '../../images/movie-placeholders/second-image.jpg';
import thirdImagePath from '../../images/movie-placeholders/third-image.jpg';
import fourthImagePath from '../../images/movie-placeholders/fourth-image.jpg';
import fifthImagePath from '../../images/movie-placeholders/fifth-image.jpg';
import sixthImagePath from '../../images/movie-placeholders/sixth-image.jpg';
import seventhImagePath from '../../images/movie-placeholders/seventh-image.jpg';
import eighthImagePath from '../../images/movie-placeholders/eighth-image.jpg';
import ninthImagePath from '../../images/movie-placeholders/ninth-image.jpg';
import tenthImagePath from '../../images/movie-placeholders/tenth-image.jpg';
import eleventhImagePath from '../../images/movie-placeholders/eleventh-image.jpg';
import twelfthImagePath from '../../images/movie-placeholders/twelfth-image.jpg';
import Footer from '../Footer/Footer';

function Movies({ onMenuOpen, isMenuOpen, closeMenu, isLoading }) {
  return (
    <>
      <Header isLoggedIn={true}>
        <Navigation onMenuOpen={onMenuOpen} />
        <SliderMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </Header>
      <section className="movies">
        <SearchForm />
        {isLoading && <Preloader />}
        <MoviesCardList isMoviesPage={true}>
          <MoviesCard
            title={'33 слова о дизайне'}
            duration={'1ч 17м'}
            imageLink={firstImagePath}
          >
            <button className="movies-card__save-button movies-card__save-element">
              Сохранить
            </button>
          </MoviesCard>
          <MoviesCard
            title={'Киноальманах «100 лет дизайна»'}
            duration={'1ч 17м'}
            imageLink={secondImagePath}
          >
            <button className="movies-card__saved-icon movies-card__save-element"></button>
          </MoviesCard>
          <MoviesCard
            title={'В погоне за Бенкси'}
            duration={'1ч 17м'}
            imageLink={thirdImagePath}
          >
            <button className="movies-card__save-button movies-card__save-element">
              Сохранить
            </button>
          </MoviesCard>
          <MoviesCard
            title={'Баския: Взрыв реальности'}
            duration={'1ч 17м'}
            imageLink={fourthImagePath}
          >
            <button className="movies-card__save-button movies-card__save-element">
              Сохранить
            </button>
          </MoviesCard>
          <MoviesCard
            title={'Бег это свобода'}
            duration={'1ч 17м'}
            imageLink={fifthImagePath}
          >
            <button className="movies-card__save-button movies-card__save-element">
              Сохранить
            </button>
          </MoviesCard>
          <MoviesCard
            title={'Книготорговцы'}
            duration={'1ч 17м'}
            imageLink={sixthImagePath}
          >
            <button className="movies-card__saved-icon movies-card__save-element"></button>
          </MoviesCard>
          <MoviesCard
            title={'Когда я думаю о Германии ночью'}
            duration={'1ч 17м'}
            imageLink={seventhImagePath}
          >
            <button className="movies-card__save-button movies-card__save-element">
              Сохранить
            </button>
          </MoviesCard>
          <MoviesCard
            title={'Gimme Danger: История Игги и The Stooges'}
            duration={'1ч 17м'}
            imageLink={eighthImagePath}
          >
            <button className="movies-card__save-button movies-card__save-element">
              Сохранить
            </button>
          </MoviesCard>
          <MoviesCard
            title={'Дженис: Маленькая девочка грустит'}
            duration={'1ч 17м'}
            imageLink={ninthImagePath}
          >
            <button className="movies-card__save-button movies-card__save-element">
              Сохранить
            </button>
          </MoviesCard>
          <MoviesCard
            title={'Соберись перед прыжком'}
            duration={'1ч 17м'}
            imageLink={tenthImagePath}
          >
            <button className="movies-card__save-button movies-card__save-element">
              Сохранить
            </button>
          </MoviesCard>
          <MoviesCard
            title={'Пи Джей Харви: A dog called money'}
            duration={'1ч 17м'}
            imageLink={eleventhImagePath}
          >
            <button className="movies-card__save-button movies-card__save-element">
              Сохранить
            </button>
          </MoviesCard>
          <MoviesCard
            title={'По волнам: Искусство звука в кино'}
            duration={'1ч 17м'}
            imageLink={twelfthImagePath}
          >
            <button className="movies-card__save-button movies-card__save-element">
              Сохранить
            </button>
          </MoviesCard>
        </MoviesCardList>
      </section>
      <Footer />
    </>
  );
}

export default Movies;
