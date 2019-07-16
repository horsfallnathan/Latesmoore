import * as React from "react";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import s from "./Carousel.scss";
import { Container } from "components/container/Container";
import { Button } from "components/button/Button";
import PrevButton from "assets/svg/prev.svg";
import NextButton from "assets/svg/next.svg";

interface GalleryProps {
  clones?: Array<{
    imageUrl: string;
    title: string;
    secondTitle: string;
    pageUrl: string;
    description: string;
  }>;
}

const Gallery = ({ clones }: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSlideChanged = e => {
    setCurrentIndex(e.item);
  };

  const slideNext = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const slidePrev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleOnDragStart = e => e.preventDefault();
  const items =
    clones &&
    clones.map((_, i) => <div key={i} className={`${s.intro__text}`} />);

  return (
    <div className={`${s.carouselContainer}`}>
      {/* <Container> */}
      {/* <div className={`${s.carouselContent}`}> */}
      {/* <div className={`${s.smallCarousel}`}>
          <AliceCarousel
            autoPlay
            autoPlayInterval={8000}
            duration={1200}
            mouseDragEnabled
            dotsDisabled={true}
            onSlideChanged={onSlideChanged}
            buttonsDisabled={true}
            slideToIndex={currentIndex}
          >
            {[
              <div className={`${s.intro__text}`} />,
              <div className={`${s.intro__text}`} />
            ]}
          </AliceCarousel>
        </div> */}
      <Container>
        <div className={s.intro__text__description}>
          <p>Energy, Logistics and</p>
          <p>Engineering Company</p>
          <Button to="/about">Learn More</Button>
        </div>
      </Container>
      {/* </div> */}
      {/* </Container> */}

      {/* <PrevButton className={s.prevButton} onClick={() => slidePrev()} />
     <NextButton className={s.nextButton} onClick={() => slideNext()} /> */}
    </div>
  );
};

export default Gallery;
