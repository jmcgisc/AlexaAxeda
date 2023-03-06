import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function App() {
  return ( 
    <div className =""> 
   
    <MDBCarousel showControls showIndicators className=" basis-2/5">
      <MDBCarouselItem
        className='max-w-screen-lg '
        itemId={1}
        src='/public/fachada_rosavento_1.jpg'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='max-w-screen-lg'
        itemId={2}
        src='/public/fachada_rosavento_2.jpg'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem> 
      <MDBCarouselItem
        className='max-w-screen-lg'
        itemId={3}
        src='/public/fachada_rosavento_3.jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  );
}