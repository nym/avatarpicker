import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  setFirstName,
  setLastName,
  setTopic,
} from './userSlice';

export function User() {
  //const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      User here 
    </div>
  );
}
