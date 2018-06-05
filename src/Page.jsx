import React from 'react';

class Page extends React.Component {

  render() {
    return <p>Page {this.props.match.params.pageId}</p>;
  }
}

export default Page;
