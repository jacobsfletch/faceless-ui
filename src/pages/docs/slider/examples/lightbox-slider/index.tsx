import React, { Fragment, useState } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { SliderProvider, SliderTrack, Slide } from '@faceless-ui/slider'
import classes from './index.module.scss';
import { Modal, ModalToggler, useModal } from '@faceless-ui/modal';
import { Hyperlink } from '@components/Hyperlink';

const slides = Array.from(Array(6).keys()) // NOTE: create array from number

const LightboxSliderExample = () => {
  const { open: openModal } = useModal();
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  return (
    <Fragment>
      <h1>
        Lightbox Slider Example
      </h1>
      <Margin bottom="xs">
        {'This is a "lightbox slider" that opens the slide in a larger view when clicked. See '}
        <Hyperlink href="/docs/slider/setup#sync">
          synchronized sliders
        </Hyperlink>
        {' for more information.'}
      </Margin>
      <Margin bottom="xs">
        <SliderProvider
          slidesToShow={2}
          useFreeScroll
        >
          <SliderTrack className={classes.track}>
            {slides.map((slide, index) => (
              <Slide
                key={index}
                index={index}
                className={classes.slide}
                onClick={() => {
                  openModal('lightbox');
                  setSliderIndex(index);
                }}
              >
                {`Slide ${index + 1}`}
              </Slide>
            ))}
          </SliderTrack>
        </SliderProvider>
      </Margin>
      <Hyperlink href={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/lightbox-slider.tsx`}>
        Source code
      </Hyperlink>
      <Modal
        slug="lightbox"
        className={classes.modal}
      >
        <div className={classes.modalContent}>
          <ModalToggler
            slug="lightbox"
            className={classes.close}
          >
            Close
          </ModalToggler>
          <SliderProvider
            slidesToShow={1}
            useFreeScroll
            currentSlideIndex={sliderIndex}
          >
            <SliderTrack className={classes.modalTrack}>
              {slides.map((slide, index) => (
                <Slide
                  key={index}
                  index={index}
                  className={classes.modalSlide}
                >
                  {`Slide ${index + 1}`}
                </Slide>
              ))}
            </SliderTrack>
          </SliderProvider>
        </div>
      </Modal>
    </Fragment >
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/lightbox-slider.tsx`}
      metaTitle="Lightbox slider example"
      metaDescription="Lightbox slider package."
    />
  )
};

LightboxSliderExample.Layout = DocLayout;

export default LightboxSliderExample;
