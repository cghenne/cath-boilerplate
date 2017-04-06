import React, { Component } from 'react';
import $ from 'jquery'; // this makes me sad but otherwise it would be a very long code
import _ from 'lodash';

import Spinner from './Spinner';

let isMounted = false;

export default class InfiniteScroll extends Component {
  static propTypes = {
    action: React.PropTypes.func,
    children: React.PropTypes.any,
    isLastPage: React.PropTypes.bool,
    /* eslint-disable */
    isLoading: React.PropTypes.bool,
    /* eslint-enable */
  }

  constructor() {
    super();

    this.handleScroll = this.handleScroll.bind(this);
    this.checkScroll = this.checkScroll.bind(this);
    this.hasVerticalScrollbar = this.hasVerticalScrollbar.bind(this);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', _.debounce(() => this.handleScroll(), 100));
    window.addEventListener('resize', this.checkScroll);

    isMounted = true;

    this.checkScroll();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isLoading: nextProps.isLoading });
  }

  componentDidUpdate() {
    this.checkScroll();
  }

  componentWillUnmount() {
    isMounted = false;

    window.removeEventListener('scroll', _.debounce(() => this.handleScroll(), 100));
    window.addEventListener('resize', this.checkScroll);
  }

  checkScroll() {
    if (
      isMounted &&
      !this.props.isLastPage &&
      !this.state.isLoading &&
      !this.hasVerticalScrollbar()
    ) {
      this.props.action();
    }
  }

  hasVerticalScrollbar() {
    return $(document).height() > window.innerHeight;
  }

  handleScroll() {
    if (!isMounted || this.state.isLoading || this.props.isLastPage) {
      return;
    }

    if ((window.pageYOffset + window.innerHeight) >= $(document).height()) {
      this.setState({ isLoading: true });
      this.props.action();
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
        {this.state.isLoading && <Spinner />}
      </div>
    );
  }
}
