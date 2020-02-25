import styled from 'styled-components';

export const SetupContainer = styled.div`
  padding: 64px;
`;

export const FlowStepContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 60%;
`;
export const BarProgress = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

export const FlexSpaceBwtContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FlexSpaceCenterContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const CardStep = styled.div`
  margin: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  min-width: 150px;
`;
export const CheckedCardStep = styled.div`
  color: red;
  position: absolute;
  right: 26px;
  top: 0px;
`;

export const ErrorSetupContainer = styled.div`
  align-self: flex-end;
  margin: 10px 0 10px 0;
`;
export const IFrame = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const PanelResult = styled.div`
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  flow-direction: column;
  width: 20%;
  justify-content: center;
  z-index: 999999;
  position: fixed;
  top: 50px;
  left: 50px;
`;
