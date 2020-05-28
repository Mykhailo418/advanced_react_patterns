import React, {Component} from 'react';
import mojs from '@mojs/core';

const tlDuration = 300;

const withClapAnimation = WrappedComponent => {
  class WithClapAnimation extends Component {
    animateTimeLine = new mojs.Timeline()

    state = {
      animateTimeLine: new mojs.Timeline()
    }

    render() {
      return <WrappedComponent {...this.props} animateTimeLine={this.state.animateTimeLine} />
    }

    componentDidMount() {
      const scaleButton = new mojs.Html({
        el: '#clapBtn',
        duration: tlDuration,
        scale: {1.3: 1},
        easing: mojs.easing.out
      });

      const countTotalAnimation = new mojs.Html({
        el: '#clapCountTotal',
        isShowStart: false,
        isShowEnd: true,
        opacity: { 0: 1 },
        delay: (3 * tlDuration) / 2,
        duration: tlDuration,
        y: { 0: -3 }
      });

      const countAnimation = new mojs.Html({
        el: '#clapCount',
        isShowStart: false,
        isShowEnd: true,
        y: { 0: -30 },
        opacity: { 0: 1 },
        duration: tlDuration
      }).then({
        opacity: { 1: 0 },
        y: -80,
        delay: tlDuration / 2
      });

      const triangleBurst = new mojs.Burst({
        parent: '#clapBtn',
        radius: { 50: 95 },
        count: 5,
        angle: 30,
        children: {
          shape: 'polygon',
          radius: { 6: 0 },
          scale: 1,
          stroke: 'rgba(211,84,0 ,0.5)',
          strokeWidth: 2,
          angle: 210,
          delay: 30,
          speed: 0.2,
          easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
          duration: tlDuration
        }
      });

      const circleBurst = new mojs.Burst({
        parent: '#clapBtn',
        radius: { 50: 75 },
        angle: 25,
        duration: tlDuration,
        children: {
          shape: 'circle',
          fill: 'rgba(149,165,166 ,0.5)',
          delay: 30,
          speed: 0.2,
          radius: { 3: 0 },
          easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }
      });

      const clap = document.getElementById('clapBtn');
      clap.style.transform = 'scale(1, 1)';

      const newAnimateTimeLine = this.animateTimeLine.add([
        scaleButton,
        countTotalAnimation,
        countAnimation,
        triangleBurst,
        circleBurst
      ]);
      this.setState({
        animateTimeLine: newAnimateTimeLine
      });

    }
  }

  return WithClapAnimation;
}

export default withClapAnimation;
