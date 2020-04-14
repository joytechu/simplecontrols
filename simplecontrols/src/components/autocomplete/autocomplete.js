import React, { Component } from "react";
import PropTypes from "prop-types";

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      resultsExpanded: false,
      searching: false,
      searchvalue: "",
      results: [],
    };
  }

  render() {
    const onChange = (e) => {
      if (e.target.value === "") {
        this.setState({
          searchvalue: e.target.value,
          searching: false,
          resultsExpanded: false,
          results: [],
        });
      } else {
        this.setState({
          searchvalue: e.target.value,
          searching: true,
          resultsExpanded: false,
          results: [],
        });
      }

      this.props.onFetchData(e.target.value, (results) => {
        this.setState({
          searching: true,
          resultsExpanded: true,
          results: results,
        });
      });
    };

    const onSelected = (item) => {
      this.props.onSelectedResult(item);
      this.setState({
        searching: false,
        resultsExpanded: false,
        searchvalue: item.DisplayText,
      });
    };

    const results = () => {
      if (this.state.resultsExpanded) {
        return (
          <div className="autocomplete__searchresults">
            <ul>
              {this.state.results.map((item) => {
                return (
                  <li key={item.DisplayText} onClick={() => onSelected(item)}>
                    {item.DisplayText || ""}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      } else if (this.state.searching) {
        return (
          <div className="autocomplete__searching">
            <ul>
              <li>{this.props.searchText || "Searching..."}</li>
            </ul>
          </div>
        );
      }
    };

    return (
      <div className="autocomplete" id="autocomplete">
        <div className="autocomplete__searchbox" id="instance-id">
          <input
            type="text"
            className="autocomplete__input"
            onChange={onChange}
            value={this.state.searchvalue}
          />
          {results()}
        </div>
      </div>
    );
  }
}

Autocomplete.propTypes = {
  onSelectedResult: PropTypes.func.isRequired,
  onFetchData: PropTypes.func,
  searchText: PropTypes.string,
};
export default Autocomplete;
