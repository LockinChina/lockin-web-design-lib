// /* eslint-disable react/display-name */
// /* eslint-disable no-restricted-syntax */
// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { toast } from 'react-hot-toast';
// import LbaelsCheckBox from './style';

// interface LabelPorps {
//   list?: any[];
//   max?: number | undefined;
//   onChange?: (arr: []) => void;
//   defaultValue?: any;
//   name?: any;
//   noFirst?: boolean;
// }

// // function LabelsCheck({ list, max, onChange }) {
// const LabelsCheck: React.FC<LabelPorps> = React.forwardRef((props, ref) => {
//   const { list, max, onChange, defaultValue, name, noFirst } = props;
//   const [activeList, setActiveList] = useState(noFirst ? [] : [0]);
//   const setClass = (id: number | string) => {
//     const arr = [...activeList];
//     for (const i in arr) {
//       if (arr[i] === id) {
//         return 'actived';
//       }
//     }
//     return '';
//   };
//   const addFunc = (id: number) => {
//     let arr = [...activeList];
//     const index = arr.indexOf(id);
//     if (id === 0) {
//       arr = [0];
//     } else if (index === -1) {
//       const i = arr.indexOf(0);
//       if (i !== -1) {
//         arr.splice(i, 1);
//       }
//       if (typeof max === 'number' && !isNaN(max) && arr.length < max) {
//         arr.push(id);
//       } else if (max === 1) {
//         arr = [id];
//       } else {
//         toast.error(`最多选择${max}项`);
//       }
//     } else if (max !== 1) {
//       arr.splice(index, 1);
//     }
//     if (arr.length === 0) {
//       if (!noFirst) {
//         arr = [0];
//       }
//     }
//     setActiveList(arr);
//     if (onChange) {
//       onChange(arr);
//     }
//   };
//   useEffect(() => {
//     if (defaultValue && defaultValue !== '') {
//       setActiveList(defaultValue);
//     }
//   }, [defaultValue]);
//   return (
//     <LbaelsCheckBox>
//       <input
//         type='hidden'
//         defaultValue={defaultValue}
//         value={activeList}
//         ref={ref}
//         name={name}
//       />
//       {/* {activeList} */}
//       {list &&
//         list.map(item => (
//           <button
//             style={{
//               display:
//                 noFirst && (item.id === 0 || item.id === '0')
//                   ? 'none'
//                   : 'inline-block',
//             }}
//             className={setClass(item.id)}
//             key={item.id}
//             type='button'
//             onClick={() => {
//               addFunc(item.id);
//             }}
//           >
//             {item.name}
//           </button>
//         ))}
//     </LbaelsCheckBox>
//   );
// });

// LabelsCheck.propTypes = {
//   list: PropTypes.array,
//   max: PropTypes.number,
//   onChange: PropTypes.func,
//   defaultValue: PropTypes.array,
//   name: PropTypes.string,
//   noFirst: PropTypes.bool,
// };

// LabelsCheck.defaultProps = {
//   // list: labelList,
//   max: 100,
//   onChange: () => {},
// };
// export default LabelsCheck;

export {};
