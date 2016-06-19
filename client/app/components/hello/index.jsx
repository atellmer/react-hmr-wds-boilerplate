import React, { Component } from 'react';

import style from './hello';


class Hello extends Component {
  render() {
    return (
      <div>
        <h1 className={style.title}>Hello, I am react-boilerplate!</h1>
      </div>
	  );
  }
}

export default Hello;