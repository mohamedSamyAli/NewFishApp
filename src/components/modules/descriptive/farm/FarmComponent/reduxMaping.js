export const mapStateToProps = state => {
    return {
      GovEvents:state.GovEvents  ,
      GovPartTypeEvents:state.GovPartTypeEvents
  };
}


  export const mapDispatchToProps = dispatch => {
    return {
        setmap: (e) => dispatch({type:'setMap',value:e}),
       
  };}