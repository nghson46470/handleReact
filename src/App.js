import {Route,Routes,Link} from 'react-router-dom';
import CallApi from './callApi';
import TodoList from './todolist';
import MeThod from './method';
import AntDesign from './AntDesign';
import LayoutAntd from './layoutAntd';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import DetailUser from './DetailUser';
export default function App() {
  
  return(
    <>
            <Layout style={{ minHeight: '100vh' }}>
                <Layout.Sider collapsible  >
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                          <Link to="/">todoList</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                          <Link to="/callApi">callApi</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/MeThod">method</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                          <Link to="/AntDesign">AntDesign</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                          <Link to="/LayoutAntd">LayoutAntd</Link>
                        </Menu.Item>
                    
                    </Menu>
                </Layout.Sider>
                <Layout style={{padding : "15px"}}>
                  <Routes>
                    <Route path="/" element={<TodoList/>} />
                    <Route path="/callApi" element={<CallApi/>} />
                    <Route path="/method" element={<MeThod/>} />
                    <Route path="/AntDesign" element={<AntDesign/>} />
                    <Route path="/LayoutAntd" element={<LayoutAntd/>} />
                    {/* cách chuyền tham số id lên url */}
                    <Route path="/DetailUser/:id" element={<DetailUser/>} />
                  </Routes>
                </Layout>
          </Layout>
    </>
  )
}
