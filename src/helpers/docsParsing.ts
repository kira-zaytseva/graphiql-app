import { Arg, DocsNode, Field, ParsingTypes } from '../types/types';

export const parseDocs = (docs: ParsingTypes[]) => {
  const parsedDocs = docs.map(({ name, description, args, type }) => {
    const childrenArg = args?.map((arg: Arg) => ({ title: arg.name }));
    const childrenFields = type.fields.map((field: Field) => {
      const descriptions = {
        title: field.description,
      };

      const types = {
        title: field.type.name,
        child: [{ title: field.type.description }],
      };

      const names = {
        title: field.name,
        child: [{ title: 'description', child: [descriptions] }],
      };

      if (field.type.name || field.type.description) {
        names.child.push({ title: 'type', child: [types] });
      }

      return names;
    });
    const childrenDescription = [
      {
        title: description || '',
      },
    ];

    const node: DocsNode = {
      title: name,
      child: [
        { title: 'arguments', child: childrenArg },
        { title: 'fields', child: childrenFields },
      ],
    };

    if (description) {
      node.child?.push({ title: 'description', child: childrenDescription });
    }

    return node;
  });

  const result = {
    title: 'Root',
    child: parsedDocs,
  };
  return result;
};
