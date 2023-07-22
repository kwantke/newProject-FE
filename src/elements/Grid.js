import React from 'react';
import styled from "styled-components";


export const Grid = props => {
  const {
    id
    ,justify
    ,justifyContent
    ,isFlex
    ,flex
    ,flexFlow
    ,direction
    ,width
    ,height
    ,margin
    ,padding
    ,bg
    ,wrap
    ,border
    ,borderBottom
    ,_onClick
    ,children
    ,position
    ,zIndex
    ,cursor
  } = props

  const styles = {
    id
    ,justify
    ,justifyContent
    ,isFlex
    ,flex
    ,flexFlow
    ,direction
    ,width
    ,height
    ,margin
    ,padding
    ,bg
    ,wrap
    ,border
    ,borderBottom
    ,_onClick
    ,children
    ,position
    ,zIndex
    ,cursor
  };

  return (
    <DefaultGrid {...styles} onClick={_onClick}>
      {children}
    </DefaultGrid>
  );
};

Grid.defaultProps = {
  justify: 'flex-start'
  ,isFlex: false
  ,direction: 'row'
  ,width: 'auto'
  ,height: 'auto'
  ,margin: 0
  ,padding: 0
  ,bg: 'transparent'
  ,border: 'none'
  ,position: 'relative'
  ,borderBottom: 'none'
  ,_onClick: () => {}
};

const DefaultGrid = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  background-color: ${props => props.bg};
  border: ${props => props.border};
  position: ${props => props.position};
  ${props => props.isFlex && `display:flex`};
  ${props => (props.flexFlow ? ` flex-flow:${props.flexFlow}` : '')};
  ${props => props.wrap && `flex-wrap:wrap`};
  box-sizing: border-box;
  ${props => (props.flex ? `flex:1` : '')};
  ${props => (props.direction ? ` flex-direction:${props.direction}` : '')};
  align-items: center;
  flex-wrap: wrap;
  ${props => (props.zIndex ? ` z-index:${props.zIndex}` : '')};
  ${props =>
    (props.justifyContent ? ` justify-content:${props.justifyContent}` : '')};
  ${props => (props.cursor ? ` cursor:pointer` : '')}; 
`;


export default Grid;