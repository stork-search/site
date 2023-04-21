import { Ref, useEffect } from "react";

// Improved version of https://usehooks.com/useOnClickOutside/
const useClickOutside = (ref: Ref<unknown>, handler: unknown) => {
  useEffect(() => {
    let startedInside = false;
    let startedWhenMounted = false;

    const listener = (event: { target: any }) => {
      // Do nothing if `mousedown` or `touchstart` started inside ref element
      if (startedInside || !startedWhenMounted) return;

      // Do nothing if clicking ref's element or descendent elements
      // @ts-ignore
      if (!ref.current || ref.current.contains(event.target)) return;

      // @ts-ignore
      handler(event);
    };

    const validateEventStart = (event: { target: any }) => {
      // @ts-ignore
      startedWhenMounted = ref.current;
      // @ts-ignore
      startedInside = ref.current && ref.current.contains(event.target);
    };

    document.addEventListener("mousedown", validateEventStart);
    document.addEventListener("touchstart", validateEventStart);
    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("mousedown", validateEventStart);
      document.removeEventListener("touchstart", validateEventStart);
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;
