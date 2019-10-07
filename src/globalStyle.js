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
`;

export default globalStyle;
