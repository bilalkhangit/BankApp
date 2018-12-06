import React, { Component } from 'react';



class DisplayTrans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TransId: 0, Time: "", Account: "", TransType: 0,
            Amount: 0,
            Description : ""
        }

        this.bindTrans();
    }
    bindTrans = () => {
        const PrevTrans = JSON.parse(localStorage.getItem("Transaction"));
        const TransId = this.props.match.params.id.toString();
        PrevTrans.map((value, index) => {
            if (value.TransId.toString() === TransId) {
                this.state.TransId = value.TransId;
                this.state.Time = value.Time;
                this.state.Account = value.Account;
                this.state.TransType = value.TransType;
                this.state.Amount = value.Amount;
            }
        });
    }


    render() {
        return (
            <div className="container ">
                <div className="row" >
                    <div className="col-md-9 shadow-sm mt-3 bg-white rounded mx-auto">
                    <button type="button" className="btn w-15 mb-2 mt-2 btn-View  btn-View-Plus" onClick={() => { this.props.history.push(`/Accounts/Transactions`) }}><i className="fas fa-arrow-left"></i> Back to transactions</button>
                        <h5 className="mt-3">Transaction Details</h5>
                        <hr />
                        <div className="row">
                            <div className="col-md-2">
                                <strong>Transaction ID</strong>
                            </div>
                            <div className="col-md-2">
                                {this.state.TransId}
                            </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-md-2">
                                <strong> Time </strong>
                            </div>
                            <div className="col-md-2">
                                {this.state.Time}
                            </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-md-2">
                                <strong>Account #</strong>
                            </div>
                            <div className="col-md-3">
                                {this.state.Account}
                            </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-md-2">
                                <strong>Type</strong>
                            </div>
                            <div className="col-md-2">
                                {this.state.TransType}
                            </div>
                        </div>
                        <hr />
                         <div className="row">
                            <div className="col-md-2">
                                <strong>Amount</strong>
                            </div>
                            <div className="col-md-2">
                                {this.state.Amount}
                            </div>
                        </div>
                        <hr />
                         <div className="row">
                            <div className="col-md-2">
                                <strong>Description</strong>
                            </div>
                            <div className="col-md-2">
                                {this.state.Description}
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayTrans;