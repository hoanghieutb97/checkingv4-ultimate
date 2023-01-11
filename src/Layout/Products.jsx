import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Button, Menu } from 'antd';
import {
    AppstoreOutlined,
    PartitionOutlined,

} from '@ant-design/icons'
function Products(props) {
    const [activeProduct, setactiveProduct] = useState({
        list: PRODUCTS[PRODUCTS.length - 1][0],
        product: PRODUCTS[PRODUCTS.length - 1][1][PRODUCTS[PRODUCTS.length - 1][1].length - 1][1]
    });
    // const [openKeys, setOpenKeys] = useState([activeProduct.list]);
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    // let items = [
    //     getItem('Navigation One', 'sub1', <PartitionOutlined />, [
    //         getItem('Option 5', '5'),
    //         getItem('Option 6', '6'),
    //         getItem('Option 7', '7'),
    //         getItem('Option 8', '8'),
    //     ]),
    //     getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    //         getItem('Option 9', '9'),
    //         getItem('Option 10', '10'),
    //         getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    //     ]),
    // ];
    const items = PRODUCTS.map(item => getItem(item[0], item[0], <PartitionOutlined />, item[1].map(itemx => getItem(itemx[0], itemx[1]))))
    let clickMenu = ({ keyPath }) => {
        setactiveProduct({ list: keyPath[1], product: keyPath[0] })
        // console.log(keyPath)
    }
    const rootSubmenuKeys = PRODUCTS.map(item => item[0]);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => [activeProduct.list].indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            console.log(keys);
            setactiveProduct({ ...activeProduct, list: keys })
        } else {
            setactiveProduct({ ...activeProduct, list: latestOpenKey ? latestOpenKey : "" })
        }
    };


    // console.log(activeProduct);
    return (
        <div>
            Products
            <Menu
                selectedKeys={[activeProduct.product]}
                // defaultOpenKeys={[activeProduct.list]}
                openKeys={[activeProduct.list]}
                onOpenChange={onOpenChange}
                mode="inline"
                theme="dark"
                
                onClick={(item) => clickMenu(item)}
                items={items}
            />
        </div>
    );
}

export default Products;