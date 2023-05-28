import { Children } from 'react';

export interface Type {
  name: string;
  fields: Field[];
}

export interface Arg {
  name: string;
}

export interface Field {
  name: string;
  description?: string | null;
  type: { name: string; description: string | null };
}

export interface ParsingTypes {
  name: string;
  description: string | null;
  args?: Arg[];
  type: Type;
}

export interface ResponseDocs {
  data: {
    __schema: {
      queryType: {
        fields: ParsingTypes[];
      };
    };
  };
}

export interface DocsNode {
  title: string;
  child?: DocsNode[];
}
