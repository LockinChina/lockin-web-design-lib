import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumbContent from './style';

type divProps = React.ButtonHTMLAttributes<HTMLElement>;

export interface BreadcrumbProps extends divProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const {className, children, style, ...restProps} = props;
  const renderItem = () => {
    return React.Children.map(children, (child) => {
      console.log(child);
      return child;
    });
  };
  return (
    <BreadcrumbContent className={className} style={style} {...restProps}>
      <div>{renderItem()}</div>
    </BreadcrumbContent>
  );
};

Breadcrumb.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
};

export default Breadcrumb;
