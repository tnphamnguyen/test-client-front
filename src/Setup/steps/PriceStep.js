import React, { useState } from 'react';
import { Text, TextInput } from '@habx/ui-core';
import { FlexSpaceCenterContainer } from './../Setup.style';

const PriceStep = props => {
  const [budget, setBudget] = useState(props.objSetup.budget || '');
  return (
    <React.Fragment>
      <Text type="large">Quel est votre budget souhaité ?</Text>
      <br />
      <FlexSpaceCenterContainer>
        <TextInput
          required
          style={{ width: '95%' }}
          value={budget}
          elementRight="€"
          placeholder="300 000 par exemple"
          onChange={e => {
            setBudget(e.target.value);
            props.callbackSetup({ budget: e.target.value });
          }}
        />
      </FlexSpaceCenterContainer>
    </React.Fragment>
  );
};
export default PriceStep;
