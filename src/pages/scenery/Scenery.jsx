import React, { useState } from 'react'
import Layout from '../../components/UI/Layout'
import BackgroundLayout from './props.jsx'
import backgroundStyles from './scenery.module.css'
import { ReactComponent as LocationIcon } from '../../assets/images/scenery/Vector.svg'


const Scenery = () => {
  const [click, setClick] = useState(false)

  const handleClick = (index) => () => {
      setClick(state => ({
        ...state, // <-- copy previous state
        [index]: !state[index] // <-- update value by id
      }));
  };

  return (
    <Layout>
        <main className={backgroundStyles.backgroundContainer}>

            <div>
                <h2 className={backgroundStyles.heading}>
                Explore Our Environment at VoxClips
                </h2>
                
                <p className={backgroundStyles.headingP}>visit our studios to know how and when to use them</p>
            </div>

            <div className={backgroundStyles.figureContainer}>
              {
                BackgroundLayout.map(val => (
                  <figure key={val.id} className={backgroundStyles.figure}>

                    <img src={val.avatar} alt={val.name} className={backgroundStyles.image} />

                    <figcaption className={backgroundStyles.figCaption}>

                      <p className={backgroundStyles.name}>{val.name}</p>

                      <p className={backgroundStyles.location}> <LocationIcon /> {val.location}</p>

                      <p key={val.id} className={`${backgroundStyles.description} ${click[val.id] ? backgroundStyles.ellipsis : ''}`}>{val.description}</p>

                      <p className={backgroundStyles.expand} onClick={handleClick(val.id)}>{click[val.id] ? 'Collapse' : 'Expand'}</p>
                    </figcaption>

                </figure>
  
                ))
              }
            </div>
        </main>
    </Layout>
  )
}

export default Scenery