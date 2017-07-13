import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  };
  //   this.createDataSource(this.props);

  // componentWillReceiveProps(nextProps) {
  //   this.createDataSource(nextProps);
  // }

  // createDataSource({ employees }) {
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });
  //   this.dataSource = ds.cloneWithRows(employees);
  // }

  render() {
    console.log('This will show employees', this.props);
    return (
      <View>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
      </View>
    );
  }
}

// const mapStateToProps = state => {
//   const employees = _.map(state.employees, (val, uid) => {
//     return { ...val, uid };
//   });
//   return { employees };
// };

export default connect(null, { employeesFetch })(EmployeeList);