import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

export default function LayoutAntd (){
    return(
        <>
            <Layout >
                <Layout.Sider collapsible  >
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            Option 1
                        </Menu.Item>
                        <Menu.SubMenu key="sub1" title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="sub2" title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Layout.Sider>
                <Layout >
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Layout>
            </Layout>
            
        </>
    )
}