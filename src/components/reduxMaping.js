export const mapStateToProps = state => {
    return {
      GovEvents:state.GovEvents  ,
      updateModel:state.updateModel  ,
      GovPartTypeEvents:state.GovPartTypeEvents,
      Calculate:state.Calculate

  };
}


  export const mapDispatchToProps = dispatch => {
    return {
        setmap: (e) => dispatch({type:'setMap',value:e}),
       
  };}