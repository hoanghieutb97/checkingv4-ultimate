import React from 'react';

function Bamboowireless(props) {
    return (
        <>
            <p className="tiu-de">
                <span className="titl-tiu">số design: </span>
                <span className="noidung-til">1</span>
            </p>
            <p className="tiu-de">
                <p className="titl-tiu">quy cách: </p>
                <p className="noidung-til ">Chất liệu: Phôi có sẵn</p>
                <p className="noidung-til ">Thiết kế có file cắt ở trên, file in ở dưới đúng vị trí.</p>
                <p className="noidung-til ">Kích thước sản phẩm cắt: tự do - co 0 chiều.</p>
                <p className="noidung-til ">file in được bù viền ra ngoài 12 px.</p>
                <img className='img-ct' src={"/3dwoodbase.jpg"} alt="" />
            </p>
        </>
    );
}

export default Bamboowireless;