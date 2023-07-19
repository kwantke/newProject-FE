import styled from "styled-components";
const Header = props => {

  const {
     _back
    ,_search
  } = props
  return (
    <>
      <ContentBgArea>


      </ContentBgArea>
    </>

  );
};

Header.defaultProps = {
   _back: false
  ,_search: false
}

const ContentBgArea = styled.div`
  max-width: 768px;
  height: 66px;
  min-height: 66px;
  margin: 0 auto;
  padding: 0 26px 0 24px;
  z-index: 9;
  position: sticky;
  top: 0;
  background-color: ${props => (props.OnTop ? '' :  '#fff')};
`;
