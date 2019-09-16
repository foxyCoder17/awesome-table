import React, { Component } from 'react';
import Table from '../../../dumb/table/table';
import { connect } from 'react-redux';
import Button from '../../../dumb/button/button';

import './teachers-list.scss'
import Modal from '../../../dumb/modal/modal';

class TeachersList extends Component {
  state = {
    openModal: false
  }
  componentDidMount() {
    this.props.updateTableList([
      {
        "Id": 1,
        "Name": "Foo",
        "Age": "20",
        "Subject": "he"
      },
      {
        "Id": 2,
        "Name": "Bar",
        "Age": "30",
        "Subject": "H"
      },
      {
        "Id": 3,
        "Name": "Baz",
        "Age": "40",
        "Subject": "he"
      }
    ]);
  }

  render() {
    console.log(this.state);
    return (
      <>
        <div className="teachers-list">
          <div className="teachers-list-table">
            <Table
              data={this.props.data}
              title="Teachers List:"
              headerColor="#ff80ab" />
          </div>
          <div className="teachers-list-button">
            <Button onClick={this.openModal}/>
          </div>
          <div id="modal" className="teachers-list-modal" onClick={this.closeModal}>
            <Modal openModal={this.state.openModal}>Add record</Modal>
          </div>
        </div>
      </>
    );
  }


  openModal = () => {
    this.setState({
      openModal: true
    })
  };

  // closeModal = () => {
  //   window.addEventListener('click', (e) => {   
  //     if (!document.getElementById('modal').contains(e.target)){
  //       this.setState({
  //         openModal: false
  //       })
  //     }
  //   });
  // }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  updateTableList: list => dispatch({ type: 'UpdateTeachersList', list })
});


export default connect(mapStateToProps, mapDispatchToProps)(TeachersList);