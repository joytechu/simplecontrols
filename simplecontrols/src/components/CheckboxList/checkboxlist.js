import React, { Component } from "react";
import PropTypes from "prop-types";

class CheckboxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
    };
  }

  render() {
    const onChange = (e, item) => {
      if (e.target.value === "on") this.props.onSelect(e, item);
      else this.props.onDeselect(e, item);
    };

    return (
      <div className="checkboxlist" id="checkboxlist">
        {this.state.data.map((item, idx) => {
          return (
            <div key={idx}>
              <label>{item.DisplayText}</label>
              <input
                type="checkbox"
                className="checkboxlist__checkbox"
                onChange={(e) => onChange(e, item)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

CheckboxList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      DisplayText: PropTypes.string,
      DefaultValue: PropTypes.bool,
      Value: PropTypes.string,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  onDeselect: PropTypes.func.isRequired,
};
export default CheckboxList;
