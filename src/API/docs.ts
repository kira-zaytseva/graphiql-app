import { getIntrospectionQuery } from 'graphql';

const BASE_URL = process.env.BASE_URL;

export const getDocsResponse = async () => {
  const response = await fetch(`${BASE_URL}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      query: `query IntrospectionQuery {
        __schema {
          queryType {
            fields {
              name
              description
              args {
                name
              }
              type {
                name
                fields {
                  name
                  description
                  type {
                    name
                    description
                  }
                }
              }
            }
          }
        }
      }`,
    }),
  });

  return response;
};
