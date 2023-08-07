import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SliderMenu from '../SliderMenu/SliderMenu';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';
import firstImagePath from '../../images/movie-placeholders/33slova.jpg';
import secondImagePath from '../../images/movie-placeholders/second-image.jpg';
import thirdImagePath from '../../images/movie-placeholders/third-image.jpg';

function SavedMovies({ isMenuOpen, closeMenu, onMenuOpen }) {
  return (
    <>
      <Header isLoggedIn={true}>
        <Navigation onMenuOpen={onMenuOpen} />
        <SliderMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </Header>
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList isMoviesPage={false}>
          <MoviesCard
            title={'33 слова о дизайне'}
            duration={'1ч 17м'}
            imageLink={firstImagePath}
          >
            <button className="movies-card__delete-icon movies-card__save-element"></button>
          </MoviesCard>
          <MoviesCard
            title={'Киноальманах «100 лет дизайна»'}
            duration={'1ч 17м'}
            imageLink={secondImagePath}
          >
            <button className="movies-card__delete-icon movies-card__save-element"></button>
          </MoviesCard>
          <MoviesCard
            title={'В погоне за Бенкси'}
            duration={'1ч 17м'}
            imageLink={thirdImagePath}
          >
            <button className="movies-card__delete-icon movies-card__save-element"></button>
          </MoviesCard>
        </MoviesCardList>
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
