/* eslint-disable */
import Header from "../components/common/Header";
import {useTranslation} from "react-i18next";
import Container from "../elements/Container";
import Grid from "../elements/Grid";
import styled from "styled-components";
//import {  Input, Text, Label } from "../elements";
import { ReactComponent as KakaoIcon } from '../images/kakaoLogin/join_kakao.svg';
import {useState} from "react";
import {xcircle} from "../images";
import {useDispatch, useSelector} from "react-redux";
import {loginDB} from "../redux/async/user";

import {useNavigate} from "react-router-dom";

/* Elements */
import Label from "../elements/Label";
import Input from "../elements/Input";
import Text from "../elements/Text";
import Button from "../elements/Button";
import CommonModal from "../components/common/CommonModal";

const Login = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: ''
    ,password: ''
  });
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const modalStatus = useSelector(state => state.commonModal.modalStatus);

  const onChange = e => {
    setLoginInfo({
      ...loginInfo
      ,[e.target.name]: e.target.value
    });
  }

  /* 서버에 전달할 정보 */
  const userInfo = {
    email: loginInfo.email
    ,password: loginInfo.password
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
    if(userInfo.password.length === 0) {
      return setPassError(t('loginPage.loginerrMessage.1'));
    }
    dispatch(loginDB({userInfo, navigate}));

  }
  return (
    <>
      {modalStatus && <CommonModal/>}
      <Header _content={t('loginPage.headerSubTitle')}/>
      <Container padding="60px 0 0 0">
        <Grid padding="42px 20px 0 20px">
          <Wrap>
            <Label type="form" flex={false}>{t('loginPage.loginEmail')}</Label>
            <Input
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
                  setLoginInfo({ ...loginInfo, email: '' });
                }}
              />
            )}
            <Text fontSize="12px" color="#ff4949">
              {emailError}
            </Text>
          </Wrap>
          <Wrap>
            <Label type="form">{t('loginPage.loginPassword')}</Label>
            <Input
              inputType="form"
              type="password"
              value={loginInfo.password}
              name="password"
              _onChange={onChange}
              _onSubmit={submitUserInfo}
              placeholder={t('loginPage.loginPlaceholder.1')}
            />

            {loginInfo.password !== '' && (
              <CloseButton
                src={xcircle}
                onClick={() => {
                  setLoginInfo({ ...loginInfo, password: '' });
                }}
              />
            )}
            <Text fontSize="12px" color="#ff4949">
              {passError}
            </Text>
          </Wrap>
        </Grid>
        <BottomWrap>
          <TButton onClick={submitUserInfo}>{t('loginPage.login')}</TButton>
          <Grid margin="20px 0 30px 0">
            <RelativeGrid>
              <RelativeText>{t('loginPage.or')}</RelativeText>
            </RelativeGrid>
            <hr style={{ color: '#A3A6AA'}}/>
          </Grid>
          {/* 카카오 로그인 버튼 */}
          <KakaoButton
            onClick={()=>{
              window.location.href = "http://localhost:9010/oauth2/authorization/google";
            }}
          >
            <IconArea>
              <KakaoIcon/>
            </IconArea>{t('loginPage.kakaoLogin')}
          </KakaoButton>
          <Grid isFlex margin="24px 0 0 0" justify="center">
            <Text fontSize="13px" color="#A3A6AA" margin="0 12px 0 0">
              {t('loginPage.infoText')}
            </Text>
            <Button color="#A3A6AA" bold={true} _onClick={()=>navigate('/signUp')}>
              {t('loginPage.register')}
            </Button>
          </Grid>
        </BottomWrap>
      </Container>
    </>

  );
};

const Wrap = styled.div`
  margin-bottom: 32px;
  position: relative;
`;
const BottomWrap = styled.div`
  padding: 40px 20px;
  width: 100%;
`;
const TButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  font-weight: 700;
  background-color: #232529;
  color: #fff;
  margin-top: 20px;
`;
const KakaoButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
  font-size: 16px;
  font-weight: 700;
  background-color: #fce55a;
  color: #181604;
  margin-top: 20px;
  position: relative;
  cursor: pointer;
`;
const IconArea = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  width: 24px;
  height: 24px;

  svg {
    width: 35px;
    height: 35px;
  }
  cursor: pointer;
`;
const CloseButton = styled.img`
  position: absolute;
  right: 11px;
  bottom: 17px;
  width: 20px;
  cursor: pointer;
`;

const RelativeGrid = styled.div`
  display: inline-block;
  position: relative;
  top: 10px;
  display: flex;
  justify-content: center;

  /* background-color: #fff; */
`;

const RelativeText = styled.p`
  padding: 0 20px;
  background-color: #fff;
  color: #a3a6aa;
  text-align: center;
  font-size: 13px;
`;




export default Login;