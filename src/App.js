import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './components/Sidebar/Sidebar';
import 'boxicons/css/boxicons.css';
import Input from './components/elements/inputs/Input';
import Table from './components/Table/Table';



const tabledata = [
  {
    invoiceId: "#AHGA68",
    date: "23/09/2022",
    customer: "Jacob Marcus",
    payableAmount: "$100",
    paidAmount: "$000",
    due: "$000"
  },
  {
    invoiceId: "#AHGA68",
    date: "23/09/2022",
    customer: "Jacob Marcus",
    payableAmount: "$100",
    paidAmount: "$000",
    due: "$000"
  },
  {
    invoiceId: "#AHGA68",
    date: "23/09/2022",
    customer: "Jacob Marcus",
    payableAmount: "$100",
    paidAmount: "$000",
    due: "$000"
  },
  {
    invoiceId: "#AHGA68",
    date: "23/09/2022",
    customer: "Jacob Marcus",
    payableAmount: "$100",
    paidAmount: "$000",
    due: "$000"
  },
  {
    invoiceId: "#AHGA68",
    date: "23/09/2022",
    customer: "Jacob Marcus",
    payableAmount: "$100",
    paidAmount: "$000",
    due: "$000"
  },
  {
    invoiceId: "#AHGA68",
    date: "23/09/2022",
    customer: "Jacob Marcus",
    payableAmount: "$100",
    paidAmount: "$000",
    due: "$000"
  },
  {
    invoiceId: "#AHGA68",
    date: "23/09/2022",
    customer: "Jacob Marcus",
    payableAmount: "$100",
    paidAmount: "$000",
    due: "$000"
  },
  {
    invoiceId: "#AHGA68",
    date: "23/09/2022",
    customer: "Jacob Marcus",
    payableAmount: "$100",
    paidAmount: "$000",
    due: "$000"
  },
  {
    invoiceId: "#AHGA68",
    date: "23/09/2022",
    customer: "Jacob Marcus",
    payableAmount: "$100",
    paidAmount: "$000",
    due: "$000"
  }
];




function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className='row'>
          <div className="col-2">
            <Sidebar />
          </div>
          <div className='col-10 p-5'>
            <div className="row header">
              <div className='col-6 search'>
                <Input className="form-control " type="search" placeholder="Search" aria-label="Search" />
              </div>
              <div className='col-1'>
                <div className='icon'>
                <i className='bx bx-bell bx-sm '></i>
                </div>
              </div>
            </div>
            <div className="row">
              <h4 className='heading'>Sales information</h4>
            </div>
            <div className="row mb-3">
              <div className="col-3">
                <div className="mb-3">
                  <Input htmlFor="customerName" type="text" id="customerName" placeholder="Enter customer name" label="Customer" />
                </div>
              </div>
              <div className="col-3">
                <div className="mb-3">
                  <Input htmlFor="invoiceId" type="email" className="form-control" id="invoiceId" placeholder="Enter Invoice Id" label="Invoice ID" />
                </div>
              </div>
              <div className="col-3">
                <div className="mb-3">
                  <Input htmlFor="startDate" type="date" className="form-control" id="startDate" placeholder="name@example.com" label="Start Date" />
                </div>
              </div>
              <div className="col-3">
                <div className="mb-3">
                  <Input htmlFor="endDate" type="date" className="form-control" id="endDate" placeholder="name@example.com" label="End Date" />
                </div>
              </div>
            </div>

            <div>
              <Table data={tabledata} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
