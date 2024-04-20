import React from 'react'
import Title from './Title'
import { tour } from './data'

function Tours() {
  return (
    <section className="section" id="tours">
     <Title title='featured' subtitle='tours' />

    <div className="section-center featured-center">
     
     {
      tour.map((tours)=>{
        const {id,title,date,info,duration,cost,img,location,icon}= tours;
        return (
          <article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={img} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
       {info}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className={icon}></i></span>{location}
              </p>
              <p>{duration}</p>
              <p>from ${cost}</p>
            </div>
          </div>
        </article>
        )
      })
     }
    </div>
  </section>
  )
}

export default Tours
