import { gql } from '@apollo/client';
import client from '../apollo';
import React, { createContext, ReactElement, useCallback, useEffect, useState } from 'react';

type DataObject = Record<string, string | number | string | Array<DataObject>> | string;

const FILMS_QUERY = `query Query($last: Int) {
  allFilms {
    films {
      title
      director
      releaseDate
      speciesConnection(last: $last) {
        species {
          name
          classification
          homeworld {
            name
          }
        }
      }
    }
  }
}`;

export const FILMS_VARS = `{
  "last": 1
}
`;

export const FILMS_HEADERS = `{
  "headers": "Header value"
}
`;

type Field = {
  name: string;
  description?: string;
  type: string;
};

type DocTreeNode = {
  name: string;
  description?: string;
  fields?: Field[];
  types?: DocTreeNode[];
  expanded: boolean;
};

export interface InitialContext {
  query: string;
  variables: string;
  headers: string;
  filmsData: DataObject;
  isLoading: boolean;
  error: string | null;
  docTree: DocTreeNode | null;
  setQuery: (query: string) => void;
  setVariables: (variable: string) => void;
  setHeaders: (header: string) => void;
  getFilms: () => void;
}

export const GqlContext = createContext<InitialContext | null>(null);

export const GqlProvider = ({ children }: { children: ReactElement }) => {
  const [query, setQuery] = useState<string>(FILMS_QUERY);
  const [variables, setVariables] = useState<string>(FILMS_VARS);
  const [headers, setHeaders] = useState<string>(FILMS_HEADERS);
  const [filmsData, setFilmsData] = useState<DataObject>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [docTree, setDocTree] = useState<DocTreeNode | null>(null);

  const getFilms = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await client.query({
        query: gql`
          ${query}
        `,
        variables: JSON.parse(variables),
        context: {
          headers: JSON.parse(headers),
        },
      });
      setFilmsData(response.data);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
    setIsLoading(false);
  }, [query, variables, headers]);

  // useEffect(() => {
  //   getFilms();
  // }, [getFilms]);

  return (
    <GqlContext.Provider
      value={{
        query,
        variables,
        headers,
        isLoading,
        error,
        docTree,
        filmsData,
        setQuery,
        setVariables,
        setHeaders,
        getFilms,
      }}
    >
      {children}
    </GqlContext.Provider>
  );
};
