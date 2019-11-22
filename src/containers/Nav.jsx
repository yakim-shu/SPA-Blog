import React from 'react';
import { connect } from 'react-redux';
import Nav from './../components/nav/Nav';
import { withRedux } from './../withRedux';


const NavContainer = props => (<Nav {...props} />);

const mapStateToProps = category => category;

export default withRedux(connect(mapStateToProps, null)(NavContainer));