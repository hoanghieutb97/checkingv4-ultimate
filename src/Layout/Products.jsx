import React, { useEffect } from 'react';
import { PRODUCTS } from '../constants';
import { Button, Menu } from 'antd';
import { useStore, actions } from '../store';

import { PartitionOutlined, } from '@ant-design/icons'
// import { dispatchProperties } from '../store/actions';
function Products(props) {
    const [state, dispatch] = useStore();
    const { activeProduct } = state
    useEffect(() => {
        dispatch(actions.dispatchProduct({
            ...activeProduct,
            list: PRODUCTS[PRODUCTS.length - 1][0],
            product: PRODUCTS[PRODUCTS.length - 1][1][PRODUCTS[PRODUCTS.length - 1][1].length - 1][0]
        }))
    }, []);

    function getItem(label, key, icon, children, type) { return { key, icon, children, label, type, }; }
    const items = PRODUCTS.map(item => getItem(item[0], item[0], <PartitionOutlined />, item[1].map(itemx => getItem(itemx[1], itemx[0]))))
    let clickMenu = ({ keyPath }) => {
        dispatch(actions.dispatchProduct({ list: keyPath[1], product: keyPath[0] }))
    }
    const rootSubmenuKeys = PRODUCTS.map(item => item[0]);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => [activeProduct.list].indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            dispatch(actions.dispatchProduct({ ...activeProduct, list: keys }))
        } else {
            dispatch(actions.dispatchProduct({ ...activeProduct, list: latestOpenKey ? latestOpenKey : "" }))
        }
    };
    
    return (
        <div>
            
            <Menu
                selectedKeys={[activeProduct.product]}
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