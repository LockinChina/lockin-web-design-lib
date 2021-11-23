/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import ImageContainer from './imageStyle';
// import GlobelStyle from '../../globalStyle';
// import '../../iconfont/iconfont.css';

import baseHeaderBg from '../../static/images/head-bg.png';

export interface ImageProps {
  width?: number; // 图片宽度
  height?: number; // 图片高度
  imAlt?: string; // alt属性
  radius?: number; // 圆角半径
  upload?: boolean; // 长传文件状态
  backgroundIm?: string | 0; // 0为无背景
  imUrl?: string; // 图片路径
  link?: string; // 链接
  blank?: boolean; // 是否打开新窗口
  fileOnChange?: (e: any) => void; // 文件选择事件
  borderColor?: string; // 图片边框颜色
  backgroundColor?: string; // 图片背景颜色
}

const Image: React.FC<ImageProps> = (props) => {
  const {width, height, imAlt, radius, upload, backgroundIm, imUrl, blank,
    link, fileOnChange, borderColor, backgroundColor} = props;
  const linkFuc = () => {
    if (!upload) {
      if (link) {
        if (blank) {
          window.open(link);
        } else {
          window.location.href = `${link}`;
        }
      } else {
        return null;
      }
    }
    return null;
  };
  return (
    <ImageContainer className=''>
      <div
        onClick={() => linkFuc()}
        // onClick={() => {}}
        className='im'
        style={{
          borderRadius: `${radius}px`,
          width,
          height,
          backgroundImage: backgroundIm === 0 ? 'none' : `url(${backgroundIm})`,
          border: borderColor ? `1px solid ${borderColor}` : 'none',
          backgroundColor: backgroundColor || 'none',
          cursor: link ? 'pointer' : 'default',
        }}
      >
        <img src={imUrl} alt={imAlt} style={{borderRadius: `${radius}px`}} />
        {upload && (
          <div className='uploadbox'>
            <span className='iconfont iconxiangji' />
            <input type='file' className='fileBtn'
              onChange={(e) => fileOnChange && fileOnChange(e)} />
          </div>
        )}
      </div>
      {/* <GlobelStyle /> */}
    </ImageContainer>
  );
};

export default Image;

Image.defaultProps = {
  width: 120,
  height: 120,
  radius: 0,
  // link: 'javascipt:;',
  backgroundIm: baseHeaderBg,
  fileOnChange: () => {},
};

Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  imAlt: PropTypes.string,
  radius: PropTypes.number,
  upload: PropTypes.bool,
  imUrl: PropTypes.string,
  blank: PropTypes.bool,
  link: PropTypes.string,
  fileOnChange: PropTypes.func,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};
