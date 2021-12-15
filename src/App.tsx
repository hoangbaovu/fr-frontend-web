import React from 'react';
import { Link } from 'react-router-dom';
// import { getToken } from './utils/auth';

declare global {
  interface Window {
    methodA: any;
  }
}

function App() {

  if (typeof window != "undefined") { // needed if SSR
    window.methodA = function(a: any) {
      alert(a);
    }
  }

  return (
    <div className="App">
      <Link to="/auth/login">Login</Link>


      <div className="qrscan-wraper">
        <a id="qrscanRef" href="http://example.com/camera">
          <p>Scan QR Code</p>
        </a>
      </div>
    </div>
  )
}

export default App;
