import axios from '@/libs/axios';

const getBreedsList = async (petType: string) => {
  const breedValue = petType === '강아지' ? 'dogs' : 'cats';
  const response = await axios.get(`/pets/breeds/${breedValue}`);
  const result = response.data.map((value: any) => ({ ...value }));

  return result;
};

export default getBreedsList;
