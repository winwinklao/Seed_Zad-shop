import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/127155217_1521957791348588_7500811376930087032_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_eui2=AeEG4Uu5Gg29eOpKcKU2gjKMUjbOKVZcbJ9SNs4pVlxsn4thFTghIpBFSigSNYdlnihfH63Vj4HK8hcI1WTQIU2a&_nc_ohc=UFnzUtzV3NQAX_IgNB2&_nc_ht=scontent.fbkk11-1.fna&oh=d7391c0ddb45429b6e2050491562d916&oe=5FE9DE8D',
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/127872636_1521957851348582_3998614994345460956_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_eui2=AeHHrILEfNhxkpKmx9m5E8ymnz27XZI5pIifPbtdkjmkiJuwWHnELbkSWRJ9gUQADEWbHG6J8xaZChURxuqbkv3R&_nc_ohc=z0VXwuIk_XwAX8__e9I&_nc_ht=scontent.fbkk11-1.fna&oh=52d7802bc66fd2b8f1893cbf19494f42&oe=5FE73179',
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/127246983_1521957814681919_4402782845890355023_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_eui2=AeHrKQdorSkKuWvaZkqdBllbrHdoHFMaCbusd2gcUxoJu2h-YRrJdR_FpuFpaBi87PhVUhIYiaGtESgOamb4WuT3&_nc_ohc=4BJtAvQEjskAX97lqiN&_nc_ht=scontent.fbkk11-1.fna&oh=97b642afcb2c497dae10f97e6d84072a&oe=5FE6F53A',
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  }
];

const Slidebar = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel  
      activeIndex={activeIndex}
      next={next}
      previous={previous}
     >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slidebar;