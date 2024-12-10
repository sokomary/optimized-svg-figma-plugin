import React from 'react';
import { Element } from '../types';
import * as css from './ElementsList.css';

type Props = {
  elements: Element[];
};

export const ElementsList = ({ elements }: Props) => {
  return (
    <>
      {elements.map((element, index) => (
        <div key={index} className={css.container}>
          <div>{element.name}</div>
          <div className={css.note}>{element.change}</div>
        </div>
      ))}
    </>
  );
};
