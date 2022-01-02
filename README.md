# FleetDAO interface

FleetDAO用户界面实现，基于TypeScript + [NextJS](https://github.com/vercel/next.js) + [StyledComponents](https://styled-components.com/)。

- 网站: https://fleetdao.com
- Wiki: https://github.com/fleetdao/interface/wiki
- 产品原型: https://modao.cc/app/d992fb0802b984aab331f46ee074b142e460811d
- Discord: https://discord.com/invite/Jj5b5dwNZb
- Twitter: https://twitter.com/fleetdao

## Install
```bash
# dependencies
yarn

# dev
yarn dev

# build
yarn build

# start
yarn start
```

## 实现方案
- **数据存储**  
数据存储使用[Notion](https://www.notion.so)，参考[Notion开发文档](https://developers.notion.com)。
我们已经创建了Fleetdao-dev的Notion Workspace用来测试，开发者可通过[Fleetdao-dev-Invite](https://www.notion.so/fleetdao-dev/invite/acb27d1e3fa1f3c50acbd66ab88fb793f264bf52)链接申请测试。

- **DAO**  
FleetDAO中关于提案、投票、Token等DAO部分的实现方案，将采用第三方的DAO工具进行构建，目前我们初步计采用[Aragon](https://aragon.org)来构建。

## 项目结构
FleetDAO用户界面部分的源代码组织结构，参照NextJS的相关约定：[Nextjs org](https://nextjs.org), [Next Docs](https://nextjs.org/docs/getting-started)👉。  
我们对项目`src`路径下的目录结构，做如下约定：
- **components**  
通用组件目录，包含`Button`, `Card`, `Column`, `Header`, `Footer`, `Loader`, `Input`, `Modal`, `Row`, `Toggle`等页面通用组件，后续开发过程中按需增加。

- **constants**  
定义常量的文件放在`constants`目录。

- **layouts**  
页面布局目录，目前包含`Base`, `Home`, `Page`三种页面布局，后续开发中按需增加。

- **lib**  
用于封装一些通用的函数和中间件。

- **pages**  
Page Views目录，每个页面都根据其文件名与一个路由相关联，关于pages部分的路由规则，请参考[Next Pages的相关文档](https://nextjs.org/docs/basic-features/pages)。

- **state**  
React redux状态管理，每个模块一个目录，包含`actions.ts`, `reducer.ts`, `updaters`, `hooks.ts`四个文件。

- **theme**  
styled-components变量定义在theme目录下的`index.tsx`文件中，通过`styled.ts`文件进行类型约束。

- **utils**  
通用函数放在utils目录下。

## 开发工具
开发人员可使用任何自己熟悉的开发工具，但VSCode还是大部分开发者的首选。

## 编码规范
- [命名规范](https://github.com/fleetdao/interface/wiki/5.-%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91#%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83)
- [TypeScript规范](https://github.com/fleetdao/interface/wiki/5.-%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91#typescript%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)
- [Styled-components规范](https://github.com/fleetdao/interface/wiki/5.-%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91#styled-componentscss%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)

## 开发原则
- 允许任何人提出Issue和FIP（FleetDAO Improvement Proposal）提案。
- 所有的开发必须建立在由多位开发者确定的Issue和投票通过的FIP基础上。
- 允许任何人进行开发和提交代码。
- 代码必须符合基本的开发规范，并以最小改动为原则。
- 提交的代码必须经过审核和测试后才能进行合并。