import { useQuery, useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';

import { Button, Title, Text } from '@habx/ui-core';

import { projectQuery, saveSetup } from './Setup.query';
import {
  SetupContainer,
  FlexSpaceBwtContainer,
  FlowStepContainer,
  ErrorSetupContainer
} from './Setup.style';

//component
import ProgressBar from './steps/ProgressBar';
import PriceStep from './steps/PriceStep';
import SurfaceStep from './steps/SurfaceStep';
import ExpoStep from './steps/ExpoStep';
import TypoStep from './steps/TypoStep';
import SceneLoader from './SceneLoader';
import { notify } from '@habx/ui-core';
const Setup = () => {
  const pattern = /^\d+$/;
  const model =
    '<iframe frameborder="0" marginheight="0" marginwidth="0"  width="100%" height="100%" scrolling="auto" src="https://www.habx-dev.com/match/habx/3d?gltf=https://cdn.habx.com/housing-3d-layouts/cergy-boisselerie/dev/B3E2L04/A0-B0/2020-02-14-172809/bake.gltf" />';

  const projectResponse = useQuery(projectQuery);

  const [currentStep, setCurrentStep] = useState(1);
  const [displayScene, setDisplayScene] = useState(false);

  const [objSetup, setObjSetup] = useState({});

  const [setupResponse, { loading }] = useMutation(saveSetup, {
    onCompleted: data => {
      if (data.upsertSetup) {
        setDisplayScene(true);
      }
    }
  });

  const [error, setError] = useState('');

  const [disableNextButton, setDisableNextButton] = useState(
    checkDisableButton()
  );
  const callbackSetup = val => {
    if (val.budget && !isNumber(val.budget)) {
      setError('Le prix devrait être un nombre');
      return;
    }
    if (val.surface && !isNumber(val.surface)) {
      setError('La surface devrait être un nombre');
      return;
    }
    setError('');
    const newObj = Object.assign(objSetup, val);
    setObjSetup(newObj);
    setDisableNextButton(checkDisableButton());
  };

  function isNumber(str) {
    return pattern.test(str);
  }

  const handleClickReturn = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
    else setCurrentStep(1);
  };
  function checkDisableButton() {
    const err = error !== '';
    let obj = {} as any; //pour désactiver temporairement le linter
    obj = objSetup;
    if (currentStep === 1) {
      return err || !obj.budget;
    } else if (currentStep === 2) {
      return err || !obj.surface;
    } else if (currentStep === 3) {
      return err || !obj.exposures;
    }
    if (currentStep === 4) {
      return err || !obj.typology;
    }

    return err;
  }
  const callbackReturn = () => {
    setObjSetup({});
    setCurrentStep(1);
    setDisplayScene(false);
  };
  const content = displayStep(currentStep);
  function displayStep(st) {
    switch (currentStep) {
      case 1:
        return <PriceStep callbackSetup={callbackSetup} objSetup={objSetup} />;
        break;
      case 2:
        return (
          <SurfaceStep callbackSetup={callbackSetup} objSetup={objSetup} />
        );
        break;
      case 3:
        return <ExpoStep callbackSetup={callbackSetup} objSetup={objSetup} />;
        break;
      case 4:
        return <TypoStep callbackSetup={callbackSetup} objSetup={objSetup} />;
        break;
      default:
        return <PriceStep callbackSetup={callbackSetup} objSetup={objSetup} />;
        break;
    }
  }
  const handleValidSetup = async () => {
    let obj = {} as any;
    obj = objSetup;
    const convertObj = {
      budget: parseInt(obj.budget),
      surface: parseInt(obj.surface),
      exposures: obj.exposures,
      typology: parseInt(obj.typology)
    };
    await setupResponse({ variables: { setup: convertObj } });
  };
  return (
    <React.Fragment>
      {!displayScene && (
        <SetupContainer>
          <Title type="article">{projectResponse.data?.project.name}</Title>
          <br />
          <ProgressBar
            maxStep="4"
            currentStep={currentStep}
            objSetup={objSetup}
          />
          <br />

          <FlowStepContainer>
            {content}
            <div style={{ height: '40px' }}>
              {error && (
                <ErrorSetupContainer>
                  <Text type="caption" color="red">
                    {error}
                  </Text>
                </ErrorSetupContainer>
              )}
            </div>

            <FlexSpaceBwtContainer>
              <Button disabled={currentStep === 1} onClick={handleClickReturn}>
                Retour
              </Button>

              {currentStep < 4 && (
                <Button
                  disabled={disableNextButton}
                  onClick={() =>
                    currentStep < 4
                      ? setCurrentStep(currentStep + 1)
                      : setCurrentStep(1)
                  }
                >
                  Suivant
                </Button>
              )}

              {currentStep === 4 && (
                <Button onClick={handleValidSetup}>Valider</Button>
              )}
            </FlexSpaceBwtContainer>
          </FlowStepContainer>
        </SetupContainer>
      )}
      {displayScene && (
        <SceneLoader
          iframe={model}
          objSetup={objSetup}
          callbackReturn={callbackReturn}
        />
      )}
    </React.Fragment>
  );
};

export default Setup;
