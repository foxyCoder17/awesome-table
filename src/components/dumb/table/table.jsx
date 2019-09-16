import React, { Component } from 'react';
import './table.scss';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      headerKeys: []
    };
    // this.func = this.func.bind(this);
  }

  componentDidMount() {
    const keys = this.getColumnNames(this.props.data);
    this.setState({
      headerKeys: [...keys]
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      const keys = this.getColumnNames(nextProps.data);
      this.setState({
        headerKeys: [...keys]
      });
    }
  }

  render() {
    return (
      <>
        <div className="table">
          <div className = "table-title">
            {this.props.title}
          </div>
          <div 
            className="table-header"
            style={{'backgroundColor' : this.props.headerColor}}>
            {
              this.state.headerKeys.map((item, i) =>
                <div key={i} className="table-header-cell">
                  {item}
                </div>)
            }
          </div>
          <div className="table-body">
            {
              this.props.data.map((item, i) =>
                <div key={i} className="table-body-row">
                  {
                    this.state.headerKeys.map((key, j) =>
                      <div key={i + j} className="table-body-row-cell">
                        {item[key]}
                      </div>)
                  }
                </div>
              )
            }
          </div>
        </div>
      </>
    );
  }

  getColumnNames(data) {
    let keys = [];
    data.forEach(element => {
      Object.keys(element).forEach(key => {
        if (!keys.includes(key)) {
          keys.push(key);
        }
      })
    });
    return keys;
  }
}

export default Table;