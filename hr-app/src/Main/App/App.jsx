import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import NestedSwipers from "./Swiper/Index"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 160,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
})

class App extends Component{
    render(){
      const {classes} = this.props;
      return(
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <NestedSwipers />
              </Paper>
            </Grid>
          </Grid>
        </div>
      )
    }
}
App.propTypes = {
  classes:PropTypes.object.isRequired
}

const Main =  withStyles(styles)(App)
 export default Main;
