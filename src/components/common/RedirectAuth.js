import {getCookie, setCookie} from "../../shared/config/cookie";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const RedirectAuth = () => {

  //const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  const accessToken = new URL(window.location.href).searchParams.get('accessToken');
  const refreshToken = new URL(window.location.href).searchParams.get('refreshToken');
  setCookie("accessToken",accessToken);
  setCookie("refreshToken",refreshToken);
  //const token2 =new URL(window.location.href).response;



  useEffect(() => {
    navigate('/');
  })

}

export default RedirectAuth;

