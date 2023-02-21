import { useEffect, useRef } from 'react';

export const useFocusTrap = (isMounted, triggerRef) => {
  // ref should be attached to main modal component when used
  const modalRef = useRef();
  const firstElement = useRef(null);
  const lastElement = useRef(null);

  useEffect(() => {
    if (isMounted) {
      const focuasableElements = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input, textarea, select'
      );

      firstElement.current = focuasableElements[0];
      lastElement.current = focuasableElements[focuasableElements.length - 1];
    }
  }, [isMounted, modalRef]);

  useEffect(() => {
    // focus on first focusable Element
    if (isMounted && firstElement.current) {
      firstElement.current.focus();
    }
  }, [isMounted, firstElement]);

  useEffect(() => {
    // trap focus in modal
    const handleFocusTrap = (e) => {
      if (e.key === 'Tab' && !e.shiftKey && e.target === lastElement.current) {
        e.preventDefault();
        firstElement.current.focus();
      } else if (
        e.key === 'Tab' &&
        e.shiftKey &&
        e.target === firstElement.current
      ) {
        e.preventDefault();
        lastElement.current.focus();
      }
    };

    window.addEventListener('keydown', handleFocusTrap);

    const triggerElement = triggerRef.current;

    return () => {
      // focus on element that opened the modal when the modal is unmounted
      triggerElement.focus();
      window.removeEventListener('keydown', handleFocusTrap);
    };
  }, [firstElement, lastElement, triggerRef]);

  return modalRef;
};
