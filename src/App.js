import './App.css';
import Header from './layout/Header';
import {LeftAside } from './layout/LeftAside';
import RightAside from './layout/RightAside';
import Section from './layout/Section';

function App() {
  return (
    <div className=" contaner-fluid main-cont">
      <Header />
        <div className='row h-100 main-body'>
          <LeftAside clsName="left-asside" />
          <Section />
          <RightAside clsName="right-asside" />
        </div>
      <footer className='footer-cont'>Footer</footer>
    </div>
  );
}

export default App;
