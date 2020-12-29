import './App.css';
import React, {Component} from 'react'
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box.jsx'


class App extends Component{
  constructor(){
    super();
    this.state = {
      kittens: [
        {
          name:'lipstick',
          id: '1fd'
        },
        {
          name:'brush',
          id:'2bf4'

        },
        {
          name:'eye shadow',
          id:'3dd3'
        },
        {
          name:'brush',
          id:'2da4'

        },
        {
          name:'brush',
          id:'24gg'

        },
        {
          name:'brush',
          id:'2www4'

        },
        {
          name:'brueesh',
          id:'2ww4'

        },{
          name:'brush',
          id:'2ss4'

        },{
          name:'brush',
          id:'2qq4'

        },{
          name:'brush',
          id:'2p4'

        },{
          name:'brush',
          id:'24i'

        },{
          name:'brush',
          id:'2u4'

        },{
          name:'brutsh',
          id:'2r4'

        },{
          name:'bruysh',
          id:'r24'

        }
      ],
      search: ''
    };
  }
  render() {
    const {kittens, search} = this.state;
    const filteredKittens = kittens.filter(kitten =>
      kitten.name.toLowerCase().includes(search.toLowerCase())
      );

    return (
    <div className="App">
      <h1 className="title"> Search a Kitten! </h1>
      <SearchBox handleChange = {e => this.setState({search:e.target.value})} />
      <CardList kittens = {filteredKittens} />
    </div>
  );
    }
}

export default App;
