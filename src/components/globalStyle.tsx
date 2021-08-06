import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{margin:0;padding:0;-webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;box-sizing:border-box;}
input,button,select,textarea{ outline:none; }
input{-webkit-appearance : none ; }
html{background:#fff;overflow:auto;}
body{font:14px/18px PingFang SC,"Hiragino Sans GB",
"Microsoft Yahei",SimSun,Arial,"Helvetica Neue",Helvetica,Lantinghei SC;
color:#333; -webkit-font-smoothing: antialiased;}
body, html{ background: #f4f4f4; }
a{color:#333; text-decoration:none; cursor:pointer; outline: 0 none;}
/* a:hover{ text-decoration:none;color:#ff4f20;} */
/* a:focus{-moz-outline-style: none; border:0px; blur:expression(this.onFocus=this.blur());} */
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,
input,p,blockquote,th,td{margin:0; padding:0;}
header,footer,article,aside,section,nav,menu,hgroup,details,dialog,figure,figcaption{display:block}
ol,li,ul,dl,dt,dd{list-style:none;}
fieldset,img {border:0}
div,p,span{ outline: none }
button,submit,input,select { vertical-align:middle;}
button,submit { cursor:pointer;}
/* h1,h2,h3,h4,h5,h6{font-size:inherit; font-weight:lighter;} */
table{border-collapse:collapse; border-spacing:0;}
sup{vertical-align:text-top;}
sub{vertical-align:text-bottom;}
select,button{font-family:inherit; font-size:inherit;
   outline-style:none; outline-width:0pt; padding: 0; margin: 0;}/*font-weight:lighter;*/
b,em,i{display:inline-block; font-weight:normal; font-style:normal;}
::-webkit-input-placeholder {color:#ccc;}
:-moz-placeholder {color:#ccc;}
::-moz-placeholder {color:#ccc;}
:-ms-input-placeholder {color:#ccc;}
`;

export default GlobalStyle;
