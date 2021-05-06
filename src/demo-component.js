import s from './demo-component.scss';
import SlideRuler from './slide-ruler';

const BaseRulerOptions = {
  canvasWidth: transitRemToPx(6.5),
  canvasHeight: transitRemToPx(1.4),
  heightDecimal: transitRemToPx(0.2),
  heightDigit: transitRemToPx(0.12),
  widthDecimal: transitRemToPx(0.04),
  widthDigit: transitRemToPx(0.02),
  lineWidth: transitRemToPx(0.02),
  colorDecimal: '#CCCCCC',
  colorDigit: '#CCCCCC',
  divide: 10,
  fontSize: transitRemToPx(0.24),
  fontColor: '#ABABAB',
  fontMarginTop: transitRemToPx(1.1),
  lineMarginTop: transitRemToPx(0.8),
  maxValue: 250,
  minValue: 1,
  currentValue: 110,
  vibrateDuration: 20
};

class DemoComponent {
  constructor(options = {}) {
    this.options = BaseRulerOptions;

    this.init();
  }

  _renderContainer() {
    const container = document.createElement('div');
    this.options.container = container;
    container.className = s.container;
    document.querySelector('#demo').appendChild(container);
    this._renderRuler();
  }

  _renderRuler() {
    let slider = new SlideRuler({
      el: this.options.container,
      ...this.options
    });

    console.log(slider.goValue(20));
  }

  init() {
    this._renderContainer();
  }
}

export default DemoComponent;

function transitRemToPx(rem) {
  const windowWidth = document.body.clientWidth;
  const ratio = windowWidth / 750;
  return rem * 100 * ratio;
}
