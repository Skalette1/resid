import React, { useState } from 'react';
import { Popup, Button } from 'antd-mobile';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>Открыть Popup</Button>
      <Popup
        visible={visible}
        onMaskClick={() => setVisible(false)}
        position="bottom"
      >
        <div style={{ padding: '24px' }}>
          <p>Это содержимое Popup</p>
          <Button onClick={() => setVisible(false)}>Закрыть</Button>
        </div>
      </Popup>
    </div>
  );
};

export default App;

