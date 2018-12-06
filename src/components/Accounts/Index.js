import React, { Component } from 'react';
import { connect } from 'react-redux'
class Index extends Component {
    constructor(props) {
        super(props);
        this.bindAccounts();
    }
    bindAccounts = () => { 
        debugger
        if (this.props.Accounts.length > 0) {
            return this.props.Accounts.map((value, index) => {
                return <tr onClick={() => { this.props.history.push(`./Accounts/Display/${value.AccountNo}`) }} key={index}>
                    <td >{value.AccountNo}</td>
                    <td>{value.Name}</td>
                    <td>{value.Registered}</td>
                    <td>{value.AccountType}</td>
                    <td>Rs. {value.Balance}</td>
                </tr>

            });
        }
        

      

    }

  

    ShowTable = () => {
        if (this.props.Accounts != null && this.props.Accounts.length > 0 ) {
            return <div className="table-responsive-sm">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Account #</th>
                            <th scope="col">Name</th>
                            <th scope="col">Registered</th>
                            <th scope="col">Account Type</th>
                            <th scope="col">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.bindAccounts()}
                    </tbody>
                </table>
            </div>
        }
        else {
            return <div >
                <h3>There are currently no accounts available.</h3>
                <div class="col-sm-4 col-11 ml-2 mb-4 mx-auto">
                    <button type="button" className="btn w-100  btn-View btn-Accounts-View" style={{ "background-color": "#39beb9", "border-color": "#39beb9" }} onClick={() => { this.props.history.push(`./Accounts/Create`) }}>Create a new account</button>
                </div>
            </div >
        }

    }
    render() {
        return (
            <div className="container ">
                <div className="row" >
                    <div className="col-md-9 shadow-sm mt-3 bg-white rounded mx-auto">
                        <button type="button" className="btn w-15 mb-2 mt-2 btn-View  btn-View-Plus" onClick={() => { this.props.history.push(`./`) }}><i className="fas fa-arrow-left"></i> Back to dashboard</button>
                        <button type="button" className="btn w-15 mb-2 mt-2  btn-Create-Plus" onClick={() => { this.props.history.push(`./Accounts/Create`) }}><i className="fas fa-plus"></i> Add new account</button>
                        <div className="ViewAccounts"> <i className="fas fa-user"></i> Accounts</div>
                        {this.ShowTable()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        Accounts: store.accountsReducer
    }
}



export default connect (mapStateToProps)(Index);