import KakaoLogin from "react-kakao-login";

const SocialKakao = () => {
  const kakaoClientId = "aa";
  const kakaoOnSuccess = async (data: { response: { access_token: any } }) => {
    console.log(data);
    const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달
  };

  const kakaoOnFailure = (error: any) => {
    console.log(error);
  };
  return (
    <>
      <KakaoLogin token={kakaoClientId} onSuccess={kakaoOnSuccess} onFail={kakaoOnFailure} />
    </>
  );
};

export default SocialKakao;
