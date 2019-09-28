import React from 'react';

import ImageContainer from './imageStyle';
import GlobelStyle from '../../globalStyle';
import '../../iconfont/iconfont.css';

import baseHeaderBg  from '../../static/images/head-bg.png';

function Image (props) {
  const {
    width, height, imAlt, radius, upload, backgroundIm, imUrl, blank, link, fileOnChange, borderColor, backgroundColor
  } = props;
  return(
    <ImageContainer className="">
      <div 

        onClick={() => !upload && (blank ? window.open(link) : window.location = `${link}`)}
        className={"im" }
        style={{ 
          borderRadius: `${radius}px`,
          width: width,
          height: height,
          backgroundImage: backgroundIm === 0 ? "none" : 'url('+backgroundIm+')',
          border: borderColor? `1px solid ${borderColor}` : "none",
          backgroundColor: backgroundColor ? backgroundColor : "none"
        }}
      >
        <img src={imUrl} alt={imAlt} radius={radius} />
        {
          upload &&
          <div className="uploadbox">
          <span className="iconfont iconxiangji"></span>
          <input type="file" className="fileBtn" onChange = {(e)=> fileOnChange(e.target.value)} />
        </div>
        }
      </div>
      <GlobelStyle />
    </ImageContainer>
  )
}

export default Image;

Image.defaultProps = {
  width: 120,
  height: 120,
  radius: 0,
  link: '#',
  backgroundIm: baseHeaderBg,
  fileOnChange: ()=>{}
}