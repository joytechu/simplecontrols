import React, { Component } from 'react';


class  Autocomplete extends Component {

  state = {
    resultsExpanded: false,
    searching: false,
    searchvaalue:''
  }

  render() {

    const onChange = (e) => {
      if(e.target.value === '')
      {
        this.setState({
          searchvaalue: e.target.value,
          searching: false,
          resultsExpanded:true
        })
      }
      else
      {
        this.setState({
          searchvaalue: e.target.value,
          searching: true,
          resultsExpanded:false
        })
      }

    }

    const results = () => {
      if(this.state.resultsExpanded)
      {
        return (
        <div className="autocomplete__searchresults">
          <ul>
              <li>
                search result 1
              </li>
              <li>
                search result 2
              </li>
          </ul>
        </div>)
      }
      else if(this.state.searching)
      {
        return (
          <div className="autocomplete__searchresults">
            <ul>
                <li className="autocomplete__searchresults--searching">
                  <i className="fas fa-cog"/> 
                  <span>Searching</span>
                </li>
            </ul>
          </div>) 
      }
    }

    return (
      <div className="autocomplete">
        <div className="autocomplete__searchbox">
          <input type="text" className="autocomplete__input" onChange={onChange} onBlur={() => this.setState({resultsExpanded: false,searching: false})} value={this.state.searchvalue} />
          { 
            results()
          }
          </div>

      </div>
    )
  }
}
export default Autocomplete;
