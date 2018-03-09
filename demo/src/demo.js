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
