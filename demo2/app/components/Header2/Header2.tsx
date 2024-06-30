'use client'

import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps,MenuTheme } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: '数据源',
    key: 'datasource',
    icon: <MailOutlined />,
  },
  {
    label: '规则配置',
    key: 'rule',
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: '任务配置',
    key: 'task',
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: '元数据管理',
    key: 'schema',
    icon: <SettingOutlined />,
    children: [
      { 
        label: '元数据差异比对'
        , key: 'schema-diff'

      },
      {
        label: '元数据修改'
        , key: 'schema-edit'

      },
    ]
  }];

    const Header2 = () => {
      const [current, setCurrent] = useState('datasource');
      const [theme, setTheme] = useState<MenuTheme>('dark');

      const router = useRouter();

      const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        console.log(e.key)
        // setCurrent(e.key);
        router.push(current); 
      };
      return <Menu style={{ background:'red'  }}  onClick={onClick} selectedKeys={[current]}  items={items} />;
    };

    export default Header2;