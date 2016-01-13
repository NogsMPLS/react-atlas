import React from 'react';
import ClassNames from 'classnames';
import style from './style';

const propTypes = {
  active: React.PropTypes.bool,
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  hidden: React.PropTypes.bool,
  label: React.PropTypes.any.isRequired,
  onActive: React.PropTypes.func,
  onClick: React.PropTypes.func
};

const defaultProps = {
  active: false,
  className: '',
  disabled: false,
  hidden: false
};

class Tab extends React.Component {
  componentDidUpdate (prevProps) {
    if (!prevProps.active && this.props.active && this.props.onActive) {
      this.props.onActive();
    }
  }

  _handleClick = () => {
    if (!this.props.disabled && this.props.onClick) {
      this.props.onClick();
    }
  };

  render () {
    const className = ClassNames(style.label, {
      [style.active]: this.props.active,
      [style.hidden]: this.props.hidden,
      [style.disabled]: this.props.disabled
    }, this.props.className);

    return (
      <label className={className} onClick={this._handleClick}>
        {this.props.label}
      </label>
    );
  }
}

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
