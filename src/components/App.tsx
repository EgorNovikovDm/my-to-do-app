import React from "react";
import {connect} from "react-redux";
import {Todo, fetchTodos, deleteTodo} from "../actions";
import {StoreState} from "../reducers";


interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
}

interface AppState {
    fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {fetching: false}
    }

    componentDidUpdate(prevProps: AppProps, prevState: AppState, snapshot?: any) {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({ fetching: false })
        }
    }

    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.setState({
            fetching: true
        })
    };

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id)
    }

    renderTodos(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return (
                    <div onClick={() => {
                        this.onTodoClick(todo.id)
                    }} key={todo.id}>
                        {!todo.completed ? todo.title : null}
                    </div>
                    )
        });
    }

    render() {
        console.log(this.props.todos)
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.state.fetching ? <h3>Loading...</h3> : null}
                {this.renderTodos()}
            </div>
        )
    }
}

const mapStateToProps = ({todos}: StoreState): { todos: Todo[] } => {
    return {todos};
};

export const App = connect(
    mapStateToProps,
    {fetchTodos, deleteTodo}
)(_App);