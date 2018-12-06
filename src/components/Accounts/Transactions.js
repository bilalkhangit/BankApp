import React, { Component } from 'react';

class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Transactions: []
        }
        this.bindTransactions();
    }
    bindTransactions = () => {
        debugger
        const PrevTransactions = JSON.parse(localStorage.getItem("Transaction"));
        if(PrevTransactions !==  null)
        {
            this.state.Transactions = PrevTransactions;
            return this.state.Transactions.map((value, index) => {
                return <tr onClick={() => { this.props.history.push(`/Accounts/DisplayTrans/${value.TransId}`) }} key={index}>
                    <td>{value.TransId}</td>
                    <td>{value.Time}</td>
                    <td>{value.Account}</td>
                    <td>{value.TransType}</td>
                    <td>{value.Amount}</td>
                </tr>
               
            });
        }
       
    }
    render() {
        return (
            <div className="container ">
                <div className="row" >
                    <div className="col-md-9 shadow-sm mt-3 bg-white rounded mx-auto">
                    <button type="button" className="btn w-15 mb-2 mt-2 btn-View  btn-View-Plus" onClick={() => { this.props.history.push(`/Accounts`) }}><i className="fas fa-arrow-left"></i> Back to account</button>
                    {/* <button type="button" className="btn w-15 mb-2 mt-2  btn-Create-Plus" onClick={() => { this.props.history.push(`./Account`) }}><i className="fas fa-plus"></i> Add new account</button> */}
                        <div className="Transactions"> <i className="fas fa fa-money-bill-alt"></i> Transactions</div>
                        <div class="table-responsive-sm">
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Transaction #</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Account #</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.bindTransactions()}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Transactions;