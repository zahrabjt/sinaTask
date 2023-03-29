import { connect} from 'react-redux'
import {React , useEffect} from 'react'
import {getAllProduct} from '../stateManagement/actions/productActions'

const UserList = (props) => {

    useEffect(() => {
        props.getAll();
    }, []);

    return (
        <div>
            <h1>userList</h1>
            {
                props.isLoading ? <div>is Loading... </div> : null
            }
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserList</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};


function mapStateToProps(state) {
    return {
        users: state.userState.items,
        isLoading: state.userState.isLoading,
        message: state.userState.message,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getAll: (id) => getAllProduct(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);