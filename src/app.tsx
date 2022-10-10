// 运行时配置

import { PageContainer } from '@ant-design/pro-components';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    token: {
      navTheme: 'light',
      colorPrimary: '#5bb8c5',
      colorBgAppListIconHover: 'rgba(0,0,0,0.06)',
      colorTextAppListIconHover: 'rgba(255,255,255,0.95)',
      colorTextAppListIcon: 'rgba(255,255,255,0.85)',
      header: {
        colorBgHeader: '#207a96',
        colorHeaderTitle: '#fff',
        colorTextMenu: '#dfdfdf',
        colorTextMenuSecondary: '#dfdfdf',
        colorTextMenuSelected: '#fff',
        colorBgMenuItemSelected: '#5bb8c5',
        colorTextMenuActive: 'rgba(255,255,255,0.85)',
        colorTextRightActionsItem: '#dfdfdf',
      },
      sider: {
        colorMenuBackground: '#001529',
        colorBgCollapsedButton: '#fff',
        colorBgMenuItemSelected: '#5bb8c5',

        colorTextCollapsedButtonHover: 'rgba(0,0,0,0.65)',
        colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
        colorBgMenuItemCollapsedHover: 'rgba(0,0,0,0.06)',
        colorBgMenuItemCollapsedSelected: 'rgba(0,0,0,0.15)',
        colorMenuItemDivider: 'rgba(255,255,255,0.15)',
        colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
        colorTextMenuSelected: '#fff',
        colorTextMenu: 'rgba(255,255,255,0.75)',

        colorTextMenuTitle: 'rgba(255,255,255,0.95)',
        colorTextMenuActive: 'rgba(255,255,255,0.95)',
        colorTextSubMenuSelected: '#fff',
      },
    },
    childrenRender: (children, props) => {
      return (
        <PageContainer
          fixedHeader={true}
          title={false}
          affixProps={{ offsetTop: 48 }}
          ghost={false}
        >
          {children}
        </PageContainer>
      );
    },
    colorPrimary: '#5bb8c5',
    layout: 'mix',
    contentWidth: 'Fluid',
    fixedHeader: true,
    splitMenus: false,
    fixSiderbar: true,
    colorWeak: false,
  };
};
