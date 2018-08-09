import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedToolbrush } from '../actions';
import ToolbarButton from '../components/layout/ToolbarButton';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.tool === state.selectedTool
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setSelectedToolbrush(ownProps.tool))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarButton)