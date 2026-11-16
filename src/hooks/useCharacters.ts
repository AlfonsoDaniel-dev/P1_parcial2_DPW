import { useEffect, useState } from "react";
import { adaptCharacter } from "../types/Character";
import type { ApiCharacterResponse, Character } from "../types/Character";

const API_URL = "https://rickandmortyapi.com/api/character";
const CHARACTER_LIMIT = 10;

interface UseCharactersReturn {
    characters: Character[];
    loading: boolean;
    error: string | null;
}

export const useCharacters = (): UseCharactersReturn => {

    const [characters, setCharacters] = useState<Character[]>([]);

    const [loading, setLoading] = useState<boolean>(true);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const loadCharacters = async (): Promise<void> => {

            try {

                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error(`error ${response.status}`);
                }

                const data: ApiCharacterResponse = await response.json();

                const firstCharacters = data.results.slice(0, CHARACTER_LIMIT);

                setCharacters(firstCharacters.map(adaptCharacter));

            } catch (e) {

                setError((e as Error).message);

            } finally {
                setLoading(false);
            }
        };

        loadCharacters();
    }, []);

    return { characters, loading, error };
};
