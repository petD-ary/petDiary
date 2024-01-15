import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});
// khaiValue
export const fineDustApi = axios.create({
  baseURL: 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc',
  params: {
    serviceKey: `${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
    returnType: 'json',
    numOfRows: '100',
    pageNo: '1',
    sidoName: '서울',
    ver: '1.0',
  },
});
