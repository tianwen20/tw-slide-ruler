# SlideRuler [Demo](https://github.com/tianwen20/tw-slider-ruler)

[![npm](https://img.shields.io/npm/v/tw-slider-ruler.svg)](https://www.npmjs.com/package/tw-slider-ruler)
[![npm](https://img.shields.io/npm/dt/tw-slider-ruler.svg)](https://www.npmjs.com/package/tw-slider-ruler)
[![npm](https://img.shields.io/npm/l/tw-slider-ruler.svg)](https://www.npmjs.com/package/tw-slider-ruler)

###### [中文 README](README-zh_CN.md)

The raw project [https://github.com/wusb/slide-ruler]

## Features
- Developed with native javascript, doesn't rely on any frameworks and libraries.
- Customizable colors, sizes, precision, etc.
- Supports inertia and rebound for swiping meters.
- Friendly API for easy use.

![example](https://i.loli.net/2018/06/27/5b3350dd2c4cc.gif)

## PropTypes

| Property       | Type     | Default      | Description            |
| :------------  | :------- | :----------- | :--------------------- |
| handleValue    | Function |              | get the return value   |
| goValue        | Function |              | set the current value  |
| destroy        | Function |              | destroy the ruler      |
| canvasWidth    | Number   | screen width | ruler width            |
| canvasHeight   | Number   | 83           | ruler height           |
| heightDecimal  | Number   | 35           | scale marks length     |
| heightDigit    | Number   | 18           | division marks length  |
| widthDecimal   | Number   | 2            | scale marks width      |
| widthDigit     | Number   | 2            | division marks width   |
| lineWidth      | Number   | 2            | marks width            |
| colorDecimal   | String   | #E4E4E4      | scale marks color      |
| colorDigit     | String   | #E4E4E4      | division marks color   |
| divide         | Number   | 10           | division length of px  |
| precision      | Number   | 1            | division value         |
| fontSize       | Number   | 20           | scale fontSize         |
| fontColor      | String   | #666666      | scale fontColor        |
| fontMarginTop  | Number   | 35           | font margin to the top |
| lineMarginTop  | Number   | 0            | line margin to the top |
| maxValue       | Number   | 230          | max value              |
| minValue       | Number   | 100          | min value              |
| currentValue   | Number   | 100          | current value          |
| vibrateDuration| Number   | 20           | vibrate duration       |

## Getting Started

### Install

```shell
yarn add slide-ruler --dev
```

### Usage Example

- **Native JavaScript**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="author" content="simbawu" />
    <title>Digital Keyboard</title>
  </head>
  <body>
    <div id="values"></div>
    <div id="app"></div>
    <script src="./slide-ruler.js"></script>
  </body>
</html>
```

```javascript
//slide-ruler.js
import SlideRuler from 'slide-ruler';

function handleValue(value){
  console.log(value); //SlideRuler return value
  document.querySelector('#values').innerHTML = value;
}

new SlideRuler(
    {
        el: document.querySelector('#app'),
        maxValue: 230,
        minValue: 100,
        currentValue: 180
        handleValue: handleValue,
        precision: 1
    }
);
```

- **React**

```jsx
import React from 'react';
import SlideRuler from 'slide-ruler';

class SlideRulerPage extends React.Component {

  constructor(){
    super();

    this.handleValue = this.handleValue.bind(this);
    this._renderSlideRuler = this._renderSlideRuler.bind(this);
  }

  componentDidMount(){
    this._renderSlideRuler();
  }

  handleValue(value){
    console.log(value); //SlideRuler return value
  }

  _renderSlideRuler(){
    return new SlideRuler (
      {
        el: this.refs.slideRuler,
        maxValue: 230,
        minValue: 100,
        currentValue: 180
        handleValue: handleValue,
        precision: 1
      }
    );
  }

  render(){
    return (
      <div ref='slideRuler'></div>
    )
  }
}

export default SlideRulerPage;
```

- **Vue**

```js
<template>
  <div></div>
</template>
<script>
import SlideRuler from 'slide-ruler';
export default {
  mounted () {
    this._renderSlideRuler();
  },
  methods: () {
    _renderSlideRuler() {
    	return new SlideRuler (
          {
            el: this.$el,
            maxValue: 230,
            minValue: 100,
            currentValue: 180
            handleValue: handleValue,
            precision: 1
          }
        );
    },

    handleValue(value) {
      console.log(value); //SlideRuler return value
    }
  }
}
</script>
```

- **Angular**

```typescript
import { Component, ViewChild, OnInit, ViewEncapsulation} from '@angular/core';
import SlideRuler from 'slide-ruler';

@Component({
  selector: 'my-app',
  template: `
   <div #slideRuler></div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  implements OnInit{

  @ViewChild('slideRuler') slideRuler;

  ngOnInit(){
    this._renderSlideRuler();
  }

  _renderSlideRuler(){
    return new SlideRuler (
          {
            el: this.slideRuler.nativeElement,
            maxValue: 230,
            minValue: 100,
            currentValue: 180
            handleValue: handleValue,
            precision: 1
          }
        );
  }

  handleValue(value) {
    console.log(value); //SlideRuler return value
  }
}
```

## How to Contribute

Anyone and everyone is welcome to contribute to this project.

## License

[**The MIT License**](http://opensource.org/licenses/MIT).
