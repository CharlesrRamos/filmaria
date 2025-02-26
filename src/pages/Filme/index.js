import React, { Component } from "react";
import './filme-info.css'

class Filme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filme:[]
    };
  }

  componentDidMount() {
    const { id }= this.props.match.params; // pegar o id da rota
    let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        this.setState({ filme: json });
        console.log(json)
      });
  }

  render() {
    return (
      <div className='filme-info'>
        <h1>{this.state.filme.nome}</h1>
        <img src={this.state.filme.foto} alt='capa' />
        {
          this.state.filme.length !== 0 && <h3>Sinopse</h3> // para redenrizar o text junto com o que vem da api, comunicação assicrona.
        }
        {this.state.filme.sinopse}
      </div>
    );
  }
}

export default Filme;
