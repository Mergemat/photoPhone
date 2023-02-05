import React, { PropsWithChildren } from 'react';

export const Screen = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center space-y-7">{children}</div>
  );
};
