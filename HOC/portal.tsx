import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type ProtalProps = {
  children: any;
};

function Portal({ children }: ProtalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        children,
        document.querySelector('#portal') as HTMLDivElement
      )
    : null;
}

export default Portal;
