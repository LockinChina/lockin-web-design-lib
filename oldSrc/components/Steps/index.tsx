/* eslint-disable no-unused-vars */
import {StepContent, StepsProps} from './StepContent';
import {StepItem, StepItemProps} from './StepItem';

export type StpesComponent = React.FC<StepsProps> & {
  Item: React.FC<StepItemProps>;
};

const Steps = StepContent as StpesComponent;
Steps.Item = StepItem;

export default Steps;
