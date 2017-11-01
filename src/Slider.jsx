import '../style';
import React from 'react';
import RcSlider from 'rc-slider/lib/Slider';

class Slider extends React.Component{

  render() {
    return (
      <div className={`${this.props.prefixCls}-wrapper`}><RcSlider {...this.props} /></div>
    );
  }
}
Slider.defaultProps = {
      prefixCls: 'am-slider',
};
Slider.propTypes = {
  onChange:React.PropTypes.func,
  onAfterChange:React.PropTypes.func,
  defaultValue:React.PropTypes.number,
  tipFormatter:React.PropTypes.func,
  value:React.PropTypes.number,
  min:React.PropTypes.number,
  max:React.PropTypes.number,
  step:React.PropTypes.number,
  disabled: React.PropTypes.bool,
  /* web only */
  prefixCls: React.PropTypes.string,
  maximumTrackStyle:: React.PropTypes.string,
 minimumTrackStyle:React.PropTypes.number,
 handleStyle:React.PropTypes.number,
};
Slider.displayName = "Slider";
module.exports=Slider;
