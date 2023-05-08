import { QRCode } from 'react-qrcode-logo';

function App() {
  return (
    <div className='App'>
      <QRCode
        value='https://github.com/gcoro/react-qrcode-logo'
        size={512}
        eyeColor={['#f44336', '#2196f3', '#ffeb3b']}
      />
    </div>
  );
}

export default App;
