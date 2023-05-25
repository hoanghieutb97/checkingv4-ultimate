import React, { useEffect } from 'react';
import { PRODUCTS } from '../constants';
import { Button, Menu } from 'antd';
import { useStore, actions } from '../store';
import _ from "lodash";
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
    useEffect(() => {
        let arrMica = ["keyChain mirror",
            "NEW transparent ORM 1M",
            "NEW transparent ORM 2M",
            "ornament mica 1M-fill",
            "ornament mica 2M-fill",
            "ornament mica DZT",
            "mica DZT Style",
            "mica DZT Style 2M",
            "ornament led",
            "3d wood base",
            "3d woodBase Teemazing",
            "Acrylic Plaque",
            "ornament qua ta nhom",
            "Acrylic Plaque TMZ",
            "mirror normal StrokFile",
            "photo frame lamp"
        ];
        let arrGo = ["wood orrnament 2layer",
            "ornament go 1M-fill",
            "ornament go 2M-fill",
            "ornament vong huong",
            "wood ornament dls",


        ];
        let arrGoXXXXXX = ["FatherDayZirror"]
        let arrMica2cm = ["Heart mica 2cm",
            "Acrylic Block"
        ]
        if (_.indexOf(arrMica, activeProduct.product) !== (-1))
            dispatch(actions.dispatchProduct({ ...activeProduct, hAll: 812, wAll: 1200 }))
        else if (_.indexOf(arrGo, activeProduct.product) !== (-1))
            dispatch(actions.dispatchProduct({ ...activeProduct, hAll: 910, wAll: 910 }))
        else if (_.indexOf(arrMica2cm, activeProduct.product) !== (-1))
            dispatch(actions.dispatchProduct({ ...activeProduct, hAll: 350, wAll: 2440 }))
        else if (_.indexOf(arrGoXXXXXX, activeProduct.product) !== (-1))
            dispatch(actions.dispatchProduct({ ...activeProduct, hAll: 915, wAll: 915 }))

    }, [activeProduct.product]);
    return (
        <div className='ctn-pro'>

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