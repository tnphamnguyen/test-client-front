import React, { useState } from 'react';
import { Text } from '@habx/ui-core';
import {
  CardStep,
  CheckedCardStep,
  FlexSpaceCenterContainer
} from './../Setup.style';
const ExpoStep = props => {
  const exposuresArray = [
    {
      dir: 'north',
      img:
        '//res.cloudinary.com/habx/image/upload/v1519834240/setup/options/exposure/north.svg'
    },
    {
      dir: 'south',
      img:
        '//res.cloudinary.com/habx/image/upload/v1519834240/setup/options/exposure/south.svg'
    },
    {
      dir: 'east',
      img:
        '//res.cloudinary.com/habx/image/upload/v1519834240/setup/options/exposure/east.svg'
    },
    {
      dir: 'west',
      img:
        '//res.cloudinary.com/habx/image/upload/v1519834240/setup/options/exposure/west.svg'
    }
  ];

  const [selectedExpo, setSelectedExpo] = useState(
    props.objSetup.exposures || []
  );

  const handleSelectExpo = expo => {
    let arr = [...selectedExpo];
    if (arr.includes(expo)) {
      const idx = arr.indexOf(expo);
      if (idx > -1) arr.splice(idx, 1);
    } else {
      arr.push(expo);
    }
    props.callbackSetup({ exposures: arr });
    setSelectedExpo(arr);
  };

  const display = name => {
    return selectedExpo.indexOf(name) > -1;
  };
  return (
    <React.Fragment>
      <Text type="large">
        Quelle est votre exposition préférée ? plusieurs choix possibles
      </Text>
      <br />
      <FlexSpaceCenterContainer>
        {exposuresArray.map(item => {
          return (
            <CardStep
              key={item.dir}
              onClick={() => {
                handleSelectExpo(item.dir);
              }}
            >
              <img src={item.img} />
              <Text>{item.dir}</Text>
              <Text>{selectedExpo.dir}</Text>
              {display(item.dir) && (
                <CheckedCardStep>
                  <p>&#10004;</p>
                </CheckedCardStep>
              )}
            </CardStep>
          );
        })}
      </FlexSpaceCenterContainer>
    </React.Fragment>
  );
};
export default ExpoStep;
