import React, { PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};

class FooInner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="foo-inner">FooInner</span>
    );
  }
}

FooInner.propTypes = propTypes;
FooInner.defaultProps = defaultProps;

export default FooInner;