import React from 'react';
import { IFrame, PanelResult } from './Setup.style';
import { Text, TextInput, Button } from '@habx/ui-core';
const SceneLoader = props => {
  function displayExpo(expos) {
    let res = '';
    if (Array.isArray(expos)) expos.map(item => (res += item + ' '));
    return res;
  }
  function displayTypo(typo) {
    let res = '';
    res = typo ? typo + ' pièces' : '';
    return res;
  }
  return (
    <React.Fragment>
      <PanelResult>
        <Text>Vos critères de recherche</Text>
        <TextInput
          style={{ width: '95%' }}
          value={props.objSetup.budget}
          disabled
          elementRight="€"
        />
        <TextInput
          style={{ width: '95%' }}
          value={props.objSetup.surface}
          disabled
          elementRight="m²"
        />
        <TextInput
          style={{ width: '95%' }}
          value={displayExpo(props.objSetup.exposures)}
          disabled
        />
        <TextInput
          style={{ width: '95%' }}
          value={displayTypo(props.objSetup.typology)}
          disabled
        />
        <Button style={{ marginTop: '10px' }} onClick={props.callbackReturn}>
          Retourner à l'écran de recherche
        </Button>
      </PanelResult>
      <IFrame
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }}
      />
    </React.Fragment>
  );
};
export default SceneLoader;
