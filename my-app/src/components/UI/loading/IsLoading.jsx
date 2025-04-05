import React from 'react';
import classes from './Loader.module.css'


const IsLoading = () => {
    return (
       <div className={classes.loaderWrapper}>
           <div className={classes.loader}></div>
       </div>
    );
};

export default IsLoading ;