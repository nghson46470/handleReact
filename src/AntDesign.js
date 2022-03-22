import { useState } from "react";
import { Button,Radio,Space,Menu,Dropdown } from "antd";
import "antd/dist/antd.css";

export default function AntDesign (){
    const [state ,setState] = useState('large')
    const [loading ,setLoading] = useState(false)

    setTimeout(()=>{
        setLoading(false)
    },3000)

    const handleChangState = (e)=>{
        setState(e.target.value)
        console.log(e.target.value);
    }

    const handleClick=(e)=>{
        console.log(e.domEvent.target.innerText);
    }

    const menu=(
        <Menu onClick={handleClick}>
            <Menu.Item key={1}>item1</Menu.Item>
            <Menu.Item key={2}>item2</Menu.Item>
            <Menu.Item key={3}>item3</Menu.Item>
        </Menu>
    )

    return(
        <>
            <div>button <br/>   
                <Button type="default">default</Button>
                <Button type="primary">primary</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </div>
            <br/>
            <div> change state  <br/>
                <Radio.Group size={state} value = {state} onChange={handleChangState}>
                    <Radio.Button value='small'>small</Radio.Button>
                    <Radio.Button value='default'>default</Radio.Button>
                    <Radio.Button value='large'>large</Radio.Button>
                </Radio.Group>
            </div>
            <br/>
            
            <div> loading <br/>
                <Space>
                    <Button type="primary" loading ghost="true ">
                        Loading ghost
                    </Button>
                    <Button type="primary" loading>
                        Loading
                    </Button>
                    <Button type="primary" loading={loading} onClick={()=>setLoading(true)}>
                        Loading state
                    </Button>
                </Space>
            </div><br/>

            <div> drop btn <br/>
                <Dropdown.Button overlay={menu}>action</Dropdown.Button>
            </div>
        </>
    )
}   