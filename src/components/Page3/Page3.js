import { useEffect, useState } from 'react'
import './Page3.css'

const Page3 = (props) => {
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        let final = document.getElementById('final')
        if (final) {
            final.play()
            final.volume = 1;
        }

        const interval = setInterval(() => {
            setRefresh(refresh + 1)
          }, 200)
      
          return () => {
            clearInterval(interval)
          }

    }, [refresh, props])

    return (
        <div className="page3-container">
            <audio id="final">
              <source src={props.final}></source>
            </audio>
            {(refresh >= 20 && refresh <= 100) && <img className="image-size backed w3-animate-opacity" src={props.jp} alt="" />}
            {(refresh >= 30 && refresh <= 100) && <img className="image-size backed2 w3-animate-opacity" src={props.bag} alt="" />}
            {(refresh >= 40 && refresh <= 100) && <img className="image-size backed3 w3-animate-opacity" src={props.god} alt="" />}
            {(refresh >= 50 && refresh <= 100) && <img className="image-size backed4 w3-animate-opacity" src={props.heif} alt="" />}
            {(refresh >= 60 && refresh <= 100) && <img className="image-size backed5 w3-animate-opacity" src={props.bag2} alt="" />}
            {(refresh >= 70 && refresh <= 100) && <img className="image-size backed6 w3-animate-opacity" src={props.spread} alt="" />}
            {(refresh >= 80 && refresh <= 100) && <img className="image-size backed7 w3-animate-opacity" src={props.cow} alt="" />}
            {(refresh >= 90 && refresh <= 100) && <img className="image-size backed8 w3-animate-opacity" src={props.wrapped} alt="" />}
            <div className="texted">
                {
                    refresh >= 5 && <h1 className="big-red">Also...</h1>
                }
                {
                    refresh >= 10 && <h2 className="big-red">It's your BIRTHDAY!!!!</h2>
                }
            </div>
        </div>
    )
}

export default Page3