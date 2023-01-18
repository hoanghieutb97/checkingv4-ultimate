import React from 'react';
import { useStore, actions } from '../store';


function ThongKe(props) {
    const [state, dispatch] = useStore();
    let { sheet, activeProduct } = state;

    let tong = 0;
    if (sheet.length !== 0) tong = sheet.map(item => Number(item.Quantity)).reduce((total, curentValue) => total + curentValue);


    return (
        <div>
            <div className="title-thongke">
                <span className="tt-tk">Tổng sản phẩm: {tong}</span>
            </div>
  
        </div>
    );
}

export default ThongKe;