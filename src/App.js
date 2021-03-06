import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id:1,
          title: 'Стул 1',
          img: 'stul.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'chairs',
          price: '49.99'
        },
        {
          id:2,
          title: 'Стол в стиле LOFT',
          img: 'stol-loft.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'tables',
          price: '129.00'
        },
        {
          id:3,
          title: 'Стол для кухни',
          img: 'kuxni.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'tables',
          price: '129.00'
        },
        {
          id:4,
          title: 'Стул 2',
          img: 'stul2.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'tables',
          price: '129.00'
        },
        {
          id:5,
          title: 'Стол',
          img: 'stol.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'tables',
          price: '129.00'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} />
      <Items items={this.state.items} onAdd={this.addToOrder} />
      <Footer />
    </div>
  )
  }

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id){
        isInArray = true
      }
    })
    if(!isInArray){
      this.setState({orders: [...this.state.orders, item]})
    }
  }
}

export default App;
