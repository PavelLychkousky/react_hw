import React from 'react';
import MovieDetails from '../../src/client/app/components/MovieDetails';
import renderer from 'react-test-renderer';

it('Should show movie info', () => {
  let props = {
    movie: {
      id: 1, title: 'Movie 1', releaseYear: 2014, genre: 'Genre name', director: 'director 1', rating: '4.1', duration: 105
    }
  };
  const component = renderer.create(
    <MovieDetails {...props}></MovieDetails>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});