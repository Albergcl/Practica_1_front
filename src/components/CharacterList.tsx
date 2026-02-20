// src/components/Character/CharacterList.tsx
import type { Character } from '../types/character';
import CharacterCard from './CharacterCard';

type Props = {
  characters: Character[];
};

const CharacterList = ({ characters }: Props) => {
  return (
    <div className="list">
      {characters.map((c, i) => <CharacterCard key={i} character={c} />)}
    </div>
  );
};

export default CharacterList;