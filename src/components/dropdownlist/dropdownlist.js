import React, { Component } from "react";
import PropTypes from "prop-types";

class DropdownList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
    };
  }

  render() {
    const onChange = (e, item) => {
      let selected = this.state.data.find(
        (element) => element.value === e.target.value
      );
      this.props.onSelect(e, selected);
    };

    return (
      <select
        className="dropdownlist"
        defaultValue={this.props.DefaultValue}
        onChange={(e, item) => onChange(e, item)}
      >
        {this.state.data.map((item, idx) => {
          return (
            <option key={idx} value={item.value}>
              {item.DisplayText}
            </option>
          );
        })}
      </select>
    );
  }
}

DropdownList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      DisplayText: PropTypes.string,
      Value: PropTypes.string,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  DefaultValue: PropTypes.bool,
};
export default DropdownList;
