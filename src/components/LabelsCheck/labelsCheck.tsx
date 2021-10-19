import React, {FC, useState, useEffect} from 'react';
import Label, {LabelProps} from '../Lable/index';
import LabelsCheckContent from './style';
interface DataObj {
  label: string;
  value: number | string;
}
export interface LabelsCheckProps extends LabelProps {
  className?: string;
  style?: React.CSSProperties;
  data?: DataObj[],
  checkedValue?: any[];
  readOnly?: boolean;
  max?: number | undefined;
  disabledArr?: any[];
  onSelectCallback?: (arr: any[]) => void;
}


const LabelsCheck: FC<LabelsCheckProps> = (props) => {
  const {
    className,
    style,
    data,
    checkedValue,
    readOnly,
    max,
    disabledArr,
    onSelectCallback,
    ...restProps
  } = props;

  const [dataobj, setDataobj] = useState<any>([]); // lables数
  const [selectedArr, setSelectArr] = useState<any>([]); // 选中的item数组

  useEffect(() => {
    if (data) {
      setDataobj(data);
    }
  }, [data]);

  useEffect(() => {
    if (checkedValue) {
      setSelectArr(checkedValue);
    }
  }, [checkedValue]);


  const renderLabelsCheck = () => {
    return dataobj && dataobj.length > 0 && dataobj.map((item:DataObj)=> {
      const setChecked = () => {
        if (selectedArr && selectedArr.indexOf(Number(item.value)) !== -1 ) {
          return true;
        }
        return false;
      };

      const setDisabled = () => {
        if (disabledArr && disabledArr.indexOf(Number(item.value)) !== -1 ) {
          return true;
        }
        return false;
      };

      const labelItemHandelClick = () => {
        const id = item.value;
        if (!readOnly) {
          if (selectedArr?.indexOf(id) !== -1) {
            const index = selectedArr?.indexOf(id);
            const arr = [...selectedArr];
            arr.splice(index, 1);
            setSelectArr(arr);
            onSelectCallback && onSelectCallback(arr);
          } else {
            if (max !== undefined && typeof max === 'number' && selectedArr.length >= max) {
              alert(`最多 选择${max}项`);
              return false;
            }
            const arr = [...selectedArr, id];
            setSelectArr(arr);
            onSelectCallback && onSelectCallback(arr);
          }
        }
      };


      return (
        <Label
          checked={setChecked()}
          disabled={setDisabled()}
          className="label-item"
          key={item.value}
          onClick={labelItemHandelClick}
          {...restProps}
        >
          {item.label}
        </Label>
      );
    });
  };

  return (
    <>
      <LabelsCheckContent className={className} style={style}>
        {renderLabelsCheck()}
      </LabelsCheckContent>
    </>
  );
};

export default LabelsCheck;
