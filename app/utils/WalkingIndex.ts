import axios from 'axios';

export const walkingIndex = async () => {
  axios.defaults.withCredentials = true;

  const url = `/B552584/ArpltnInforInqireSvc/getCtprvnRItmMesureDnsty?serviceKey=${process.env.NEXT_PUBLIC_SERVICE_KEY}`;

  try {
    const response = await axios.get(url);
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
    console.log('Body:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
