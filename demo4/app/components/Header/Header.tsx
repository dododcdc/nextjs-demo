'use client'

import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { Col, Divider, Row, Flex, Button } from 'antd';

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
  },
  {
    label: '自助查询',
    key: 'query',
    icon: <AppstoreOutlined />,
    disabled: false,
  },

];

export const Header = () => {
  const [current, setCurrent] = useState('datasource');
  const [theme, setTheme] = useState<MenuTheme>('dark');

  const router = useRouter();

  const onClick: MenuProps['onClick'] = (e) => {
    const path = e.key
    console.log('click ', e);
    setCurrent(path);


    router.push(path);


  };
  return (
    <div>

      <Row justify="space-around" align="middle" style={{height:'10vh',background:'linear-gradient(135deg, #6e45e2, #88d3ce)'}}>
        <Col flex={4}>
          <div style={{  }}>LOGO</div>
        </Col>
        <Col flex={20}>
          <Menu style={{
                border:'none',
               
                background: 'transparent',
                // background:'linear-gradient(135deg, #6e45e2, #88d3ce)'
          }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </Col>

        <Col flex={2}>
          <div style={{  }}>退出登录</div>
        </Col>
      </Row>
    </div>

  )
};

