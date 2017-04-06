import { connect } from 'react-redux';
import { getMovies } from 'actions/movies';
import React, { Component } from 'react';

import Menu from 'components/Menu';
import InfiniteScroll from 'components/InfiniteScroll';

import placeholder from '../../../assets/img/cinema-logo.png';

class Movies extends Component {
  static propTypes = {
    isLoading: React.PropTypes.bool,
    errorMessage: React.PropTypes.string,
    movies: React.PropTypes.array,
    paging: React.PropTypes.shape({
      page: React.PropTypes.number,
      isLastPage: React.PropTypes.bool,
    }),
    getMovies: React.PropTypes.func,
  }

  constructor() {
    super();

    this.loadMoreMovies = this.loadMoreMovies.bind(this);
  }

  componentWillMount() {
    this.loadMoreMovies();
  }

  loadMoreMovies() {
    this.props.getMovies();
  }

  render() {
    const {
      errorMessage,
      movies,
      isLoading,
      paging: { isLastPage },
    } = this.props;

    return (
      <div className='Page'>
        <Menu />
        <div>
          {errorMessage ? <div className='ErrorMessage'>{ errorMessage }</div> :
          <InfiniteScroll
            isLastPage={ isLastPage }
            action={ this.loadMoreMovies }
            isLoading={ isLoading }
          >
            <div className='ContainerList'>
              {movies.map((movie, index) =>
                <div className='Movie' key={ index }>
                  <div className='imgContainer'>
                    <img src={ movie.Poster === 'N/A' ? placeholder : movie.Poster } alt='Poster' />
                  </div>
                  <p>{movie.Title}</p>
                </div>)}
            </div>
          </InfiniteScroll>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.movies });

const mapDispatchToProps = {
  getMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
