export default function EpisodesList({ episodes, onEpisodeClick, selectedEpisode, onClearSelection }) {
  return (
    <div className="w-full sm:w-1/4 p-4 bg-gray-800 text-white">
      <h2 className="text-xl font-bold mb-4">Episodes</h2>
      <ul className="space-y-2">
        {episodes.map((episode) => (
          <li 
            key={episode.id} 
            className={`p-2 cursor-pointer rounded ${
              selectedEpisode === episode.id 
                ? 'bg-blue-600 border-2 border-blue-500' // Highlight selected episode
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => onEpisodeClick(episode.id)}
          >
            {episode.name}
          </li>
        ))}
      </ul>
      {selectedEpisode && (
        <button 
          className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-400"
          onClick={onClearSelection}
        >
          Clear Selection
        </button>
      )}
    </div>
  );
}
