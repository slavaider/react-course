import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { fadeDelay } from '../../utils/constants';

function withFade<T>(Child: React.ComponentType<T>): React.FC<T> {
  const FadeWrapper: React.FC<T> = (props: T) => {
    const [isShow, setShow] = useState<boolean>(false);
    const nodeRef = React.useRef(null);

    useEffect(() => {
      if (!isShow)
        setTimeout(() => {
          setShow(true);
        }, fadeDelay);
    });
    return (
      <CSSTransition
        nodeRef={nodeRef}
        aria-label="transition"
        in={isShow}
        timeout={fadeDelay}
        classNames="my-node"
      >
        <div ref={nodeRef} className="wrapper my-node-enter">
          <Child {...(props as T)} />
        </div>
      </CSSTransition>
    );
  };
  return FadeWrapper;
}

export default withFade;
