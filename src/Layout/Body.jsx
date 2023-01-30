import React from 'react';
import CheckSKU from './CheckSKU';
import Excel from './Excel';
import ListItems from './ListItems';
import Products from './Products';

function Body(props) {
    return (
        <>
            <div className='d-grid'>
                <div className=" grid-tag grid-excel">
                    <div className="title-col">
                        Excel
                    </div>
                    <Excel />
                </div>
                <div className=" grid-tag">
                    <div className="title-col">
                        Chọn sản phẩm
                    </div>
                    <Products />
                </div>
                <div className=" grid-tag">
                    <div className="title-col">
                        Kiểm tra design
                    </div>
                    <CheckSKU />
                </div>
                <div className=" grid-tag">
                    <div className="title-col">
                        Hướng dẫn
                    </div>
                </div>
            </div>
            <div className="container-80">
                <ListItems />
            </div>
        </>
    );
}

export default Body;