class A {
  c() {
    return new Set()
  };
}

const component = () => {
  let a = new A();
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello' + 'webpack';
  return element;
};

document.body.appendChild(component());
