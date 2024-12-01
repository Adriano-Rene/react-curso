import React, {Component} from "react"
import Main from '../template/Main'

const headerProps = {
    icon:'users',
    title: 'Usuarios',
    subtitle: 'crud comeca aqui incluir listar alterar e excluir'
}

export default class UserCrud extends Component {
    render(){
        return (
            <Main {...headerProps}>
                cadastro de usuario
            </Main>
        )
    }
}