import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  padding-top: 5px;
  background: transparent;
  &:hover {
    background: rgb(218, 218, 218);
  }
  svg {
    path {
      fill: ${(props) => props.fill};
    }
  }
`;

export const IconButton = ({
  svgComponent,
  fill,
  style,
  onClick,
}: {
  svgComponent: React.ReactNode;
  fill?: string;
  style?: React.CSSProperties;
  onClick: React.MouseEventHandler;
}) => (
  <Button onClick={onClick} fill={fill} style={style}>
    {svgComponent}
  </Button>
);
