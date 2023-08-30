/* eslint-disable */
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {setCommonModalOff} from "../../redux/modules/commonSlice";
import Grid from "../../elements/Grid";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function CommonModal({type, showConfirmModal}) {

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isLogin = useSelector(state => state.user.isLogin);
  const modalInfo = useSelector(state => state.commonModal.modalInfo);
  const goPage = useSelector(state=> state.commonModal.goPage);

  const [errorMessage, setErrorMessage] = useState('');

  const CloseModal = e => {
    e.stopPropagation();
    const name = e.target.className;
    if(name.indexOf('close') === -1) {
      return;
    } else {
      dispatch(setCommonModalOff());

      if(goPage === 'bakc') {
        navigate(-1);
      }
      navigate(goPage);
    }

  }
 return (
   <>
    <ModalContainer
      className="close"
      onClick={CloseModal}
      /*onKeyPress={onEnter}*/
    >
      <ModalContent>
        {modalInfo &&<Title>{modalInfo.title}</Title>}
        {modalInfo &&<Content>{modalInfo.content}</Content>}
        <Grid justify="space-between" margin="40px 0 0 0">
          <ModalButton className="fullButton close" onClick={CloseModal}>
            {t('CommonModal.agree')}
          </ModalButton>
        </Grid>
      </ModalContent>
    </ModalContainer>
   </>

 )
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 20;
`;

const ModalContent = styled.div`
  position: relative;
  width: 375px;
  padding: 32px;
  border-radius: 4px;
  overflow-y: auto;
  background-color: #fff;
  @media (max-width: 415px) {
    width: 80%;
  }
`;

const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.0038em;
  @media (max-width: 415px) {
    font-size: 16px;
  }
`;

const Content = styled.p`
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.0041em;
  color: #7a7d81;
  @media (max-width: 415px) {
    font-size: 14px;
  }
`;
const ModalButton = styled.button`
  width: 49%;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding || '10px'};
  font-size: 16px;
  color: #232529;
  border: 1px solid #232529;
  cursor: pointer;
  @media (max-width: 415px) {
    font-size: 12px;
  }
  &.fullButton {
    width: 100%;
    color: #fff;
    background-color: #232529;
  }
  &.black {
    color: #fff;
    background-color: #232529;
  }
`;