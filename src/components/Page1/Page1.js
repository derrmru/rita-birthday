import { useEffect, useState } from 'react'
import methods from '../../functions/functions'
import classic from '../../music/classic.mp3'
import hb from '../../music/hb.mp3'
import youngTwat from '../../images/young-twat.jpg'
import ghostTwat from '../../images/ghost-twat.jpg'
import fairyTwat from '../../images/fairy-twat.jpg'
import balloonTwat from '../../images/balloon-twat.jpg'
import frenchTwat from '../../images/french-twat.jpg'
import siblingTwat from '../../images/sibling-twat.jpg'
import './Page1.css'

const Page1 = (props) => {
    const [refresh, setRefresh] = useState(0);
    const [bgColor, setBgColor] = useState('#ffffff');
    const [and, setAnd] = useState('');

    useEffect(() => {
        let classical = document.getElementById('classic')
        if (classical && refresh >= 39) { classical.pause() } else {
            classical.play()
            classical.volume = 1;
        }
        let audio = document.getElementById('audio')
        if (audio && refresh >= 39) { 
            audio.play()
            audio.volume = 0.8
        }

        const letters = ', and...'
        const interval = setInterval(() => {
          setRefresh(refresh + 1)
          refresh >= 20 && setAnd(letters.slice(0, refresh - 20))
          if (refresh >= 40 && refresh % 5 === 0) setBgColor(methods.getRandomColor())
        }, 200)
    
        return () => {
          clearInterval(interval)
        }
      }, [refresh, and])

    return (
        <div 
            className="page1-container"
            style={{backgroundColor: bgColor, fontFamily: 'Russo One'}}>
            <audio id="classic">
              <source src={classic}></source>
            </audio>
            <audio id="audio">
              <source src={hb}></source>
            </audio>
            {
                refresh <= 50 ? 
                    <>
                    <h1 
                        className='w3-animate-top'
                        style={{fontFamily: 'Russo One'}}
                        >
                        Rita
                    </h1>
                    {
                        refresh >= 10 ? (
                        <h2 
                            className='w3-animate-bottom'
                            style={{fontFamily: 'Russo One'}}
                            >
                                You are now 30{refresh >= 20 && and}
                        </h2>
                        ) : <h2> </h2>
                    }
                    {
                        refresh >= 40 &&
                        <h2 
                            className='w3-animate-right'
                            style={{fontFamily: 'Russo One'}}
                            >
                                You're still a twat
                        </h2>
                    }
                    </> : 
                    (refresh >= 50 && refresh < 60) ?
                        <figure className="w3-animate-zoom" >
                            <img className="image-size" src={youngTwat}/>
                            <figcaption>Young Twat</figcaption>
                        </figure> :
                            (refresh >= 60 && refresh < 70) ? 
                                <figure className="w3-animate-left">
                                    <img className="image-size" src={ghostTwat} />
                                    <figcaption>Ghost Twat</figcaption>
                                </figure> :
                                    (refresh >= 70 && refresh < 80) ? 
                                        <figure className="w3-animate-right">
                                            <img className="image-size" src={fairyTwat} />
                                            <figcaption>Fairy Twat</figcaption>
                                        </figure> :
                                            (refresh >= 80 && refresh < 90) ?
                                                <figure className="w3-animate-top">
                                                    <img className="image-size" src={balloonTwat} />
                                                    <figcaption>Balloon Twat</figcaption>
                                                </figure> :
                                                    (refresh >= 90 && refresh < 100) ? 
                                                        <figure className="w3-animate-bottom">
                                                            <img className="image-size" src={frenchTwat} />
                                                            <figcaption>French Twat</figcaption>
                                                        </figure> : 
                                                            (refresh >= 100 && refresh < 110) ? 
                                                                <figure className="w3-animate-zoom">
                                                                    <img className="image-size" src={siblingTwat} />
                                                                    <figcaption>Sibling Twat</figcaption>
                                                                </figure>  :
                                                                    props.setStage('page2')
            }
        </div>
    )
}

export default Page1