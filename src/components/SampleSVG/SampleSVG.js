import React, { Component } from 'react';
// import request from 'superagent';
// import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

// const imgUrl = 'http://s3-ap-southeast-1.amazonaws.com/minime-sg/items/3a6b05715b3799b4aef334458aeae10cf94c1a9720_original.svg?1440566243';
class SampleSVG extends Component {

  // getInitialState() {
  //   return {
  //     svg: 'img'
  //   };
  // }

  // componentDidMount() {
  //   request
  //     .get(imgUrl)
  //     .end((err, res) => {
  //       console.log(err, res);
  //       const parser = new DOMParser();
  //       const imgSvg = parser.parseFromString(res.text, 'image/svg+xml');
  //       this.setState({
  //         svg: imgSvg
  //       });
  //     }).bind(this);
  // }

  render() {
    // console.log(this.state.svg);
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

SampleSVG.propTypes = {
  children: React.PropTypes.node
};

export default SampleSVG;
