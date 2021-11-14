import React from 'react';
import { ShowcaseTwoSection, ShowcaseTwoContent, ShowcaseTwoColumn, ShowcaseTwoTitleWrapper, ShowcaseTwoTitle, ShowcaseTwoSubtitle } from './showcaseTwoElements';
import Image1 from '../../images/antarctica.jpg';
import Image2 from '../../images/whale.jpg';

const ShowcaseTwo = () => {
  return (
    <ShowcaseTwoSection>
      <ShowcaseTwoContent>
        <ShowcaseTwoColumn>
          <img src={Image1} alt='antarctica' />
        </ShowcaseTwoColumn>
        <ShowcaseTwoColumn>
        <img src={Image2} alt='whale' />
        </ShowcaseTwoColumn>
      </ShowcaseTwoContent>
      <ShowcaseTwoTitleWrapper>
        <ShowcaseTwoTitle>Top 10 Wildlife Photographers To Watch</ShowcaseTwoTitle>
        <ShowcaseTwoSubtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ratione dolor id dolorem voluptates delectus ducimus quam tenetur? Quo, numquam? Possimus praesentium similique mollitia labore, voluptatem hic nemo repellendus modi inventore aut dolor eligendi nihil sapiente, maiores optio reprehenderit? Minima distinctio odit dolor beatae doloribus, porro ipsa voluptatum obcaecati architecto.
        </ShowcaseTwoSubtitle>
      </ShowcaseTwoTitleWrapper>
    </ShowcaseTwoSection>
  )
}

export default ShowcaseTwo;