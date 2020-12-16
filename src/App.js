import { useState, useEffect } from 'react';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';
import youngImg from './images/young-twat.jpg';
import fairyImg from './images/fairy-twat.jpg';
import ghostImg from './images/ghost-twat.jpg'
import methods from './functions/functions';
import './App.css';

//page 1
/*const balloon = new Image().src = './images/balloon-twat.jpg';
const fairy = new Image().src = './images/fairy-twat.jpg';
const french = new Image().src = './images/french-twat.jpg';
const ghost = new Image().src = './images/ghost-twat.jpg';
const sibling = new Image().src = './images/sibling-twat';
const young = new Image().src = './images/young-twat';

const babyBg = new Image().src = './images/baby-background.jpg';
const bag = new Image().src = './images/bag.jpg';
const bag2 = new Image().src = './images/bag2.jpg';
const cake = new Image().src = './images/cake.gif';
const cow = new Image().src = './images/cow.jpg';
const god = new Image().src = './images/god.jpeg';
const heif = new Image().src = './images/heif.jpeg';
const jellpeter = new Image().src = './images/jellpeter';
const spread = new Image().src = './images/spread.jpeg';
const teddy = new Image().src = './images/teddy.jpg';
const wrapped = new Image().src = './images/wrappedCat.jpeg';*/

function App() {
  const [stage, setStage] = useState('open');
  const [bgColor, setBgColor] = useState('#ffffff');

  useEffect(() => {

    const young = new Image()
    young.src = youngImg;

    const fairy = new Image()
    fairy.src = fairyImg;

    const ghost = new Image()
    ghost.src = ghostImg;

    const interval = setInterval(() => {
      setBgColor(methods.getRandomColor)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div className="App">
      {
        stage === 'open' ?
          <div className="open-div" style={{backgroundColor: bgColor}}>
            <h1 
              className='w3-animate-zoom'
              style={{
                fontFamily: 'Russo One'
              }}
              >
                It's your Birthday RITA!!!
              </h1> 
            <button
              className='start-button w3-animate-zoom'
              onClick={() => setStage('page1')}
              >
                Click me if you dare
              </button>
              <p>(You'll need sound)</p>
          </div> :
            stage === 'page1' ?
              <Page1 setStage={setStage} young={youngImg} ghost={ghostImg} fairy={fairyImg} /> :
                stage === 'page2' ? 
                  <Page2 setStage={setStage} /> :
                    stage === 'page3' && <Page3 setStage={setStage} />
      }
    </div>
  );
}

export default App;
