import React, { Component } from 'react';
// import svgstr from './SVG';
// import svgstr2 from './SVG2';
import snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';
import request from 'superagent';
const imgUrl = 'http://s3-ap-southeast-1.amazonaws.com/minime-sg/items/3a6b05715b3799b4aef334458aeae10cf94c1a9720_original.svg?1440566243';
// console.log('sample svg');
// console.log(SampleSVG);

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {svg: 'text'};
  }

  componentDidMount() {
    // const snap = require('imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js');
    request
      .get(imgUrl)
      .end((err, res) => {
        const svgText = res.text;
        const newColor = '"#FF0000"';
        const colorPattern = /\"#151515\"/g;
        const newText = svgText.replace(colorPattern, newColor);
        // console.log(newText);
        const parser = new DOMParser();
        const svgDOM = parser.parseFromString(newText, 'image/svg+xml').getElementsByTagName('svg');
        // for (var layer in svgDOM[0].children) {
          // if (svgDOM[0].children.hasOwnProperty(layer)) {
            // only if it matchs the color code, we change the color
            // retrieve DOM attribute, if it matches the default hash color, we change it.
            // otherwise, we don't touch it.
        //     console.log(svgDOM[0].children[layer].attributes);
        //   }
        // }
        // const nodeIterator = document.createNodeIterator(svgDOM, NodeFilter.SHOW_ELEMENT);
        // let node;
        // while (node = nodeIterator.nextNode()) {
        //     console.log(node);
        // }
        // // loop through DOM child
        // svgDOM.forEach((i, ele) => {
        //   console.log(ele);
        // });
        // console.log(svgDOM[0]);
        // svgDOM.
        const svgctl = snap(svgDOM[0]);
        console.log(svgctl.toString());
        this.setState({
          svg: svgctl.toString()
        });
      });
  }

  render() {
    // request from aws
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.svg}} />
    );
  }
}

export default Sample;
