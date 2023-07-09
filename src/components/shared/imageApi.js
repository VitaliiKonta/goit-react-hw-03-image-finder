import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '36840369-fb18ae137a6d23def2ec2352c',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const searchImg = async (q, page) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      page,
    },
  });
  return data;
};
