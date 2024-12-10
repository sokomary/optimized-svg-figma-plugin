import React from 'react';
import * as css from './WaitingState.css';
import { UiState } from '../types';

export const WaitingState = ({ state }: { state: UiState }) => (
  <div className={css.container}>
    <div>Please, wait for svg {state}...</div>
  </div>
);
