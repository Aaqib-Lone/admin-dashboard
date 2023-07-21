import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const callData = [
    { id: 1, callerName: 'John Doe', status: 'Attended', startTime: '2023-07-18 10:30 AM', endTime: '2023-07-18 11:15 AM' },
    { id: 2, callerName: 'Jane Smith', status: 'Attended', startTime: '2023-07-18 10:28 AM', endTime: '2023-07-18 11:15 AM' },
    { id: 3, callerName: 'Mike Johnson', status: 'Pending', startTime: '2023-07-18 10:31 AM', endTime: '2023-07-18 11:15 AM' },
    { id: 4, callerName: 'Emily Brown', status: 'In Progress', startTime: '2023-07-18 10:39 AM', endTime: '2023-07-18 11:15 AM' },
    // Add more call data objects as needed
  ];

  // Function to count the number of calls with a specific status
  const countCallsByStatus = (status) => {
    return callData.filter((call) => call.status === status).length;
  };

  return (
    <div className="admin-dashboard">
      <div className="header">
        <h1>Admin Dashboard</h1>
        <div className="logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/92/SBI_Life.jpg" alt="Logo 1" />
        </div>
      </div>
      <div className="dashboard-stats">
        <div className="stat">
          <h2>Attended calls</h2>
          <p>{countCallsByStatus('Attended')}</p>
        </div>
        <div className="stat">
          <h2>Pending calls</h2>
          <p>{countCallsByStatus('Pending')}</p>
        </div>
        <div className="stat">
          <h2>Calls in Progress</h2>
          <p>{countCallsByStatus('In Progress')}</p>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Call ID</th>
              <th>Caller Name</th>
              <th>Status</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            {callData.map((call) => (
              <tr key={call.id}>
                <td>{call.id}</td>
                <td>{call.callerName}</td>
                <td>{call.status}</td>
                <td>{call.startTime}</td>
                <td>{call.endTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
