import React from "react"
export default function Table({ data = [] }) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">
                        <input type="checkbox" 
                            class="" 
                            id=""/>
                        </th>
                        <th scope="col">Invoice ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Payable Amount</th>
                        <th scope="col">Paid Amount</th>
                        <th scope="col">Due</th>
                    </tr>
                </thead>
                <tbody>
                    { data && 
                    data.map((d,i) => ( 
                        <tr>
                        <th scope="row">
                            <input type="checkbox" 
                            class="" 
                            id=""/>
                        </th>
                        <td>{d.invoiceId}</td>
                        <td>{d.date}</td>
                        <td>{d.customer}</td>
                        <td>{d.payableAmount}</td>
                        <td>{d.paidAmount}</td>
                        <td>{d.due}</td>
                    </tr>
                    ))};
                    </tbody>
            </table>

        </div>
    )
}