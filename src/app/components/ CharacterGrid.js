import CharacterCard from './CharacterCard';

export default function CharacterGrid({ characters }) {
  return (
    <div className="w-full sm:w-3/4 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
