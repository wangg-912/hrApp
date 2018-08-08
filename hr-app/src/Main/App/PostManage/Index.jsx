import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import NestedSwipers from "../Swiper/Index";
import PostList from "./PsotList/Index";

const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: '100%',
    },
    paper: {
      height: 160,
      marginTop: 4,
      marginBottom: 4,
    },
    list:{
      height: 'auto',
      marginTop:0,
      marginBottom:0
    },

  });

  class PostManage extends Component{
      render(){
          const classes = this.props;
        return(
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <NestedSwipers />
                    </Paper>
                    </Grid>
                    <Grid item xs ={12}>
                    <Paper className={classes.list}>
                        <PostList />
                    </Paper>
                    </Grid>
                </Grid>
            </div>
        )
      }
      
      
  }

  PostManage.propTypes = {
      classes:PropTypes.object.isRequired
  }

  export default withStyles(styles)(PostManage)

