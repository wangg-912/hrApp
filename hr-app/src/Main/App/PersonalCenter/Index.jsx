import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import {KeyboardArrowRight,SupervisorAccount,Info,Dashboard} from '@material-ui/icons';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%"
  
  },
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});
class PersonManage extends React.Component {
  state = {
    dense: false
  };

  render() {
    const { classes } = this.props;
    const { dense } = this.state;
    return (
      <div className={classes.root}>
        <Grid item xs={12}>
            <div className={classes.container}>
              <List dense={dense} style={{padding:"0 0 0 0"}}>
                  <ListItem style={{borderBottom:"1px solid #eee"}}>
                    <ListItemAvatar>
                      <Avatar>
                        <SupervisorAccount />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                        primary="会员信息"
                        secondary="查看会员基本信息."
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Delete">
                        <KeyboardArrowRight />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem style={{borderBottom:"1px solid #eee"}}>
                    <ListItemAvatar>
                      <Avatar>
                        <Info />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                        primary="信息完善"
                        secondary="完善会员资料信息."
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Delete">
                        <KeyboardArrowRight />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem style={{borderBottom:"1px solid #eee"}}>
                    <ListItemAvatar>
                      <Avatar><Dashboard /></Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                        primary="推介码"
                        secondary="推介新会员注册,新用户注册成功获得相应积分."
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Delete">
                        <KeyboardArrowRight />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
              </List>
            </div>
          </Grid>
      </div>
    );
  }
}

PersonManage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonManage);