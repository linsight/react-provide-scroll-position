# react-provide-scroll-position

A simple higher order function to provide scroll position to a component:

1. It monitor scroll events;
1. provide `scrollTop` and `scrollLeft` as props to the wrapped components;
1. If no target DOM element selector is given, it reports scroll position of the browser window; 
 
    

# Example

```
import React from 'react';
import ReactDom from 'react-dom';
import provideScrollPosition from '../../src/provideScrollPosition';

const ComponentA = ({ scrollTop, scrollLeft }) => (<div className='form-group'>
  <h4>window scroll position</h4>
  <label className="col-form-label">Scroll Top</label>
  <div>
    <input className="form-control" type="text" value={scrollTop} readOnly="readOnly" />
  </div>
  <label className="col-form-label">Scroll Left</label>
  <div>
    <input className="form-control" type="text" value={scrollLeft} readOnly="readOnly" />
  </div>
</div>);

const ComponentB = ({ scrollTop, scrollLeft }) => (<div className='form-group'>
  <h4>div scroll position</h4>
  <label className="col-form-label">Scroll Top</label>
  <div>
    <input className="form-control" type="text" value={scrollTop} readOnly="readOnly" />
  </div>
  <label className="col-form-label">Scroll Left</label>
  <div>
    <input className="form-control" type="text" value={scrollLeft} readOnly="readOnly" />
  </div>
</div>);

export const ComponentWithWindowScrollPosition = provideScrollPosition(ComponentA);
export const ComponentWithDivScrollPosition = provideScrollPosition(ComponentB, '.exampleDiv');


ReactDom.render(
  <div className="spacer">
    <div className="showcase">
      <ComponentWithWindowScrollPosition />
      <ComponentWithDivScrollPosition />
    </div>
  </div>,
  document.querySelector('#root')
);



```

Live demo: [demo/dist/index.html](https://linsight.github.io/react-provide-scroll-position/demo/dist/index.html)
 
# How it works

1. API: `provideScrollPosition(YourComponent, [selectors])`;
2. `selectors` is an optional string that pass to [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) call;
3. if `selectors` is not given, browser window scroll position is used as props;
