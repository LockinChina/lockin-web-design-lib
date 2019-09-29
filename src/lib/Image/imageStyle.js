import styled from 'styled-components';

const ImageContainer = styled.div`
  display: inline-block;
  position: relative;
  .im{
    cursor: pointer;
    &:hover .uploadbox{ display: flex;}
    position: relative;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-size: cover !important;
    background-position: center center;
    background-color: #f8f8f8;
    >img{
      display: block;
      max-height: 100%;
      max-width: 100%;
    }
    .uploadbox{
      display: none;
      position: absolute;
      justify-content: center;
      align-items: center;
      top:0;
      right: 0;
      bottom: 0;
      left:0;
      z-index: 1;
      &::before{
        position: absolute;
        top: 0%; left: 0;
        content: '';
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .2);
        z-index:0;
      }
      .iconfont{
        position: relative;
        font-family: 'lockinu'!important;
        color: #fff;
        font-size: 24px;
        z-index:1;
      }
      .fileBtn{
        position: absolute;
        cursor: pointer;
        z-index: 2;
        background: #ddd;
        width: 100%;
        height: 140%;
        opacity: 0;
      }
    }
  }
  
`

export default ImageContainer;