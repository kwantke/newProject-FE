import Header from "../components/common/Header";
import {useTranslation} from "react-i18next";
import Container from "../elements/Container";
import Grid from "../elements/Grid";
import styled from "styled-components";
import Label from "../elements/Label";
import {useState} from "react";
import {xcircle} from "../images";
import {useDispatch} from "react-redux";
import {loginDB} from "../redux/async/user";

const Login = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [loginInfo, setLoginInfo] = useState({
    email: ''
    ,passowrd: ''
  });
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');

  const onChange = e => {
    setLoginInfo({
      ...loginInfo
      ,[e.target.name]: e.target.value
    });
  }

  /* 서버에 전달할 정보 */
  const userInfo = {
    email: loginInfo.email
    ,password: loginInfo.passowrd
  }
  /* 로그인 제출 */
  const submitUserInfo = () => {
    if(userInfo.email.length !== 0) {
      setEmailError('');
    }
    if(userInfo.email === '') {
      return setEmailError(t('loginPage.loginerrMessage.0'));
    }
    if(userInfo.password.length !== 0) {
      setPassError('');
    }
    if(userInfo.password.length == 0) {
      return setPassError(t('loginPage.loginerrMessage.1'));
    }
    dispatch(loginDB(userInfo));
  }
  return (
    <>
      <Header _back _content={t('loginPage.headerSubTitle')}/>
      <Container padding="60px 0 0 0">
        <Grid padding="42px 20px 0 20px">
          <Wrap>
            <Label type="form">{t('loginPage.loginEmail')}</Label>
            <input
              inputType="form"
              type="text"
              value={loginInfo.email}
              name="email"
              _onChange={onChange}
              _onSubmit={submitUserInfo}
              placeholder={t('loginPage.loginPlaceholder.0')}
            />
            {loginInfo.email !== '' && (
              <CloseButton
                src={xcircle}
                onClick={() => {
                  setLoginInfo({...loginInfo, email: ''});
                }}
                />
            )}
            {/*<Text fontSize="12px" color="#ff4949">
              {emailError}
            </Text>*/}
          </Wrap>
        </Grid>
      </Container>
    </>

  );
};

const Wrap = styled.div`
  margin-bottom: 32px;
  position: relative;
`;

const CloseButton = styled.img`
  position: absolute;
  right: 11px;
  bottom: 17px;
  width: 20px;
  cursor: pointer;
`;