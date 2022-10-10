import { defineConfig } from '@umijs/max';

export default defineConfig({
  mountElementId: 'main-app-root',
  antd: {
    configProvider: {
      prefixCls: 'demo',
      space: 24,
    },
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    colorPrimary: '#5bb8c5',
    layout: 'mix',
    contentWidth: 'Fluid',
    fixedHeader: true,
    splitMenus: false,
    fixSiderbar: true,
    colorWeak: false,
  },
  qiankun: {
    master: {
      sandbox: {
        strictStyleIsolation: true,
      },
      // 注册子应用信息
      apps: [
        {
          name: 'brace-app',
          entry: '//192.168.2.31:9001',
        },
        {
          name: 'flow-app',
          entry: '//192.168.2.31:9002',
        },
        {
          name: 'origin-app',
          entry: '//192.168.2.31:9003',
        },
        {
          name: 'post-app',
          entry: '//192.168.2.31:9004',
        },
      ],
    },
  },
  theme: {
    'root-entry-name': 'variable',
    'primary-color': '#5bb8c5',
    'border-radius-base': '4px',
    'layout-header-background': '#207A96',
    'ant-prefix': 'demo',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
