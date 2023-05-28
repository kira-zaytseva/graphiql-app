import React, { useEffect } from 'react';
import { Tree } from 'antd';
import { DocsNode } from '../../types/types';
import { useFilmsQuery } from '../../hooks/gql';
const { TreeNode } = Tree;

const renderTreeNodes = (data: DocsNode[]) =>
  data.map((item, index) => {
    if (item.child) {
      return (
        <TreeNode title={<a>{item.title}</a>} selectable={false} key={item.title + index + 1}>
          {renderTreeNodes(item.child)}
        </TreeNode>
      );
    }
    return <TreeNode key={item.title + index} {...item} />;
  });

const DocsTree = () => {
  const { docTree, getDocs } = useFilmsQuery();

  useEffect(() => {
    getDocs();
  }, []);

  if (!docTree) {
    return <span>Loading...</span>;
  }

  return (
    <Tree showLine={{ showLeafIcon: false }} defaultExpandAll>
      {renderTreeNodes([docTree])}
    </Tree>
  );
};

export default DocsTree;
