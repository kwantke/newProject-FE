/* eslint-disable */
import styled from "styled-components";


export default function Button(props) {

  const {
    type,
    width,
    margin,
    padding,
    border,
    radius,
    color,
    size,
    bold,
    bg,
    focus,
    _onClick,
    children,
  } = props;

  const styles = {
    width,
    margin,
    padding,
    border,
    radius,
    color,
    size,
    bold,
    bg,
    focus
  }

  if(type === 'tag') {
    return (
      <>
        <TagButton {...styles} onClick={_onClick}>
          {children}
        </TagButton>
      </>
    )
  }
  return (
    <>
      <DefaultButton {...styles} onClick={_onClick}>
        {children}
      </DefaultButton>
    </>
  )
}

Button.defaultProps = {
  width: 'auto',
  height: 'auto',
  margin: 0,
  padding: 0,
  radius: 0,
  size: '14px',
  bold: false,
  focus: false,
  bg: 'transparent',
  border: 'none',
  _onClick: () => {}
};

const DefaultButton = styled.button`
   width: ${props => props.width};
   height: ${props => props.height};
   margin: ${props => props.margin};
   padding: ${props => props.padding};
   font-size: ${props => props.size};
   ${props => (props.bold ? `font-weight:800` : '')};
   color: ${props => props.color};
   ${props => (props.radius ? `border-radius:${props.radius}`: '')};
   border: ${props => (props.border ? props.border : 'none')};
   background-color: ${props => props.bg};
   cursor: pointer;
`;

const TagButton = styled.button`
  padding: 6px 16px;
  margin-right: 8px;
  font-size: 13px;
  font-weight: 700;
  color: ${({ color }) => color || '#646464'};
  background-color: ${({ bg }) => bg || ' #f0f0f0'};
  border: ${props => (props.border ? props.border : 'none')};
  &:last-child {
    margin-right: 0;
  }
`;
