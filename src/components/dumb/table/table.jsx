// table component
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
    const keys = this.getColumnNames(this.props.data.rows);
    this.setState({
      headerKeys: [...keys]
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      console.log(this.props);
      const keys = this.getColumnNames(nextProps.data.rows);
      this.setState({
        headerKeys: [...keys],
        filters: this.getFilterRow(nextProps.data.filters, keys.length)
      });
      console.log(this.state);
    }
  }

  render() {

    console.log(this.props.data);
    return (
      <>
        <div className="table">
          <div className="table-title">
            {this.props.title}
          </div>
          <div className="table-header"
            style={{ 'backgroundColor': this.props.headerColor }}>
            {
              this.state.headerKeys.map((item, i) =>
                <div key={i} className="table-header-cell">
                  {item}
                </div>)
            }
          </div>
          <div className="table-filters">
            {/* <input type="text"></input> */}
            <div className="table-body-row">
              {
                this.state.filters && this.state.filters.map((filter, i) =>
                  <div key={i} className="table-body-row-cell">
                    {this.getFilterElement(filter['type'])}
                  </div>)
              }
            </div>
          </div>
          <div className="table-body">
            {
              this.props.data.rows.map((item, i) =>
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

  getColumnNames(rows) {
    let keys = [];
    rows.forEach(element => {
      Object.keys(element).forEach(key => {
        if (!keys.includes(key)) {
          keys.push(key);
        }
      })
    });
    return keys;
  }

  getFilterRow(rows, noOfColumns) {
    console.log('noofcol', noOfColumns);
    for (var i = 0; i < noOfColumns; i++) {
      if (!rows[i]) {
        rows[i] = {}
      }
    }
    console.log(rows);
    return rows;
  }

  getFilterElement(type) {
    switch(type) {
      case 'text': {
        return <input placeholder='Text Filter'></input>;
      }
      default: {
        return;
      }
    }
  }




}

export default Table;