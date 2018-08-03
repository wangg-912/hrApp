import React,{Component} from 'react';
import "whatwg-fetch";
import "es6-promise";
class TEST extends Component{
  constructor(){
    super();
    this.state={
      datas:[]
    }
  }
  clickHandler(){
    let self = this;
    fetch('/test.json')
      .then(function(response) {
          return response.json()
      }).then(function(json) {
        self.update(json)
          console.log('parsed json', json)
      }).catch(function(ex) {
          console.log('parsing failed', ex)
      })
  }
  update(result){
    this.setState({
      datas:result.arr
    })
  }
  render(){
      const datas=this.state.datas;
      return(
        <div>
          <button onClick={this.clickHandler.bind(this)}>Hello,点击展示列表</button>
            <ul>
            { datas.map((item,index)=>{
              return <li key={index}>{item.names}</li>
            })}
          </ul>
        </div>
      )
  }
}



export default TEST
