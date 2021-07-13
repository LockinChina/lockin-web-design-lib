#  组件开发步骤

本项目为 lockin 内部项目使用组件列表，项目的yarn start 即为启动storybook,本项目不使用npm，切记请使用yarn作为包管理工具，开发步骤如下
## 1. 编写 typescript 组件·

请写入到 src/components 下
## 2. 编写对应的组件 story

请写入到 src/stories 下, 一个组件使用一个story\
请使用下面的语法为参数变化赋值
·
```javascript
export const BackColor = Template.bind({});
BackColor.args = {
  size: 'large',
  label: 'Red Button',
  backgroundColor: 'red',
};
```
## 3. 将组件加入到道出

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
