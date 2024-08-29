import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Gamedetail() {
  const { id } = useParams(); // Get the game ID from the URL
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const formatDate = (dateString) => {
    const placeholderDate = null; // Adjust if your API uses a different placeholder
    if (dateString === placeholderDate) {
      return 'Coming Soon !';
    }
    
    // Debugging: Log the dateString
    console.log('Original dateString:', dateString);

    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const fetchGameDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = 'f842dbeef6ce4c12bcced2b41d4b48d0'; // Ensure your API key is correct
        const url = `https://api.rawg.io/api/games/${id}?key=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setGame(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetail();
  }, [id]);

  if (loading) return <div className='mx-auto flex justify-center items-center text-2xl'>Loading...</div>;
  if (error) return <p>Error: {error}</p>;
  if (!game) return <p>No game data found</p>;

  return (
    <div className=" p-5">
      
      
    <div
      className="relative p-10 bg-cover bg-center  bg-no-repeat rounded-lg border-2 border-black shadow-2xl"

      style={{ backgroundImage: `url(${game.background_image})` }}
    >
      {/* Blurred background image */}
      <div className="absolute inset-0 bg-black bg-opacity-15 brightness-50  backdrop-blur-lg rounded-lg" ></div>

      <img
        src={game.background_image}
        alt={game.name}
        className="rounded-lg shadow-lg shadow-black brightness-110  size-3/4 mx-auto object-cover mt-4 mb-4 relative z-10 border-2 "
        style={{ borderImage: 'linear-gradient(to right, rgba(255,255,255,0), rgba(0,0,0,0)) 1' }}
      />

      
    </div>




      <div className=" cursor-pointer mt-10 mx-5 ">
      <p className="mb-2 text-3xl">
          <span className="font-semibold  ">{game.name}</span> 
        </p>
        <p className="mb-2 text-lg">
          <span className="font-semibold ">Release Date </span>
     
            <span className=' text-gray-900 dark:text-teal-100 px-4'>{formatDate(game.released)} </span>
        </p>
        <p className="mb-2 text-lg">
          <span className="font-semibold ">Genres &nbsp;  </span> <span className=" text-gray-900 dark:text-teal-100">{game.genres.map((genre) => genre.name).join(', ')}
          </span>  </p>
        <p className="mb-2 text-lg">
          <span className="font-semibold  ">Rating    &nbsp;</span>  <span className=" text-gray-900 dark:text-teal-100">  {game.rating} / 5  </span> 
        </p>

        {game.platforms && (
          <p className="mb-2 text-lg">
            <span className="font-semibold  ">Platforms &nbsp; </span> <span className=" text-gray-900 dark:text-teal-100"> {game.platforms.map((platform) => platform.platform.name).join(', ')}
            </span>          </p>
        )}
        {game.developers && (
          <p className="mb-2 text-lg">
            <span className="font-semibold  ">Developers &nbsp; </span> <span className=" text-gray-900 dark:text-teal-100">{game.developers.map((developer) => developer.name).join(', ')}
            </span>  </p>
        )}
        {game.publishers && (
          <p className="mb-2 text-lg">
            <span className="font-semibold  ">Publishers &nbsp; </span> <span className=" text-gray-900 dark:text-teal-100">  {game.publishers.map((publisher) => publisher.name).join(', ')}</span>
          </p>
        )}
        <p className="text-lg text-justify ">
          <span className="font-semibold  ">Description  &nbsp; </span> <br /> <span className='mt-4 text-gray-900 dark:text-teal-100'>{game.description_raw}</span> 
        </p>



 
      </div>
    </div>
  );
}
