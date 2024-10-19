export default function CharacterCard({ character }) {
  return (
    <div className="bg-white shadow rounded p-4 w-full">
      <img className="w-full h-48 object-cover rounded" src={character.image} alt={character.name} />
      <h3 className="text-lg font-semibold mt-2">{character.name}</h3>
    </div>
  );
}
