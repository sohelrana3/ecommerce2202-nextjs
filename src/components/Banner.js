"use client"
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
  return (

    <div className='bg-red-400'>
<Carousel>
    <Carousel.Item>
        <Image src="http://localhost:8000/uploads/images-1710737297389-20479307-4.png" alt='logo' width={500} height={500} />
      
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <Image src="http://localhost:8000/uploads/images-1710737297389-20479307-4.png" alt='logo' width={500} height={500} />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <Image src="http://localhost:8000/uploads/images-1710737297389-20479307-4.png" alt='logo' width={500} height={500} />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

    </div>
    
  )
}

export default Banner