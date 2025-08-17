export const getMenuByHandleQuery = `
  query getMenuByHandle($handle: String!) {
    menu(handle: $handle) {
      id
      handle
      title
      items {
        id
        title
        url
        type
      }
    }
  }
`;
