import React, { Component } from 'react';
import Visor from "../Components/Visor"
import Botoes from "../Components/Botoes"
import "./Calculadora.css"

const estadoInicial = {
    valorDoVisor: '0',
    limparVisor: false,
    valores: [0, 0],
    current: 0
}

class Calculadora extends Component {

    state = { ...estadoInicial }

    constructor(props) {
        super(props)
        this.limparMemoria = this.limparMemoria.bind(this)
        this.fazerOperacao = this.fazerOperacao.bind(this)
        this.addDigito = this.addDigito.bind(this)
    }

    limparMemoria() {
        this.setState({
            ...estadoInicial
        })
    }
    fazerOperacao(operacao) {
        if (this.state.current === 0) {
            this.setState({ operacao, current: 1, limparVisor: true })
        }
        else {
            const igual = operacao === "="
            const operacaoAtual = this.state.operacao

            const valores = [...this.state.valores]
            // valores[0] = eval(`${valores[0]} ${operacaoAtual} ${valores[1]}`)
            // valores[1] = 0

            switch (operacaoAtual) {
                case '+':
                    valores[0] = valores[0] + valores[1]
                    valores[1] = 0
                    break;
                case '-':
                    valores[0] = valores[0] - valores[1]
                    valores[1] = 0
                    break;
                case '*':
                    valores[0] = valores[0] * valores[1]
                    valores[1] = 0
                    break;
                case '/':
                    valores[0] = valores[0] / valores[1]
                    valores[1] = 0
                    break;

                default:
                    break;
            }

            this.setState({
                valorDoVisor: valores[0],
                operacao: igual ? null : operacao,
                current: igual ? 0 : 1,
                limparVisor: !igual,
                valores
            })

        }
    }
    addDigito(n) {
        if (n === '.' && this.state.valorDoVisor.includes('.')) {
            return
        }
        const limparVisor = this.state.valorDoVisor === "0" || this.state.limparVisor
        const valorAtual = limparVisor ? '' : this.state.valorDoVisor
        const valorDoVisor = valorAtual + n
        this.setState({ valorDoVisor, limparVisor: false })

        if (n !== '.') {
            const i = this.state.current
            const novoValor = parseFloat(valorDoVisor)
            const valores = [...this.state.valores]
            valores[i] = novoValor
            this.setState({
                valores
            })
        }

    }

    render() {
        return (
            <div className="Calculadora">
                <div className="center">
                    <h1>Calculadora Simples</h1>
                </div>
                <div className="Corpo">
                    <div>
                        <Visor numVisor={this.state.valorDoVisor} />
                        <Botoes especial="duplo" valor="AC" click={this.limparMemoria} />
                        <Botoes valor="7" click={this.addDigito} />
                        <Botoes valor="8" click={this.addDigito} />
                        <Botoes valor="9" click={this.addDigito} />
                        <Botoes especial="operador" valor="/" click={this.fazerOperacao} />
                        <Botoes valor="4" click={this.addDigito} />
                        <Botoes valor="5" click={this.addDigito} />
                        <Botoes valor="6" click={this.addDigito} />
                        <Botoes especial="operador" valor="*" click={this.fazerOperacao} />
                        <Botoes valor="1" click={this.addDigito} />
                        <Botoes valor="2" click={this.addDigito} />
                        <Botoes valor="3" click={this.addDigito} />
                        <Botoes especial="operador" valor="-" click={this.fazerOperacao} />
                        <Botoes especial="operador" valor="=" click={this.fazerOperacao} />
                        <Botoes valor="0" click={this.addDigito} />
                        <Botoes valor="." click={this.addDigito} />
                        <Botoes especial="operador" valor="+" click={this.fazerOperacao} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Calculadora