/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import ImageContainer from './imageStyle';
// import GlobelStyle from '../../globalStyle';
// import '../../iconfont/iconfont.css';

import baseHeaderBg from '../../static/images/head-bg.png';

function Image(props) {
  const {
    width,
    height,
    imAlt,
    radius,
    upload,
    backgroundIm,
    imUrl,
    blank,
    link,
    fileOnChange,
    borderColor,
    backgroundColor,
  } = props;
  return (
    <ImageContainer className="">
      <div
        onClick={() =>
          !upload && (blank ? window.open(link) : (window.location = `${link}`))
        }
        className="im"
        style={{
          borderRadius: `${radius}px`,
          width,
          height,
          backgroundImage: backgroundIm === 0 ? 'none' : `url(${backgroundIm})`,
          border: borderColor ? `1px solid ${borderColor}` : 'none',
          backgroundColor: backgroundColor || 'none',
        }}
      >
        <img src={imUrl} alt={imAlt} radius={radius} />
        {upload && (
          <div className="uploadbox">
            <span className="iconfont iconxiangji" />
            <input
              type="file"
              className="fileBtn"
              onChange={e => fileOnChange(e)}
            />
          </div>
        )}
      </div>
      {/* <GlobelStyle /> */}
    </ImageContainer>
  );
}

export default Image;

Image.defaultProps = {
  width: 120,
  height: 120,
  radius: 0,
  link: '#',
  backgroundIm: baseHeaderBg,
  fileOnChange: () => {},
};

Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  imAlt: PropTypes.string,
  radius: PropTypes.number,
  upload: PropTypes.bool,
  backgroundIm: PropTypes.string,
  imUrl: PropTypes.string,
  blank: PropTypes.bool,
  link: PropTypes.string,
  fileOnChange: PropTypes.func,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};
