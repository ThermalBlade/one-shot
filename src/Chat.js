import React, { useState, Component } from 'react';
import './App.css';

import ScrollMenu from 'react-horizontal-scrolling-menu';

const Menu = (list, selected) =>
    list.map(el => {
      const {name} = el
      return <MenuItem text={name} key={name} selected={selected} />
})

const MenuItem = ({text, selected}) => {
  return (
      <div className={`menu-item ${selected ? 'active' : ''}`}>
          {text}
      </div>
  )
}

const Arrow = ({ text, className }) => {
  return(
    <div className={className}>
      {text}
    </div>
  )
}

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
const selected = 'item1';

function Chat(props){
    const [messages, addMessage] = useState([])

    function newMessage(){
        const item = {
            index: toString(messages.length),
            text: props.message
        }
        addMessage(messages.append(item))
    }

    const MenuItem = ({text, selected}) => {
        return(
            <div className={`menu-item ${selected ? 'active' : ''}`}>
                {text}
            </div>
        )
    }
}

function Chat(props){
  const [selected, changeSelected] = useState()
  const [list, addToList] = useState()
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.state = {
      selected: selected,
      list: this.props.list
    };
    this.menuItems = Menu(this.state.list, selected);
  }

  setMenuItems = () => {
    this.menuItems = Menu(this.state.list, 'item1');
  }
 
  onSelect = key => {
    this.setState({ selected: key });
  }

  add = () => {
    this.setState({
      list: [
        { name: 'item1' },
        { name: 'item2' },
        { name: 'item3' },
        { name: 'item4' }
      ]
    })
    this.setMenuItems()
  }
  onUpdate = () => {

  }
 
  render() {
    const { selected } = this.state.selected;
    // Create menu from items
    const menu = this.menuItems;
 
    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
          onUpdate={this.onUpdate}
          scrollToSelected={true}
          clickWhenDrag={true}
        />
        <button onClick={() => this.add()}>Add</button>
      </div>
    );
  }
}


export default Chat


   
// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
    return (
        <div className={`menu-item ${selected ? 'active' : ''}`}>
            {text}
        </div>
    )
}
   
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
    list.map(el => {
      const {name} = el
      return <MenuItem text={name} key={name} selected={selected} />
})
   
   
  const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };
   
   
  const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
  const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
   
  const selected = 'item1';
   
  class Chat extends Component {
    constructor(props) {
      super(props);
      // call it again if items count changes
      this.state = {
        selected: selected,
        list: this.props.list
      };
      this.menuItems = Menu(this.state.list, selected);
    }

    setMenuItems = () => {
      this.menuItems = Menu(this.state.list, 'item1');
    }
   
    onSelect = key => {
      this.setState({ selected: key });
    }

    add = () => {
      this.setState({
        list: [
          { name: 'item1' },
          { name: 'item2' },
          { name: 'item3' },
          { name: 'item4' }
        ]
      })
      this.setMenuItems()
    }
    onUpdate = () => {

    }
   
    render() {
      const { selected } = this.state.selected;
      // Create menu from items
      const menu = this.menuItems;
   
      return (
        <div className="App">
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
            onUpdate={this.onUpdate}
            scrollToSelected={true}
            clickWhenDrag={true}
          />
          <button onClick={() => this.add()}>Add</button>
        </div>
      );
    }
  }

  export default Chat