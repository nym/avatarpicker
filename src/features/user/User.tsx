import React from "react";

import { useAppDispatch } from "../../app/hooks";

export function User() {
  //const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      User here
    </div>
  );
}
