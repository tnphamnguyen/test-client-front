import React, { useState } from 'react';
import { Text, TextInput } from '@habx/ui-core';
import { FlexSpaceCenterContainer } from './../Setup.style';
const SurfaceStep = props => {
  const [surface, setSurface] = useState(props.objSetup.surface || '');

  return (
    <React.Fragment>
      <Text type="large">Quel est votre surface souhaitée ?</Text>
      <br />
      <FlexSpaceCenterContainer>
        <TextInput
         style={{ width: '95%' }}
          value={surface}
          elementRight="m²"
          placeholder="50 par exemple"
          onChange={e => {
            setSurface(e.target.value);
            props.callbackSetup({ surface: e.target.value });
          }}
        />
      </FlexSpaceCenterContainer>
    </React.Fragment>
  );
};
export default SurfaceStep;
