import { useState, useEffect } from 'react';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';
import Loading from './components/Loading/Loading';
import youngImg from './images/young-twat.jpg';
import fairyImg from './images/fairy-twat.jpg';
import ghostImg from './images/ghost-twat.jpg';
import balloonImg from './images/balloon-twat.jpg';
import frenchImg from './images/french-twat.jpg';
import siblingImg from './images/sibling-twat.jpg';
import teddyImg from './images/teddy.jpg';
import bagImg from './images/bag.jpg';
import bag2Img from './images/bag2.jpeg';
import cowImg from './images/cow.jpeg';
import godImg from './images/god.jpeg';
import heifImg from './images/heif.jpeg';
import jellpeterImg from './images/jellpeter.jpg';
import spreadImg from './images/spread.jpeg';
import wrappedImg from './images/wrappedCat.jpeg';
import methods from './functions/functions';
import classicA from './music/classic.mp3';
import hbA from './music/hb.mp3';
import babyA from './music/baby.mp3';
import finalA from './music/jphb.m4a';
import './App.css';

function App() {
  let loadInt = 100 / 19;
  const [load, setLoad] = useState(0);
  const [stage, setStage] = useState('open');
  const [bgColor, setBgColor] = useState('#ffffff');

  useEffect(() => {
    //preload images / audio and pass to components as props
    //page1
    const young = new Image()
    young.src = youngImg;
    young.onload = setLoad(load + loadInt);

    const fairy = new Image()
    fairy.src = fairyImg;
    fairy.onload = setLoad(load + loadInt);

    const ghost = new Image()
    ghost.src = ghostImg;
    ghost.onload = setLoad(load + loadInt);

    const balloon = new Image()
    balloon.src = balloonImg
    balloon.onload = setLoad(load + loadInt);

    const french = new Image()
    french.src = frenchImg
    french.onload = setLoad(load + loadInt);

    const sibling = new Image()
    sibling.src = siblingImg
    sibling.onload = setLoad(load + loadInt);

    const classic = new Audio()
    Audio.src = classicA
    classic.oncanplaythrough = setLoad(load + loadInt)

    const hb = new Audio()
    Audio.src = hbA
    hb.oncanplaythrough = setLoad(load + loadInt)

    //page2
    const teddy = new Image()
    teddy.src = teddyImg
    teddy.onload = setLoad(load + loadInt);

    const baby = new Audio()
    Audio.src = babyA
    baby.oncanplaythrough = setLoad(load + loadInt)

    //page3
    const bag = new Image()
    bag.src = bagImg
    bag.onload = setLoad(load + loadInt);

    const bag2 = new Image()
    bag2.src = bag2Img
    bag2.onload = setLoad(load + loadInt);

    const cow = new Image()
    cow.src = cowImg
    cow.onload = setLoad(load + loadInt);

    const god = new Image()
    god.src = godImg
    god.onload = setLoad(load + loadInt);

    const heif = new Image()
    heif.src = heifImg
    heif.onload = setLoad(load + loadInt);
    
    const jp = new Image()
    jp.src = jellpeterImg
    jp.onload = setLoad(load + loadInt);

    const spread = new Image()
    spread.src = spreadImg
    spread.onload = setLoad(load + loadInt);
    
    const wrapped = new Image()
    wrapped.src = wrappedImg
    wrapped.onload = setLoad(load + loadInt);

    const final = new Audio()
    Audio.src = finalA
    final.oncanplaythrough = setLoad(load + loadInt)

    const interval = setInterval(() => {
      setBgColor(methods.getRandomColor)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [load, loadInt])

  return (
    <div className="App">
      {
        load < 100 && <Loading load={load} />
      }
      {
        (stage === 'open' && load >= 100) ?
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
              <Page1 
                setStage={setStage} 
                young={youngImg}
                ghost={ghostImg}
                fairy={fairyImg} 
                balloon={balloonImg}
                french={frenchImg}
                sibling={siblingImg}
                classic={classicA}
                hb={hbA}
                /> :
                stage === 'page2' ? 
                  <Page2 
                    setStage={setStage} 
                    teddy={teddyImg}
                    baby={babyA}
                    /> :
                    stage === 'page3' && <Page3 
                                          setStage={setStage}
                                          bag={bagImg}
                                          bag2={bag2Img}
                                          cow={cowImg}
                                          god={godImg}
                                          heif={heifImg}
                                          jp={jellpeterImg}
                                          spread={spreadImg}
                                          wrapped={wrappedImg}
                                          final={finalA}
                                          />
      }
    </div>
  );
}

export default App;
