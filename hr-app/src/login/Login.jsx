import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from "@material-ui/core/styles";
import {red,purple,blue,grey} from "@material-ui/core/colors"
import {AccountCircle,Lock} from "@material-ui/icons"
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';



// import { FetchJSON,FetchPOST, FetchGET, FetchPostForm, FetchPUT} from "../service/baseService"

const styles = theme => ({
    root: {
        flexGrow: 1,
      },

    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 10,
        marginTop: 60,
        marginBottom: 50,
        backgroundColor: purple[400],
    },
    bigAvatar: {
        width: 80,
        height: 80,
        color:"#fff"
    },
    placeholder:{
        fontSize:12,
        color:grey[300]
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
    margin: {
        margin: theme.spacing.unit,
    },
    icon: {
        margin: theme.spacing.unit * 2,
        marginLeft:0,
        fontSize: 32,
      },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
          color: red[800],
        },
    },
    button: {
        margin: theme.spacing.unit,
        justifyContent: 'flex-end',
        color:blue[500],
        fontSize:12,
        display:'inline-flex'
      },
    buttonHover:{
        backgroundColor:'none'
      },
      loginButton:{
        margin: theme.spacing.unit*4.5,
        marginTop:40,
        display:"flex",
        fullWidth:true,
      }
  });
  class LoginBox extends Component{
      constructor(props){
          super()
          this.state = {
                usename: '',
                password:''
          };
      }
      handleChange(event,attr) {
          event.preventDefault();
          switch(attr){
              case "username":
              this.setstate({ username: event.target.value });
              break;
              case "password":
              this.setstate({ password: event.target.value });
              break;
          }
        
      };
      submitHandler(e){
        e.preventDefault();
    
      }
      render(){
        const {classes} = this.props;
       
        return (
            <div className={classes.root}>
                  <div className={classes.row}>
                  <Avatar
                        alt="Logo Image"
                        src="/static/images/uxceo-128.jpg"
                        className={classNames(classes.avatar, classes.bigAvatar)} />
                  </div>
                  <form id='_from' ref={(form)=>this.form=form}>
                    <div className={classes.container}>
                        <FormControl className={classes.margin}>
                            <Input id="input-with-icon-adornment"
                            placeholder = "请输入用户名"
                            name = "username"
                            onChange={this.handleChange.bind(this,"username")}
                            startAdornment={
                                <InputAdornment position="start">
                                <AccountCircle className={classes.icon} color="primary" />
                                </InputAdornment>
                            } />
                        <FormHelperText  error id="name-error-text">用户名不能为空！</FormHelperText>
                        </FormControl>
                        <FormControl className={classes.margin}>
                            <Input id="input-with-icon-adornment" 
                            placeholder = "请输入密码"
                            name = "password"
                            onChange={this.handleChange.bind(this,"password")}
                            startAdornment={
                                <InputAdornment position="start">
                                <Lock className={classes.icon} color="primary"/>
                                </InputAdornment>
                            } />
                            <FormHelperText  error id="name-error-text">密码不能为空！</FormHelperText>
                            <a color="secondary" className={classes.button}>
                                忘记密码
                            </a>
                        </FormControl>
                    </div>
                  </form>
                  <div style={{textAlign:"center"}}>
                  
                    <FormControl className={classes.margin}  style={{display:'flex'}}>
                        <Button variant="contained" color="primary"  
                        className={classes.loginButton} 
                        size="large"  
                        onClick={this.submitHandler.bind(this)}> 登录</Button>
                    </FormControl>
                    
                  
                  </div>
            </div>
          );
      }
  }
 LoginBox.propTypes ={
     classes:PropTypes.object.isRequired
 }
 const FullWidthGrid =  withStyles(styles)(LoginBox)
 export default FullWidthGrid



