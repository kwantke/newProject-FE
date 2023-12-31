/* eslint-disable */
import styled from "styled-components";

const Container = props => {
  const { children, padding, height } = props;
  const styles = {
     height
    ,padding
  };

  return <ContainerWrap {...styles}>{children}</ContainerWrap>

};

Container.defaultProps = {
  padding: '66px 24px 0 24px',
  height: '100%',
};

const ContainerWrap = styled.div`
  position: relative;
  max-width: 768px;
  height: ${({ height }) => height};
  mid-height: ${({ height }) => height || '100%'};
  margin: 0 auto;
  padding: ${({ padding }) => padding || '0 24px'};
`;

export default Container