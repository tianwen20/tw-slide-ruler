import DemoComponent from './demo-component';

new DemoComponent({
  typeName: 'Weight',
  unit: 'kg',
  maxValue: 200,
  minValue: 30,
  currentValue: 73.1,
  precision: 0.1
});

!function(x) {
  let t = x.document;
  x.addEventListener('resize', function() {
    clearTimeout(t);
    t = setTimeout(() => {
      window.location.href = window.location.href;
    }, 50);
  }, !1);
}(window);
