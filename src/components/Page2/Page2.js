import { useEffect, useState } from 'react'
import './Page2.css'

const Page2 = (props) => {
    const [refresh, setRefresh] = useState(0);

    const change = () => {
        props.setStage('page3')
    }

    useEffect(() => {
        let baby = document.getElementById('baby')
        if (baby) {
            baby.play()
            baby.volume = 1;
        }

        let hit = document.getElementById('hit')
            if (refresh === 10) {
                hit.play()
            } else if (refresh === 15) {
                hit.currentTime = 0;
            } else if (refresh === 20) {
                hit.currentTime = 0;
            } else if (refresh === 40) {
                hit.pause()
            }

        const interval = setInterval(() => {
            setRefresh(refresh + 1)
          }, 200)
      
          return () => {
            clearInterval(interval)
          }
    }, [refresh, props])

    return (
        <div className="page2-container">
            <audio id="baby">
              <source src={props.baby}></source>
            </audio>
            <audio id="hit">
              <source src={props.hit}></source>
            </audio>
            <div>
                <img className="image-size w3-animate-opacity" src={props.teddy} alt="" />
            </div>
            <div className="big-titles">
                <h1>
                    {
                        (refresh >= 10 && refresh < 15) ?
                            'Teddy.' :
                            (refresh >= 15 && refresh < 20) ?
                                    'Teddy. Is.' :
                                        (refresh >= 20 && refresh < 30) ?
                                            'Teddy. Is. Cute.' :
                                                refresh >= 30 &&
                                                <button
                                                    className="start-button"
                                                    onClick={() => change()}
                                                    style={{width: '30%', fontSize: '20px'}}
                                                    >
                                                    Oh god is there more!?
                                                    Click me to find out!
                                                </button>
                    }
                </h1>
            </div>
        </div>
    )
}

export default Page2