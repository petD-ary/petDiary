import { useRouter } from "next/navigation";
import { RiKakaoTalkFill } from "react-icons/ri";
import KakaoLogin from "react-kakao-login";

const SocialKakao = () => {
  const router = useRouter();
  const kakaoOnSuccess = async (data: { response: { access_token: any } }) => {
    const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달
    // 로그인이 성공하면 메인 페이지로 이동
    alert("로그인 성공");
    router.push("/");
  };

  const kakaoOnFailure = (error: any) => {
    console.log(error);
  };

  let kakaoClientId = process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY;

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
