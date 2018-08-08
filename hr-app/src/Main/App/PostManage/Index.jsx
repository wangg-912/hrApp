import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import {ListAlt,AccountCircle} from "@material-ui/icons"

import NestedSwipers from "../Swiper/Index";
import PostList from "./PsotList/Index"

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding:0 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  paper: {
    height: 160,
    marginTop: 6,
    marginBottom: 6,
  },
  list:{
    height: 'auto',
    marginTop:0,
    marginBottom:0
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="岗位管理" />
            <Tab label="个人中心" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
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
          </TabContainer>
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);