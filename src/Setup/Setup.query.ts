import gql from 'graphql-tag';

export const projectQuery = gql`
  query project {
    project {
      id
      name
    }
  }
`;
export const saveSetup = gql`
  mutation saveSetup($setup: SetupInput) {
    upsertSetup(setup: $setup)
  }
`;
