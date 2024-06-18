import React, { useState } from 'react';
import axios from 'axios';
function PasswordProtectedButton() {
  const [showPasswordInput, setShowPasswordInput] = useState(false); // Để hiển thị hoặc ẩn bảng nhập mật khẩu
  const [password, setPassword] = useState(''); // Lưu giá trị mật khẩu nhập vào
  const [showSecretButton, setShowSecretButton] = useState(false); // Để hiển thị hoặc ẩn button bí mật

  const handleInitialButtonClick = () => {
    setShowPasswordInput(true); // Hiển thị bảng nhập mật khẩu
    setShowSecretButton(false); // Đảm bảo button bí mật không hiển thị lúc này
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = () => {
    if (password === "123456") {
      setShowSecretButton(true); // Hiển thị button bí mật nếu mật khẩu đúng
      setShowPasswordInput(false); // Ẩn bảng nhập mật khẩu
    } else {
      alert("Mật khẩu không chính xác!");
    }
  };

  let getListCardTrello = () => {

    const listId = '65d98f40df4df16ca1acfa3f'; // Thay thế bằng ID của List bạn muốn lấy cards
    const apiKey = 'eaab65cdb6b3f930891953f93327e65e'; // Thay thế bằng API Key của bạn
    const token = 'ATTA9890326a872fc0376b216d80d4582602fcf88703471fda6cb1b13f33b6c9702008C31C28'; // Thay thế bằng Token của bạn

    axios.get(`https://api.trello.com/1/lists/${listId}/cards?key=${apiKey}&token=${token}`)
      .then(response => {
        
        let listCard = response.data.map(item => ({ cardId: item.id, nameCard: item.name }));
        axios.post('http://192.168.1.194:3010/reactSendTrello', { data: listCard })
          .then(response => console.log("da gui toi 3010/reactSendTrello: ", response.data))
          .catch(error => console.error('There was an error!', error));

      })
      .catch(error => console.error('There was an error!', error));
  }
  return (
    <div>
      {!showSecretButton && (
        <button onClick={handleInitialButtonClick}>Hiện bảng nhập mật khẩu</button>
      )}
      {showPasswordInput && (
        <div>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Nhập mật khẩu"
          />
          <button onClick={handlePasswordSubmit}>Xác nhận</button>
        </div>
      )}
      {showSecretButton && (
        <button onClick={getListCardTrello}>Get list card</button>
      )}
    </div>
  );
}

export default PasswordProtectedButton;
