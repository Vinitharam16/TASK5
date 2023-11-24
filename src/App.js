import React from 'react';
import './App.css';


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>

// function handleIputchange(e){
//   setTask(e.target.value);
// }




function App() {
  // const [task, setTask] = React.useState("");
  // export default function RefPlayground(){
  //   const paraRef = React.useRef(null);

  //   function handleColorChange(color) {
  //     console.log(paraRef.current);
  //     paraRef.current.style.color = color;
  //   }
  // }

  return (
    <div className="App">
      <div className="container">
        <div className='row'>
        <div class="col-2">
                <div class="sidebar h-full py-5 d-flex flex-column justify-content-between">
                    <div class="row mb-5 branding-container">
                        <h5 class="text-center brand-name">Medico Sales</h5>
                    </div>
                    <div class="row nav-links">
                        <ul>
                            <li class="nav-link active">
                                <i class='bx bxs-grid-alt me-3'></i>
                                <p>Dashboard</p>
                            </li>
                            <li class="nav-link">
                                <i class='bx bx-test-tube me-3'></i>
                                <p>Labtest</p>
                            </li>
                            <li class="nav-link">
                                <i class='bx bxs-calendar-plus me-3'></i>
                                <p>Appointment</p>
                            </li>
                        </ul>
                    </div>
                    <div class="footer">
                        <div class="d-flex align-items-center justify-content-start">
                            <i class='bx bx-help-circle me-3'></i>
                            <p>Help</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </div>

  );
}

export default App;
