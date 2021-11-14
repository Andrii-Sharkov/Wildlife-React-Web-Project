import React from 'react';
import { ExploreSection, ExploreContent, ExploreTitleWrapper, ExploreTitle, ExploreSubtitle, ExploreImagesWrapper, Column, Description } from './exploreElements';
import { ExploreData } from './exploreData';

const Explore = () => {
  return (
    <ExploreSection>
      <ExploreContent>
        <ExploreTitleWrapper>
          <ExploreTitle>Explore The World</ExploreTitle>
          <ExploreSubtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quaerat possimus quae animi.
          </ExploreSubtitle>
        </ExploreTitleWrapper>
        <ExploreImagesWrapper>
          {ExploreData.map((data, index) => {
            return (
              <Column key={index}>
                <img src={data.image} alt='picture' />
                <Description>{data.description}</Description>
              </Column>             
            )
          })}
        </ExploreImagesWrapper>
      </ExploreContent>
    </ExploreSection>
  )
}

export default Explore;