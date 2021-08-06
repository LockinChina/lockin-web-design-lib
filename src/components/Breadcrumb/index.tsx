import Breadcrumb, {} from './Breadcrumb';
import {BreadItem} from './BreadItem';

export type BreadcrumbComponent = React.FC & {
  Item: React.FC;
};

const Breadcrumbs = Breadcrumb as BreadcrumbComponent;
Breadcrumbs.Item = BreadItem;

export default Breadcrumbs;
