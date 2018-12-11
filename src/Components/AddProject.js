import React, { Component } from 'react';


class AddProject extends Component {
    constructor(){
      super();
      this.state={
        newProject:{}
      }
    }
static defaultProps={
  categories:['Web Design','Mobile Development','Web Development']
}

handleSubmit(e){

  if(this.refs.title.value===''){
    alert('Title is required!');
  }else{
  console.log(this.refs.title.value);
  console.log(this.refs.category.value);
}
  e.preventDefault();
}
  render() {
    let categoryOptions=this.props.categories.map(category=>{
      return <option key={category} value='category'>{category}</option>
    });
    return (
      <div>
        <h3>My Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
          <label>Title</label><br/>
          <input type="text" ref="title" /><br/>
          <label>Language</label><br/>
          <input type='radio' name='language' value='myanmar'/>Myanmar
          <input type='radio' name='language' value='english'/>English
          <input type='radio' name='language' value='japan'/>Japan<br/>
          <br/>
          <label>Category</label><br/>
          <select ref="category">
           {categoryOptions}
          </select>
          </div>
          <input type='submit' value='Save'/>
        </form>
      </div>
    );
  }
}

export default AddProject;
