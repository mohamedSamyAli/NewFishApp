export const mapStateToProps = state => {
    return {
      GovEvents:state.GovEvents  ,
  };
}


  export const mapDispatchToProps = dispatch => {
    return {
        setmap: (e) => dispatch({type:'setMap',value:e}),
       
  };}