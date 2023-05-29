import React, { createContext, ReactElement, useCallback, useState } from 'react';
import { gql } from '@apollo/client';
import client from '../apollo';
import { getDocsResponse } from '../API/docs';
import { DocsNode, ResponseDocs } from '../types/types';
import { parseDocs } from '../helpers/docsParsing';

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

const FILMS_VARS = `{
  "last": 1
}
`;

const FILMS_HEADERS = `{
  "headers": "Header value"
}
`;

export interface InitialContext {
  query: string;
  variables: string;
  headers: string;
  filmsData: DataObject;
  isLoading: boolean;
  error: string | null;
  docTree: DocsNode | null;
  setQuery: (query: string) => void;
  setVariables: (variable: string) => void;
  setHeaders: (header: string) => void;
  getFilms: VoidFunction;
  isLoadingDocs: boolean;
  getDocs: VoidFunction;
}

export const GqlContext = createContext<InitialContext | null>(null);

export const GqlProvider = ({ children }: { children: ReactElement }) => {
  const [query, setQuery] = useState<string>(FILMS_QUERY);
  const [variables, setVariables] = useState<string>(FILMS_VARS);
  const [headers, setHeaders] = useState<string>(FILMS_HEADERS);
  const [filmsData, setFilmsData] = useState<DataObject>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingDocs, setIsLoadingDocs] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [docTree, setDocTree] = useState<DocsNode | null>(null);

  const getDocs = useCallback(async () => {
    setIsLoadingDocs(true);
    setError('');
    try {
      const response = await getDocsResponse();
      const { data } = (await response.json()) as ResponseDocs;
      const preparedDocs = parseDocs(data.__schema.queryType.fields);

      setDocTree(preparedDocs);
    } catch (e) {
      if (e instanceof Error) {
        setError(JSON.stringify(e, null, 2));
      }
    }
    setIsLoadingDocs(false);
  }, [setDocTree, setIsLoadingDocs, setError]);

  const getFilms = useCallback(async () => {
    setIsLoading(true);
    setError('');
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
        setError(JSON.stringify(e, null, 2));
      }
    }
    setIsLoading(false);
  }, [query, variables, headers]);

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
        isLoadingDocs,
        getDocs,
      }}
    >
      {children}
    </GqlContext.Provider>
  );
};
