import React, { useState } from 'react';
import { Text } from '@habx/ui-core';
import {
  CardStep,
  CheckedCardStep,
  FlexSpaceCenterContainer
} from './../Setup.style';
const TypoStep = props => {
  const typologies = [
    {
      id: 1,
      name:'Studio',
      img:
        '//res.cloudinary.com/habx/image/upload/v1539959381/pictos/configutatorRooms/ST.svg'
    },
    {
      id: 2,
      name:'2 pièces',
      img:
        '//res.cloudinary.com/habx/image/upload/v1539959381/pictos/configutatorRooms/T2.svg'
    },
    {
      id: 3,
      name:'3 pièces',
      img:
        '//res.cloudinary.com/habx/image/upload/v1539959381/pictos/configutatorRooms/T3.svg'
    },
    {
      id: 4,
      name:'4 pièces',
      img:
        '//res.cloudinary.com/habx/image/upload/v1539959381/pictos/configutatorRooms/T4.svg'
    },
    {
      id: 5,
      name:'5 pièces',
      img:
        '//res.cloudinary.com/habx/image/upload/v1539959381/pictos/configutatorRooms/T5.svg'
    },
    ,
    {
      id: 6,
      name:'6 pièces',
      img:
        '//res.cloudinary.com/habx/image/upload/v1539959381/pictos/configutatorRooms/T6.svg'
    }
  ];

  const [selectedTypo, setSelectedTypo] = useState(
    props.objSetup.typology || ''
  );

  return (
    <React.Fragment>
      <Text type="large">
        Parlons un peu plus de votre appartement. Vous cherchez … ?
      </Text>
      <br />
      <FlexSpaceCenterContainer>
        {typologies.map(item => {
          return (
            <CardStep
              key={item.id}
              onClick={() => {
                setSelectedTypo(item.id);
                props.callbackSetup({ typology: item.id });
              }}
            >
              <img src={item.img} />
              <Text>{item.name}</Text>
              {selectedTypo !== null && item.id === selectedTypo && (
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
export default TypoStep;
