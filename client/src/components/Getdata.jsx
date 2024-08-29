import React, { useEffect, useState } from 'react';

const apiKey = import.meta.env.VITE_API_KEY; 
 
export default function Getdata({query,searchbool}) {
   
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = `https://api.rawg.io/api/games?key=${apiKey}&page_size=40`;

        // Add search query if present
        if (query.trim()) {
          url += `&search=${encodeURIComponent(query)}`;
        }

        // Add genre filter if a genre is selected
        if (selectedGenres) {
          url += `&genres=${encodeURIComponent(selectedGenres)}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [query, selectedGenres, searchbool]);



  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/genres?key=${apiKey}`);
        const data = await response.json();
        setGenres(data.results);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);


  const handleClick = (id) => {
    const newTab = window.open  (`/game/${id}`, '_blank'); // Open the game detail page in a new tab
    if (newTab) newTab.focus();
  };

  const handleGenreChange = (genreId) => {
    setSelectedGenres([genreId]); // Only one genre can be selected
  };


  return (
    <>
    <div className='grid grid-cols-4 mt-8'>


  {/* Sidebar */}
  <div className='col-span-1 bg-dark-gradient text-dark-text shadow-md shadow-black m-3 rounded-lg p-2 sticky top-2 h-[90vh] flex flex-col'>
        <h1 className='mx-auto text-center text-xl font-semibold textglow p-2 m-3'>Genres</h1>
        <div className='flex-1 overflow-y-auto rounded-xl' >
          <ul className='p-2 bg-purple-900 '>
            {genres.map((genre) => (
              <li
                key={genre.id}
                className={`mx-auto text-center p-2 mb-3 cursor-pointer rounded-lg ${selectedGenres == genre.id ? `bg-emerald-600` : ``}`}
                onClick={() => handleGenreChange(genre.id)}
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

  {/* Main Content */}
<div className='col-span-3 m-3 p-3 h-full'>

    <ul className='grid grid-cols-2 gap-6'>
      {games.map((game) => (
        <li 
          className='text-white bg-dark-gradient cursor-pointer mx-10 my-5 dark:hover:shadow-md hover:brightness-110 dark:hover:shadow-purple-800  shadow-black shadow-xl rounded-md overflow-hidden'
          onClick={() => handleClick(game.id)}
          key={game.id}
        >
          <div className='flex flex-col h-full'>
            {/* Container for image and text */}
            <div className='relative overflow-hidden'>
              <img 
                src={game.background_image}
                alt={game.name}
                className='w-full h-48 object-cover  transition-transform duration-300 ease-in-out transform hover:scale-125'
              />
            </div>
            <p className='text-sm font-semibold p-3'>{game.name.trim()}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>

    </>
   );
}
