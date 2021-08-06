import React from 'react';
export interface StepItemProps {
  stepTitle: React.ReactNode;
}
export const StepItem: React.FC = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};
