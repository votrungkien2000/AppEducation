import * as httpRequest from '@/untils/httpRequest';
export const search = async (q, type = 'less') => {
  try {
    const res = await httpRequest.get('users/search', {
      params: {
        q: q,
        type: type,
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
