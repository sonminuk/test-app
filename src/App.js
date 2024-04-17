import logo from './logo.svg';
import './App.css';
import NotificationList from './chapter_06/NotificationList';
// import Counter from './Counter';
import FocusButton from './FocusButton';

function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          리엑트 Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React gogo
        </a>
      </header> */}

      {/* <Counter /> */}
      {/* 이건 버튼클릭 횟수 */}

      {/* <NotificationList /> */}
      {/* 이건 화면에 글자 뛰우기 */}
      

      <FocusButton />
    </div>
  );
}

export default App;
