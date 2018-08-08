import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles";

import PostComponent from "./PostManage/Index";
import "./App.css"

const styles = theme => ({
  root: {
    flexGrow: 1,
  }

})

class App extends Component{
    render(){
      const {classes} = this.props;
      return(
        <div className={classes.root}>
          <PostComponent />
        </div>
      )
    }
}
App.propTypes = {
  classes:PropTypes.object.isRequired
}

const Main =  withStyles(styles)(App)
 export default Main;
