import { useEffect, useState } from 'react'
import hit from '../../music/hit.mp3';
import './Page2.css'

const Page2 = (props) => {
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        let baby = document.getElementById('baby')
        if (baby) {
            baby.play()
            baby.volume = 1;
        }

        let hit = document.getElementById('hit')
            if (refresh === 10) {
                hit.currentTime = 0;
                hit.play()
            } else if (refresh === 15) {
                hit.pause()
                hit.currentTime = 0;
                hit.play()
            } else if (refresh === 19) {
                hit.currentTime = 0;
            } else if (refresh === 20) {
                hit.play()
            } else if (refresh === 40) {
                hit.pause()
            } 

        if (refresh === 40) {
            props.setStage('page3')
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
              <source src={hit}></source>
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
                                        refresh >= 20 &&
                                            'Teddy. Is. Cute.'
                    }
                </h1>
            </div>
        </div>
    )
}

export default Page2