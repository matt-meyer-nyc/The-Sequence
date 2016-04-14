make new database
  use thesequence
make new collection in thesequence
  db.movies
add dummy data
  db.movies.insert({name: 'me', playlists: [ {playlist:'Dumbmovies', movies: [ {id: '47540', title: 'The Matrix', in_theaters: true, release_date: '1999-03-30', rating: 'R', poster:'http://screencrush.com/files/2012/05/operation-movie-poster-fake.jpg', overview: 'Movie about red and blue pills', duration: '200Y', trailer: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', dircetors: 'Wachowskis', cast:['John Wick', 'Jeri Hogarth', 'Laurence Fishburne', 'Elrond', 'Joe Pantoliano']},{id: '47540', title: 'The Matrix', in_theaters: true, release_date: '1999-03-30', rating: 'R', poster:'http://screencrush.com/files/2012/05/operation-movie-poster-fake.jpg', overview: 'Movie about red and blue pills', duration: '200Y', trailer: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', dircetors: 'Wachowskis', cast:['John Wick', 'Jeri Hogarth', 'Laurence Fishburne', 'Elrond', 'Joe Pantoliano'] }] }] })
