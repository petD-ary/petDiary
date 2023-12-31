import axios from '@/libs/axios';

const getBreedsList = async (petType: string) => {
  const breedValue = petType === '강아지' ? 'dogs' : 'cats';
  let result: any[] = [];
  await axios.get(`/pets/breeds/${breedValue}`).then((response) => {
    response.data.forEach((value: any) => {
      result.push({ ...value });
    });
  });
  return result;
};

export default getBreedsList;
