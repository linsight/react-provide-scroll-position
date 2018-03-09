import React from 'react';
import debounce from 'lodash.debounce';
export default function (Component, targetSelector) {
  class ComponentWithScrollPosition extends React.Component {
    constructor(props) {
      super(props);
      this.state = { scrollTop: 0, scrollLeft: 0 };
      this.debouncedUpdateScrollPositionFunc = debounce(this.updateScrollPosition, 50).bind(this);
      this.target = targetSelector && document.querySelector(targetSelector);
    }

    componentDidMount() {
      this.updateScrollPosition();
      window.addEventListener('scroll', this.debouncedUpdateScrollPositionFunc, true);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.debouncedUpdateScrollPositionFunc, true);
    }

    updateScrollPosition() {
      let scrollTop = 0;
      let scrollLeft = 0;

      if (this.target) {
        scrollTop = this.target.scrollTop;
        scrollLeft = this.target.scrollLeft;
      } else {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      }

      this.setState(
        {
          scrollTop,
          scrollLeft,
        });
    }

    render() {
      return <Component {...this.state} {...this.props} />;
    }
  }

  return ComponentWithScrollPosition;
}
