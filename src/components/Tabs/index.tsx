/* eslint-disable no-unused-vars */
import {Tabs, TabsProps} from './tabs';
import {TabsItem, TabsItemProps} from './tabsItem';

export type TabsComponent = React.FC<TabsProps> & {
  Item: React.FC<TabsItemProps>;
};

const TransTabs = Tabs as TabsComponent;

TransTabs.Item = TabsItem;

export default TransTabs;
