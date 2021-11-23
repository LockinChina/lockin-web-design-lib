import React, {useState} from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';

import Modal, {ModalProps} from './index';
import Button from '../Button';



export default {
  title: 'Components/Modal', 
  component: Modal,
} as Meta;




// Create a master template for mapping args to render the Button component
const Template: Story<ModalProps> = (args) => <Modal {...args} />;

// Reuse that template for creating different stories
// export const Default = Template.bind({});
// Default.args = { 
  
// };

export const Modals = () =>  {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        onClick={() => setVisible(true)}
        buttonType="primary"
        hollow
      >
        点我弹层
      </Button>
      <Modal
        width={400}
        visible={visible}
        buttons={['取消', '确定']}
        closeBtnClick={() => setVisible(false)}
        transition="fadeInDown"
        buttonClick={index => {
          setVisible(false);
          if(index === 1){
            alert('确定')
          }
        }}
      >
        <div style={{padding: '30px', textAlign: 'center'}}>
          <p>这里是自定义内容</p>
        </div>
      </Modal>
    </>
  )
}