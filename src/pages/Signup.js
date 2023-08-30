/* eslint-disable */
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Container from "../elements/Container";
import Grid from "../elements/Grid";
import Label from "../elements/Label";
import styled from "styled-components";
import Input from "../elements/Input";
import {useState} from "react";
import {emailCheck} from "../shared/emailCheck";
import {xcircle} from "../images/index";
import Text from "../elements/Text";
import Button from "../elements/Button";
import {checkEmail} from "../shared/api/userApi";
import {addUserDB} from "../redux/async/user";
import CommonModal from "../components/common/CommonModal";
export default function Signup() {

  const dispatch = useDispatch();
  const { t } = useTranslation()
  const commonModal = useSelector(state => state.commonModal.modalStatus);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password:'',
    passwordCheck:'',
    nickname:''
  });

  // 모달 on/off 상태를 redux에서 관리
  const modalStatus = useSelector(state => state.user.modalStatus);

  /* 남자, 여자 상태를 useState를 통해 관리*/
  const [maleFemale, setMaleFemale] = useState(null);

  /* 버튼 활성화/비활성화 state */
  const [buttonStatus, setButtonStatus] = useState(false);

  /* 닉네임이 존재하는지 안하는지 유무, 존재하면 true, 존재하지 않으면 false */
  const [emailDuplicateCheck, setemailDuplicateCheck] = useState(false);

  /* Error 메시지 state*/
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const [passconfirmError, setPassconfirmError] = useState('');
  const [nicknameError, setNicknameError] = useState('');

  // 모든 input을 하나의 state로 관리
  const onChange = e => {
    setUserInfo({...userInfo, [e.target.name]: e.target.value});
    if(userInfo.email) {
      setButtonStatus(true);
    }
  };


  //서버에 전달할 유저 정보
  const userInfoDB = {
    email: userInfo.email,
    password: userInfo.password,
    nickname: userInfo.nickname,
    //maleYN: maleFemale,
  }

  /* ID 중복 확인 */
  const userCheck = async () => {
    if(!buttonStatus) return false;
    const email = { email: userInfo.email };
    /* 이메일 값이 빈값 일떄*/
    if(userInfo.email === '') {
      setButtonStatus(false);
      return setEmailError(t('signUpPage.idErrorMessage.0'));
    }
    if(!emailCheck(userInfoDB.email)){
      setButtonStatus(false);
      return setEmailError(t('signUpPage.idErrorMessage.1'));
    }

    try {
      const response = await checkEmail(email);
      if(response) {
        const result = response.data.message;

        if(result === "Y") {
          setemailDuplicateCheck(false);
          setEmailError(t('signUpPage.idErrorMessage.3'));
        } else {
          setemailDuplicateCheck(true);
          setEmailError(t('signUpPage.idErrorMessage.4'))
        }
      }
    } catch(err) {
      // 중복된 닉네임일 경우 모달창이 아닌 text가 보여줘야함
      console.log('error :::::', err.response);
    }
    return setButtonStatus(false);

  }


  const submitUserInfo = () => {
    if(userInfo.email.length !== 0) {
      setEmailError('');
    }
    if(userInfo.email.length === '') {
      setEmailError(t('signUpPage.idErrorMessage.0'));
      return;
    }
    if(!emailCheck(userInfoDB.email)){
        setEmailError(t('signUpPage.idErrorMessage.1'));
      return;
    }
    if(!emailDuplicateCheck) {
      window.alert('이메일 중복체크를 해주세요!');
      return;
    }

    /* 비밀번호 체크 */
    if(userInfo.password.length !== 0){
      setPassError('');
    }
    if(userInfo.password === '') {
      setPassError(t('signUpPage.passErrorMessage.0'))
      return;
    }
    if(userInfo.password.length < 8 || userInfo.password.length>16) {
      setPassError(t('signUpPage.passErrorMessage.1'))
      return;
    }
    /* 비밀번호 확인 체크 */
    if (userInfo.passwordCheck.length !== 0) {
      setPassError('');
    }
    if (userInfo.passwordCheck === '') {
      setPassconfrimError(t('signUpPage.passconfirmMessage.0'));
      return;
    }
    /* 비밀번호 비교 체크 */
    if(userInfo.password === userInfo.passwordCheck){
      setPassconfirmError('');
    }
    if(userInfo.password !== userInfo.passwordCheck) {
      setPassconfirmError(t('signUpPage.passconfirmMessage.1'))
      return;
    }

    if(userInfo.nickname.length < 2) {
      setNicknameError(t('signUpPage.nickNameError.1'));
      return;
    }
    if (userInfo.nickname.length > 12) {
      setNicknameError(t('signUpPage.nickNameError.2'));
      return;
    }

    dispatch(addUserDB(userInfoDB));


  }
  return (
    <>
      {commonModal && <CommonModal />}
      <Container padding="66px 0 0 0">
        <Grid padding="42px 20px 0 20px">
          <Wrap>
            <Label type="form" required>
              {t('signUpPage.signUpEmail')}
            </Label>
            {/*<Div>*/}
              <Input
                inputType="form"
                type="text"
                value={userInfo.email}
                name="email"
                _onChange={onChange}
                _onSubmit={submitUserInfo}
                praceholder={t('signUpPage.placeholder.0')}
              />
              <AbsolDiv>
                {buttonStatus === false ? (
                  <Button
                    type="tag"
                    bg="#fff"
                    color="#C4C4C4"
                    border="1px solid #C4C4C4"
                    _onClick={userCheck}
                  >
                    {t('signUpPage.duplicateBtn')}
                  </Button>
                ) : (
                  <Button
                    type="tag"
                    bg="black"
                    color="#fff"
                    border="1px solid #C4C4C4"
                    _onClick={userCheck}
                  >
                    {t('signUpPage.duplicateBtn')}
                  </Button>
                )}
              </AbsolDiv>
              {emailError === t('signUpPage.idErrorMessage.4') ? (
                <Text color="green" fontSize="12px">
                  {emailError}
                </Text>
              ) : (
                <Text color="#ff4949" fontSize="12px">
                  {emailError}
                </Text>
              )}
              {/*
              {userInfo.email !== '' && (
                <CloseButton
                  src={xcircle}
                  onClick={()=> {
                    setUserInfo({...userInfo, email: ''});
                  }}
                />
              )}
              */}
           {/* </Div>*/}
            {/*<Text fontSize="12px" color="#ff4949">
              {emailError}
            </Text>*/}
          </Wrap>
          <Wrap>
            <Label type="form" required>
              {t('signUpPage.signUpPassword')}
            </Label>
            <Input
              inputType="form"
              type="password"
              value={userInfo.password}
              name="password"
              _onChange={onChange}
              _onSubmit={submitUserInfo}
              placeholder={t('signUpPage.placeholder.1')}
            />
            {userInfo.password !== '' && (
              <CloseButton
                src={xcircle}
                onClick={() => {
                  setUserInfo({...userInfo, password: ''})
                }}
              />
            )}
            <Text fontSize="12px" color="#ff4949">
              {passError}
            </Text>
          </Wrap>
          <Wrap>
            <Label type="form" required>
              {t('signUpPage.passwordConfirm')}
            </Label>
            <Input
              inputType="form"
              type="password"
              value={userInfo.passwordCheck}
              name="passwordCheck"
              _onChange={onChange}
              _onSubmit={submitUserInfo}
              placeholder={t('signUpPage.placeholder.2')}
            />
            {userInfo.passwordCheck !== '' && (
              <CloseButton
                src={xcircle}
                onClick={()=>{
                  setUserInfo({...userInfo, passwordCheck: ''})
                }}
              />
            )}
            <Text fontSize="12px" color="#ff4949">
              {passconfirmError}
            </Text>
          </Wrap>
          <Wrap>
            <Label type="form" required>
              {t('signUpPage.nickName')}
            </Label>
            <Input
              inputType="form"
              type="text"
              value={userInfo.nickname}
              name="nickname"
              _onChange={onChange}
              _onSubmit={submitUserInfo}
              placeholder={t('signUpPage.placeholder.3')}
            />
            {userInfo.nickname !== '' && (
              <CloseButton
                src={xcircle}
                onClick={()=> {
                  setUserInfo({...userInfo, nickname: ''});
                }}
              />
            )}
            <Text fontSize="12px" color="#ff4949">
              {nicknameError}
            </Text>
{/*
            {nicknameError === t('signUpPage.nickNameError.5') ? (
              <Text color="green" fontSize="12px">
                {nicknameError}
              </Text>
            ) : (
              <Text color="#ff4949" fontSize="12px">
                {nicknameError}
              </Text>
            )}
            */}
          </Wrap>

        </Grid>
        <BottomWrap>
          <Button type="fullSizeBlack" _onClick={submitUserInfo}>
            {t('signUpPage.register')}
          </Button>
        </BottomWrap>
      </Container>
    </>
  )

}
const BottomWrap = styled.div`
  padding: 40px 20px;
  width: 100%;
`

const Wrap = styled.div`
  position: relative;
  margin-bottom: 32px;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CloseButton = styled.img`
  position: absolute;
  right: 11px;
  bottom: 17px;
  width: 20px;
  cursor: pointer;
`;

const AbsolDiv = styled.div`
  position: absolute;
  top: 25px;
  right: 0;
`;