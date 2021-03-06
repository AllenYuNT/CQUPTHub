/**
 * 首页
 */
import React from 'react';
import './index.less';
import Footer from '../common/footer/footer.jsx'
import Banner from './components/banner/banner.jsx'
import Projects from './components/projects/projects.jsx';
import Articles from './components/articles/articles.jsx';
import axios from 'axios';
export default class Index extends React.Component{
  constructor(props){
    super(props);
    this.state={
      articlList:[],
      show:false,
    }
  }
  getData(){
    axios.get('http://119.23.233.196:1234/getAllPage?title=&time=&page=1')
    .then((res)=>{
          this.setState({show:true,articlList:res.data.pageAll})
          console.log(res);
    })
  }
  componentWillMount(){
    this.getData()
  }
  render(){
    return (
      <div className="index">
            <Banner />
      {
        this.state.show ? 
            <div>
              <Projects />
              <Articles titleShown articlList = {this.state.articlList}/>
              <Footer/>
            </div>
        : ''
      }
      </div>
    )
  }
}