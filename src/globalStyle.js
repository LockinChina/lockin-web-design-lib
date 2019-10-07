import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
*{margin:0;padding:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
  input,button,select,textarea{ outline:none; }
  input{-webkit-appearance : none ; }
  html{background:#fff;overflow:auto;}
  /* body{font:14px/18px "Microsoft Yahei";color:#333; -webkit-font-smoothing: antialiased;background: #fff; } */
  body{font:14px/18px PingFang SC,"Hiragino Sans GB","Microsoft Yahei",SimSun,Arial,"Helvetica Neue",Helvetica,Lantinghei SC;color:#333; -webkit-font-smoothing: antialiased;background: #fff; }
  a{color:#333; text-decoration:none; cursor:pointer; outline: 0 none;}
  /* a:hover{ text-decoration:none;color:#ff4f20;} */
  /* a:focus{ border:0px;blur:expression(this.onFocus=this.blur());} */
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,p,blockquote,th,td{margin:0; padding:0;}
  header,footer,article,aside,section,nav,menu,hgroup,details,dialog,figure,figcaption{display:block}
  ol,li,ul,dl,dt,dd{list-style:none;}
  fieldset,img {border:0}
  button,submit,input,select { vertical-align:middle;}
  button,submit { cursor:pointer;}
  /* h1,h2,h3,h4,h5,h6{font-size:inherit; font-weight:lighter;} */
  table{border-collapse:collapse; border-spacing:0;}
  sup{vertical-align:text-top;}
  sub{vertical-align:text-bottom;}
  select,button{font-family:inherit; font-size:inherit;  outline-style:none; outline-width:0pt; padding: 0; margin: 0;}/*font-weight:lighter;*/
  b,em,i{display:inline-block; font-weight:normal; font-style:normal;}
  ::-webkit-input-placeholder {color:#ccc;}
  :-moz-placeholder {color:#ccc;}
  ::-moz-placeholder {color:#ccc;}
  :-ms-input-placeholder {color:#ccc;}
  .clear{ overflow: hidden; height: 0; font-size: 0; line-height: 0; clear: both;}
  .clearfix:after { content: "."; display: block; clear: both; visibility: hidden;} .clearfix{ zoom:1;}
  .container { width:1200px; position:relative; margin:0 auto;}
  .fl{ float: left;}
  .fr{ float: right;}
  .tl{ text-align: left;}
  .tr{ text-align: right;}
  .tc{text-align: center}
  .c{ width: 100%; min-width: 1200px;}
  /* .w{ width: 1200px; margin: 0 auto; } */
  .mt-30{ margin-top:30px;}
  .m-t-10{ margin-top: 10px;}
  .m-t-30{ margin-top: 30px;}
  .fadeAnim{transition:all 0.2s linear 0s;  -moz-transition:all 0.2s linear 0s;  -webkit-transition:all 0.2s linear 0s;}
  .animated-fast{-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}
  @keyframes fadeInDown{0%{opacity:0;-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);transform:translateY(-20px)}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}
  .w{ width: 1000px; margin: 0 auto;}
  .m-t-20{ margin-top: 20px;}
  .color-75{ color: #777;}
  .f-size-12{ font-size: 12px;}
  /*自定义滚动条*/
  .scrollbar::-webkit-scrollbar-track{
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -moz-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
    box-shadow: none;
    background-color: none;
  }
  .scrollbar::-webkit-scrollbar{
    width: 2px;
    /* background-color: #f8f8f8; */
    background: none;
  }
  .scrollbar::-webkit-scrollbar-thumb{
    background-color: rgb(0,94,212);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    width:320px;
    margin-left: -160px;
    height:180px;
    margin-top: -90px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 6px 0px rgba(0,0,0,0.2);
    border-radius:3px;
    text-align: center;
    padding: 40px 25px 0;
  }
    .modal-title-content {
        position: absolute;
        top: 50%;
        left: 50%;
        width:320px;
        margin-left: -160px;
        height:215px;
        margin-top: -108px;
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 6px 0px rgba(0,0,0,0.2);
        border-radius:3px;
        padding: 20px 20px 10px;
    }
    .modal-title-content > div:first-child {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .modal-title-content > div:first-child > div:first-child {
        font-size: 18px;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:22px;
    }
    .modal-title-content div:first-child > div:last-child{
        font-size: 18px;
        color: rgba(102,102,102,1);
        cursor: pointer;
    }
    .modal-title-content > div:last-child {
        position: absolute;
        right: 20px;
        bottom: 10px;
    }
    input[type="checkbox"]{width:15px;height:15px;display: inline-block;text-align: center;vertical-align: middle; line-height: 15px;position: relative;}
    input[type="checkbox"]::before{content: "";position: absolute;top: 0;left: 0;background: #fff;width: 100%;height: 100%;border: 1px solid rgba(0,0,153,1)}
    input[type="checkbox"]:checked::before{content: "\\2713";background-color: #fff;position: absolute;top: 0;left: 0;width:100%;border: 1px solid  rgba(0,0,153,1); color: rgba(0,0,153,1);font-size: 16px;font-weight: bold;}
    
    input[type="radio"] {  -webkit-appearance: none;appearance: none;outline: none;
        width: 14px;
        height: 14px;
        cursor: pointer;
        vertical-align: center;
        background: #fff;
        border: 1px solid rgba(0,0,153,1);
        position: relative;
        border-radius: 50%;
    }
    input[type="radio"]:checked::before {
        content: "";
        display: block;
        position: absolute;
        top: 2px;
        left: 2px;
        right: 0;
        bottom: 0;
        width: 8px;
        height: 8px;
        background-color: rgba(0,0,153,1);
        border-radius: 50%;
    }
`;

export default globalStyle;
