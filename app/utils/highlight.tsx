/**
 * 같은 단어 하이라이트 표시
 * @param {string} str 찾아야 하는 단어
 * @param {string} pos 단어를 추려낼 내용
 * @returns 하이라이트 CSS를 적용시킨 요소
 */
export const highlight = (str: string, pos: string) => {
  const words = str.split(' ');
  const regex = new RegExp(words.map((word) => `(${word})`).join('|'), 'gi');
  const tokens = pos.split(regex);

  const result = tokens.map((token, index) => {
    if (words.find((word) => word === token)) {
      return (
        <span key={index} className='text-primary-500'>
          {token}
        </span>
      );
    } else {
      return token;
    }
  });

  return result;
};
