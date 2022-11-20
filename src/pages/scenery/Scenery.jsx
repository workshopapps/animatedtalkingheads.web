import React from 'react'
import Layout from '../../components/UI/Layout'
import BackgroundLayout from './props.jsx'
import backgroundStyles from './scenery.module.css'
import { ReactComponent as LocationIcon } from '../../assets/images/scenery/Vector.svg'
import { Link } from 'react-router-dom'


const Scenery = () => {

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

                      <p className={backgroundStyles.description}>{val.description}</p>

                      <Link className={backgroundStyles.expand}>Expand</Link>
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