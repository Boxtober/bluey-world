export const getCharacters = async () => {
    const response = await fetch('../../public/characters.json');
    const data = await response.json();
    return data;
};
