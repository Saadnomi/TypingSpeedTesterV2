import logo from './logo.svg';
import './App.css';
import ScriptTag from 'react-script-tag';




function App() {
  return (

    <><header class="masthead">
          <ScriptTag isHydrating={true} type="text/javascript" 
      src=
"script.js" />
      <h1>Test Your Typing Speed</h1>
    </header><main class="main">
        <article class="intro">
          <p>This is a typing test. Your goal is to duplicate the provided text, EXACTLY, in the field below. The timer starts when you start typing, and only stops when you match this text exactly. Good Luck!</p>
        </article>
        <section class="test-area">
          <div id="origin-text">
            <p>The text to test.</p>
          </div>

          <div class="test-wrapper">
            <textarea id="test-area" name="textarea" rows="6" placeholder="The clock starts when you start typing."></textarea>
          </div>

          <div class="meta">
            <section id="clock">
              <div class="timer">00:00:00</div>
            </section>

            <button id="reset">Start over</button>
          </div>
        </section>
      </main></>

  );
}

export default App;
