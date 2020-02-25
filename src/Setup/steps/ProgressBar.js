import React from 'react';
import { Text } from '@habx/ui-core';

import { BarProgress } from './../Setup.style';
const ProgressBar = props => {
  const currentValue = calcul(props.objSetup);

  function calcul(obj) {
    let res = 0;
    for (let [key, value] of Object.entries(obj)) {
      if (typeof key !== 'undefined' && typeof value !== 'undefined') res++;
    }
    return res;
  }
  return (
    <BarProgress>
      <Text type="large">
        Définir vos besoins:{' '}
        {props.currentStep <= 2
          ? 'fondamentaux'
          : props.currentStep === 3
          ? 'pièces'
          : 'caractéristiques  '}
        ({props.currentStep}/{props.maxStep})
      </Text>
      <progress
        style={{
          width: '100%',
          height: '4px',
          border: 'none',
         }}
        max={props.maxStep}
        value={currentValue}
      ></progress>
    </BarProgress>
  );
};
export default ProgressBar;
