/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

export const Text = props => {
  const {
    fontSize,
    semibold,
    bold,
    color,
    others,
    children,
    margin,
    textAlign,
    lineHeight,
    border,
    letterSpacing,
    type,
  } = props;

  const styles = {
    fontSize,
    semibold,
    bold,
    color,
    others,
    margin,
    textAlign,
    border,
    lineHeight,
    letterSpacing,
  };

  if (type === 'title16') {
    return <Title16 {...styles}>{children}</Title16>;
  }
  return (
    <>
      <ElText {...styles}>{children}</ElText>
    </>
  );
};

Text.defaultProps = {
  fontSize: `${theme.fontSize.normal}`,
  /*semibold: false,*/
  /*bold: false,*/
  color: `${theme.color.mainColor}`,
  children: '',
  others: '',
  margin: null,
  /*textAlign: false,*/
  /*border: false,*/
  lineHeight: '1.5',
  letterSpacing: 1,
};

const ElText = styled.div`
  font-size: ${props => props.fontSize};

  color: ${props => props.color};
  
  ${props => props.textAlign2 && `text-align: center`};
  ${props => props.others};
  ${props => (props.margin ? `margin: ${props.margin}` : '')};
  
  line-height: ${({ lineHeight }) => lineHeight || '1.5'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '1'};
`;
const Title16 = styled.p`
  font-size: 16px;

  line-height: ${({ lineHeight }) => lineHeight || '22px'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '-0.0041em'};
  color: ${({ color }) => color || '#3E4042'};
`;


export default Text;
