import React, { Component } from 'react';
import SVG from 'svg.js';

const imgUrl = "http://s3-ap-southeast-1.amazonaws.com/minime-sg/items/3a6b05715b3799b4aef334458aeae10cf94c1a9720_original.svg?1440566243";
let image = draw.image(imgUrl).loaded(function(loader) {
  console.log(this);
  this.size(loader.width, loader.height)
});

// load svg from xmlHttpRequest


class Sample extends Component {
  render() {
    // create an image.

    // change its color.


    return (
      <div>

      </div>
    );
  }
}

export default Sample;
