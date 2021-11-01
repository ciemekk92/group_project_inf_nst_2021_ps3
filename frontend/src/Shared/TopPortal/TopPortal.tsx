import React from 'react';
import { createPortal } from 'react-dom';

interface PortalArgs {
  children: React.ReactNode;
  rootId?: string;
}

export const TopPortal = ({ children, rootId }: PortalArgs): React.ReactPortal => {
  const root = rootId ? document.getElementById(rootId) : document.body;

  return createPortal(children, root as Element);
};
