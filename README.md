## hel-antd
基于 hel-tpl-remote-react-comp-ts 改造的远程 antd 模块，此版本基于[4.23.4](https://ant.design/components/icon-cn/)构建

## 发布

```
npm run build
npm run publish
```

## 使用
访问[线上示例](https://codesandbox.io/s/hel-demo-use-antd-tjy3ep)

入口文件预加载
```ts
import { preFetchLib } from 'hel-micro';

async function main(){
  await preFetchLib('hel-antd');
  await import('./loadApp');
}

main().catch(console.error);
```

其他地方正常导入使用
```tsx
import { Button } from 'hel-antd';

<Button>remote button</Button>
```
