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
import './App.css';

function App() {
  const [load, setLoad] = useState(0);
  const [stage, setStage] = useState('open');
  const [bgColor, setBgColor] = useState('#ffffff');

  useEffect(() => {
    //preload images and pass to components as props
    //page1
    const young = new Image()
    young.src = youngImg;
    young.onload = setLoad(load + 6.7);

    const fairy = new Image()
    fairy.src = fairyImg;
    fairy.onload = setLoad(load + 6.7);

    const ghost = new Image()
    ghost.src = ghostImg;
    ghost.onload = setLoad(load + 6.7);

    const balloon = new Image()
    balloon.src = balloonImg
    balloon.onload = setLoad(load + 6.7);

    const french = new Image()
    french.src = frenchImg
    french.onload = setLoad(load + 6.7);

    const sibling = new Image()
    sibling.src = siblingImg
    sibling.onload = setLoad(load + 6.7);

    //page2
    const teddy = new Image()
    teddy.src = teddyImg
    teddy.onload = setLoad(load + 6.7);

    //page3
    const bag = new Image()
    bag.src = bagImg
    bag.onload = setLoad(load + 6.7);

    const bag2 = new Image()
    bag2.src = bag2Img
    bag2.onload = setLoad(load + 6.7);

    const cow = new Image()
    cow.src = cowImg
    cow.onload = setLoad(load + 6.7);

    const god = new Image()
    god.src = godImg
    god.onload = setLoad(load + 6.7);

    const heif = new Image()
    heif.src = heifImg
    heif.onload = setLoad(load + 6.7);
    
    const jp = new Image()
    jp.src = jellpeterImg
    jp.onload = setLoad(load + 6.7);

    const spread = new Image()
    spread.src = spreadImg
    spread.onload = setLoad(load + 6.7);
    
    const wrapped = new Image()
    wrapped.src = wrappedImg
    wrapped.onload = setLoad(load + 6.7);

    const interval = setInterval(() => {
      setBgColor(methods.getRandomColor)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [load])

  return (
    <div className="App">
      {
        load < 100 && <Loading load={load} />
      }
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
              <Page1 
                setStage={setStage} 
                young={youngImg}
                ghost={ghostImg}
                fairy={fairyImg} 
                balloon={balloonImg}
                french={frenchImg}
                sibling={siblingImg}
                /> :
                stage === 'page2' ? 
                  <Page2 
                    setStage={setStage} 
                    teddy={teddyImg}
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
                                          />
      }
    </div>
  );
}

export default App;
