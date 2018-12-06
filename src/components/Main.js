import React, { Component } from 'react';
import { connect } from 'react-redux'

class Main extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 col-md-6 col-sm-10 col-lg-4   mx-auto shadow-sm mt-3 bg-white rounded">
                        <button type="button" className="btn w-15 mb-2 mt-2 ml-1 btn-View-Plus-Blue" onClick={() => { this.props.history.push(`./Accounts`) }}><i className="fas fa-plus"></i>View All</button>
                        <button type="button" className="btn w-15 mb-2 mt-2  btn-Create-Plus" onClick={() => { this.props.history.push(`./Accounts/Create`) }}><i className="fas fa-plus"></i> Add new account</button>
                        <div className="Dashboard_Icons">
                            <i className="fas fa-user"></i> Accounts
                        </div>
                        <hr className="hr_dashboard" />
                        <h2 className="AccCount" ref="Acc_count">{ this.props.accounts.length != null ? this.props.accounts.length : 0}</h2>
                        <p className="AccCount">Accounts</p>
                    </div>
                    <div className="col-10 col-md-6 col-sm-10 col-lg-4  mx-auto shadow-sm mt-3 bg-white rounded">
                        <button type="button" className="btn w-15 mb-2 mt-2 ml-1 btn-View-Plus-Blue" onClick={() => { this.props.history.push(`/Accounts/Transactions`) }}><i className="fas fa-plus"></i>View All</button>
                        <div className="Dashboard_Icons">
                            <i className="fas fa fa-money-bill-alt"></i> Transactions
                        </div>
                        <hr className="hr_dashboard" />
                        <h2 className="AccCount" ref="Trans_count">{this.props.dashboard.Transactions}</h2>
                        <p className="AccCount">Transactions</p>
                        <span className="Dashboard_Debit">Debits: Rs. {this.props.dashboard.Debit}</span>
                        <span className="Dashboard_Credit">Credits: Rs. {this.props.dashboard.Credit}</span>
                    </div>
                </div>
            </div>

        )
    }

}

const mapStateToProps = (store) => {
    return {
        dashboard: store.dashboardReducer,
        accounts : store.accountsReducer 
    }
}


export default connect(mapStateToProps)(Main)
