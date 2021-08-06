import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: inline-block;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      max-width: 100%;
      max-height: 100%;
      display: block;
    }
  }
  &.hover {
    div {
      cursor: pointer;
    }
  }
`;

export interface ImageProps {
  width?: number;
  height?: number;
  imUrl: string;
  onClick?: () => void;
  borderRadius?: number;
  borderColor?: string;
  alt?: string;
  bgColor?: string | 'transparent';
  style?: React.CSSProperties;
  className?: string;
}

export const Image: React.FC<ImageProps> = (props) => {
  const {
    width,
    height,
    imUrl,
    onClick,
    borderRadius,
    borderColor,
    bgColor,
    alt,
    className,
  } = props;
  const classes = classNames(className, {
    hover: onClick,
  });
  return (
    <ImageContainer className={classes} onClick={onClick}>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          border: `1px solid ${borderColor}`,
          borderRadius: `${borderRadius}px`,
          backgroundColor: `${bgColor}`,
        }}
      >
        <img alt={alt} src={imUrl} />
      </div>
    </ImageContainer>
  );
};

Image.defaultProps = {
  width: 100,
  height: 100,
};
