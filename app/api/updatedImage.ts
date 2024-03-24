import axios from '@/libs/axios';

export const updatedImage = async (image: File) => {
  const formData = new FormData();
  formData.append('file', image);

  try {
    const response = await axios.post('/uploads/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return await response.data.data;
  } catch (e) {
    console.log('🚀 ~ updatedImage ~ e:', e);
  }
};
