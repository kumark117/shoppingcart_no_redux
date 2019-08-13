import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
 constructor() {
  super();
 this.state = {productList: [{name:"dummy",price:123,info:"dummy_info"}]};
   this.addProduct = this.addProduct.bind(this);
   
  // this.row_helper = //this.row_helper.bind(this);
 }
  
 addProduct(product) {
   let productList = this.state.productList;
   productList.push(product);

   this.setState({...this.state, productList});
 } 
  render() {
    return (
      <div>
    <ProductForm addProduct={this.addProduct}/>
    <ShoppingCart productList={this.state.productList}/>
        </div>
    );
  }
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  render() {
    return (<div>
        {
       this.props.productList.map((item,index) =>
                       {return this.row_helper(item)
        }
  )}
  </div>
)
}
        
row_helper(item) {
          return (<div>{item.name+" "+item.price + " "+item.info}</div>)
        }  
}
/* ProductForm */
class ProductForm extends  React.Component {
  
constructor(props) {
 super(props);
  this.props = props;
  this.state = {};
  this.state.name = "";
  this.state.price = 0;
  this.state.info = "";

  this.onChangeName = this.onChangeName .bind(this);
  this.onChangePrice = this.onChangePrice .bind(this);
  this.onChangeInfo = this.onChangeInfo .bind(this);
    console.log("end of constructor");
}

onChangeName(e) {
  this.setState({...this.state, name:e.target.value});
}
onChangePrice(e) {
  this.setState({...this.state, price:e.target.value});
}
onChangeInfo(e) {
  this.setState({...this.state, info:e.target.value});
}
  
  submit(e) {
    e.preventDefault();
    var product = {
      name: this.state.name,
      price: Number(this.state.price),
      info: this.state.info
    };
   console.log("added product",product)
   this.props.addProduct(product);
  }

  render() {
    
    return (
      <form onSubmit={this.submit.bind(this)}>
        <h3>add new product</h3>
        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label">name:</label>
            <input className="col-sm-10"
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={this.onChangeName}
              placeholder="e.g.) android"
              required
            />
        </div>

        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label">price:</label>
            <input className="col-sm-10"
              type="number"
              className="form-control"
              id="price"
              onChange={this.onChangePrice}

              placeholder="e.g.) 100"
              required
            />
        </div>

        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label">info:</label>
            <input className="col-sm-10"
              type="text"
              className="form-control"
              id="info"
              onChange={this.onChangeInfo}

              placeholder="e.g.) product of google"
            />
        </div>

        <div className="row form-group">

            <button className="btn btn-outline-primary">create product</button>
        </div>

        <hr />
      </form>
    );
  }
}

export default App;
