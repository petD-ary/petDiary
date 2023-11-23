import { RiKakaoTalkFill } from "react-icons/ri";
import KakaoLogin from "react-kakao-login";

const SocialKakao = () => {
  const kakaoClientId = "a6aa60048bdaaa66d87d253b08a66ba3";
  const kakaoOnSuccess = async (data: { response: { access_token: any } }) => {
    const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달
  };

  const kakaoOnFailure = (error: any) => {
    console.log(error);
  };
  return (
    <>
      <KakaoLogin
        render={(props) => (
          <button
            onClick={props.onClick}
            className="w-20 h-[60px] bg-grayColor-100 rounded-xl flex items-center justify-center text-2xl"
          >
            <RiKakaoTalkFill />
          </button>
        )}
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </>
  );
};

export default SocialKakao;
