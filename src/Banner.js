import React from 'react'
import Carousel from 'better-react-carousel'
const Banner = () => {
  return (
    <div className='banner' >
     <Carousel cols={1} rows={1} gap={10} loop style={{height:"80vh"}}>
      <Carousel.Item>
        <img width="100%" height="70%" src="https://picsum.photos/800/600?random=1"  />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height="70%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height="70%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
    </div>
  )
}

export default Banner