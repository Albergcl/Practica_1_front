// src/components/Character/CharacterCard.tsx
import type { Character } from '../types/character';

type Props = {
  character: Character
}

const CharacterCard = ({ character }: Props) => {
  return (
    <div className="card">
      <h3>{character.name}</h3>
      <p><strong>Género:</strong> {character.gender}</p>
      <p><strong>Año nacimiento:</strong> {character.birth_year}</p>
    </div>
  );
};

export default CharacterCard;