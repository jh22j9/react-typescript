import { useRef, useEffect } from "react";

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);
  /*
  If you're sure your reference is never null when you acceess it, 
  you can add the non-null assertion when invoking useRef (with null!).
  This allow us to call focus without optional chaning.
  */

  useEffect(() => {
    // inputRef.current?.focus(); // with null (line 4)
    inputRef.current.focus(); // with null!
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
