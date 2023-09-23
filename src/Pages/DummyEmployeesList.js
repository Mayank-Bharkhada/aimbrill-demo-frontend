import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';

import './DummyEmployeesList.css'; // Import your CSS file
import { Link } from '@mui/material';

function DummyEmployeesList() {
  const dispatch = useDispatch();
  const { dummyEmployeeData } = useSelector((state) => state);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [expandedEmployeeId, setExpandedEmployeeId] = useState(null);
  const [sortedData, setSortedData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [employeesPerPage, setEmployeesPerPage] = useState(5)
  const [paginatedData, setPaginatedData] = useState(dummyEmployeeData.slice(
    currentPage * employeesPerPage,
    (currentPage + 1) * employeesPerPage
  ))

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };


  const toggleEmployeeSelection = (employee) => {
    if (selectedEmployees.includes(employee.id)) {
      setSelectedEmployees(selectedEmployees.filter((id) => id !== employee.id));
    } else {
      setSelectedEmployees([...selectedEmployees, employee.id]);
    }
  };
  const toggleExpandedEmployee = (employeeId) => {
    if (expandedEmployeeId === employeeId) {
      setExpandedEmployeeId(null);
    } else {
      setExpandedEmployeeId(employeeId);
    }
  };

  useEffect(() => {
    if (sortedData == null) {
      setPaginatedData(dummyEmployeeData.slice(
        currentPage * employeesPerPage,
        (currentPage + 1) * employeesPerPage
      ));
    } else {
      setPaginatedData(sortedData.slice(
        currentPage * employeesPerPage,
        (currentPage + 1) * employeesPerPage
      ));
    }
  }, [sortedData, currentPage, employeesPerPage])



  const pageCount = Math.ceil(dummyEmployeeData.length / employeesPerPage);


  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Calculate the range for visible page numbers
    let startPage, endPage;
    if (pageCount <= 5) {
      startPage = 0;
      endPage = pageCount - 1;
    } else {
      if (currentPage < 2) {
        startPage = 0;
        endPage = 4;
      } else if (currentPage >= pageCount - 2) {
        startPage = pageCount - 5;
        endPage = pageCount - 1;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          style={{ margin: "5px", backgroundColor: currentPage === i ? "blue" : "", color: currentPage === i ? "white" : "" }}
          key={i}
          className={`pagination-button ${i === currentPage ? 'active' : ''}`}
          onClick={() => setCurrentPage(i)}
        >
          {i + 1}
        </button>
      );
    }

    // Add ellipses if necessary
    if (pageCount > 5) {
      if (currentPage >= 2) {
        pageNumbers.unshift(<span key="ellipsis-start">...</span>);
      }
      if (currentPage < pageCount - 2) {
        pageNumbers.push(<span key="ellipsis-end">...</span>);
      }
    }

    return pageNumbers;
  };

  // console.log(pageCount)

  const handlePageInputChange = (e) => {
    const inputPage = parseInt(e.target.value);

    // Check if the input is a valid number within the page range
    if (!isNaN(inputPage) && inputPage >= 1 && inputPage <= pageCount) {
      setCurrentPage(inputPage - 1);
    }
  };

  const options = [];
  for (let i = 0; i <= 25; i = i + 5) {
    if (i !== 0) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
  }
  console.log(selectedEmployees.length);

  function sortDummyEmployeeData(field) {
    console.log(field)
    const sortedDate = dummyEmployeeData.slice().sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    });
    console.log("YOOOO")
    console.log(sortedData)
    setSortedData(sortedDate)
  }


  return (
    <>
      <div className="employee-list-container">
        <div className="pagination-container">

          <div>

            <Checkbox
              checked={selectedEmployees.length > 0 ? true : false}
              style={{ margin: "5px" }}
            />

            <label className="serchPage"
              style={{ margin: "5px" }}
            >{selectedEmployees.length} selected </label>

          </div>

          <div>

            <i className="fas fa-sort-amount-desc" style={{ margin: "5px" }}
            ></i>
            <select className="sortingBox" onChange={(e) => {
              sortDummyEmployeeData(e.target.value);
            }}
              style={{ margin: "5px" }}
            >
              <option value={"name"}>Name</option>
              <option value={"position"}>Position</option>
              <option value={"department"}>Department</option>
              <option value={"status"}>Status</option>
              <option value={"experience"}>Experience</option>


            </select>
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>ID</th>
                <th>Name</th>
                <th>Position</th>
                <th>Department</th>
                <th>Status</th>
                <th>Experience</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((employee) => (
                <React.Fragment key={employee.id}>
                  <tr className={selectedEmployees.includes(employee.id) ? 'checked-row' : ''} >
                    <td>
                      <Checkbox
                        checked={selectedEmployees.includes(employee.id)}
                        onChange={() => toggleEmployeeSelection(employee)}
                      />
                    </td>
                    <td>
                      {
                        expandedEmployeeId === employee.id ? <i className="fas fa-caret-down" onClick={() => toggleExpandedEmployee(employee.id)} ></i> : <i className="fas fa-caret-up" onClick={() => toggleExpandedEmployee(employee.id)} ></i>
                      }{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.position}</td>
                    <td>{employee.department}</td>
                    <td>{employee.status}</td>
                    <td>{employee.experience}  <button
                      className='moreInfo'
                      onClick={() => toggleExpandedEmployee(employee.id)}
                    >
                      <i className="fas fa-ellipsis-v"></i>
                    </button></td>

                  </tr>
                  {expandedEmployeeId === employee.id && (
                    <tr className="expanded-row">
                      <td colSpan="8">
                        <table className='additionalInfo'>
                          <tbody>
                            <tr>
                              <th>Office Address</th>
                              <th>Subordinates</th>
                              <th>Birthday</th>
                              <th>Email</th>
                              <th>Contact</th>
                            </tr>
                            <tr>
                              <td><i className="fas fa-building"></i>{employee.officeAddress}</td>
                              <td><i className="fas fa-users"></i>{employee.subordinates}</td>
                              <td><i className="fas fa-birthday-cake"></i>{employee.birthday}</td>
                              <td><i className="fas fa-envelope"></i>{employee.email}</td>
                              <td><i className="fas fa-phone"></i>{employee.contact}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination-container">

          <div>

            <label className="serchPageLabel">Show </label>
            <select className="serchPageBox" onChange={(e) => {
              setEmployeesPerPage(e.target.value);
            }}>
              {options}


            </select>
          </div>
          <div style={{ display: "flex", margin: "5px" }}>

            <button

              style={{ margin: "5px" }}
              className={`pagination-button ${currentPage === 0 ? 'disabled' : ''}`}
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 0}
            >
              Previous
            </button>
            <div className="page-numbers">{renderPageNumbers()}</div>
            <button
              style={{ margin: "5px" }}
              className={`pagination-button ${currentPage === pageCount - 1 ? 'disabled' : ''
                }`}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === pageCount - 1}
            >
              Next
            </button>
          </div>
          <div>

            <label className="serchPageLabel"

            >Jump to Page</label>
            <input
              type="number"
              id="pageInput"
              className="serchPageBox"
              name="currentPage"
              min='1'
              max={`${pageCount}`}
              placeholder='Page no'
              onChange={handlePageInputChange}
            />
          </div>
        </div>

      </div>
      <div style={{ marginLeft: "10%", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", borderRadius: "20px", padding: "20px", marginTop: "50px", width: "80%", display: "flex", justifyContent: "space-between" }}>
        <h2>Get a project quote</h2>
        <div
          style={{ borderRadius: "20px", fontSize: 15, fontWeight: "bolder", textAlign: "center", padding: "5px", paddingTop: "20px", width: "15%", backgroundColor: "blue", color: "white" }}
        > <Link style={{ color: "white", textDecoration: "none", fontSize: 25, cursor: "pointer" }} to="/Form">Get a quote</Link></div>
      </div>
    </>
  );
}

export default DummyEmployeesList;
