import React  from 'react';
import schema from "../../../TableDescription" 
import GenaricTable from '../../main/table/GenaricTable';
const G_Admin= (props) => {


    return(
        <>
         <div className="main__wrapper">
             <h3 className="main__heading">
             {schema[props.name].formName}:  
             </h3>
             <div className="content__wrapper">
             <GenaricTable
                 schema = {{...schema[props.name]}}
             />
             </div>
         </div>

        </>
    );
}

export default G_Admin;