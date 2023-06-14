import React, { useRef, useEffect } from 'react';
import mount from 'formbuilder/Formbuilder';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, "test text");
  });

  return <div ref={ref} />;
};