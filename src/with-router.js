import React from 'react';
import { withRouter } from 'react-router';

const withRouterPubSub = Component => {
  class WithRouterPubSub extends React.Component {

    constructor(props, ...etc) {
      super(props, ...etc);
      this.unlisten = props.history.listen(() => {
        this.forceUpdate();
      });
    }

    componentWillUnmount() {
      if (this.unlisten) {
        this.unlisten();
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }
  return withRouter(WithRouterPubSub);
};

export default withRouterPubSub;
