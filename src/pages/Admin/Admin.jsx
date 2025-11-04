// Admin.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import waveYellow from '../../assets/wave-yellow.svg';

const Admin = () => {
  const navigate = useNavigate();
  const [passwordInput, setPasswordInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch files when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchFiles();
    }
  }, [isAuthenticated]);

  // ✅ Fetch all files (active + inactive) for Admin panel
  const fetchFiles = async () => {
    try {
      // Use environment variable if available, otherwise use proxy (relative URL)
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const apiUrl = apiBaseUrl ? `${apiBaseUrl}/api/spins/admin-list/` : '/api/spins/admin-list/';
      const response = await fetch(apiUrl);
      const data = await response.json();
      setRows(
        data.map((file) => ({
          id: file.id,
          image: null,
          imagePreview: file.picture || null,
          dataFile: null,
          fileName: file.filename,
          active: file.active,
          ticketNumber: file.rigged_ticket || '', // ✅ match backend
        }))
      );
    } catch (err) {
      console.error("Error fetching files:", err);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const apiUrl = apiBaseUrl ? `${apiBaseUrl}/api/spins/check-password/` : '/api/spins/check-password/';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput }),
      });
      const data = await response.json();
      if (response.ok && data.valid) setIsAuthenticated(true);
      else alert('Incorrect Password!');
    } catch (error) {
      console.error('Error checking password:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddRow = () => {
    const newRow = {
      id: Date.now() + Math.random(),
      image: null,
      dataFile: null,
      fileName: '',
      active: true,
      imagePreview: null,
      ticketNumber: '', // ✅ new field
    };
    setRows((prev) => [...prev, newRow]);
  };

  const handleImageChange = (id, file) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, image: file, imagePreview: URL.createObjectURL(file) } : row
      )
    );
  };

  const handleDataFileChange = (id, file) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, dataFile: file, fileName: file.name } : row
      )
    );
  };

  // ✅ Handle ticket number input
  const handleTicketNumberChange = async (id, value) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, ticketNumber: value } : row
      )
    );

    // Only attempt to update backend if the row has been uploaded (i.e., has a non-float ID)
    if (Number.isInteger(id)) {
      try {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
        const apiUrl = apiBaseUrl ? `${apiBaseUrl}/api/spins/update-rigged-ticket/${id}/` : `/api/spins/update-rigged-ticket/${id}/`;
        const response = await fetch(apiUrl, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ rigged_ticket: value.trim() }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error updating rigged ticket:", errorData);
          alert("❌ Failed to update rigged ticket: " + (errorData.error || "Unknown error"));
        }
      } catch (error) {
        console.error("Network error updating rigged ticket:", error);
        alert("Something went wrong while updating the rigged ticket.");
      }
    } else {
      console.log("Skipping backend update for new row. Upload first.");
    }
  };

  // ✅ Toggle active/inactive on backend + UI
  const toggleActive = async (id) => {
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const apiUrl = apiBaseUrl ? `${apiBaseUrl}/api/spins/toggle-active/${id}/` : `/api/spins/toggle-active/${id}/`;
      const response = await fetch(apiUrl, {
        method: 'PATCH',
      });
      const data = await response.json();
      if (response.ok) {
        setRows((prev) =>
          prev.map((row) =>
            row.id === id ? { ...row, active: data.active } : row
          )
        );
      } else {
        alert("❌ Failed to toggle active status: " + data.error);
      }
    } catch (error) {
      console.error("Error toggling active:", error);
      alert("Something went wrong while toggling active status.");
    }
  };

  // ✅ Delete row from backend + UI
  const handleDeleteRow = async (id) => {
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const apiUrl = apiBaseUrl ? `${apiBaseUrl}/api/spins/delete/${id}/` : `/api/spins/delete/${id}/`;
      const response = await fetch(apiUrl, {
        method: "DELETE",
      });
      if (response.ok) {
        setRows((prev) => prev.filter((row) => row.id !== id));
      } else {
        const result = await response.json();
        alert("❌ Delete failed: " + result.error);
      }
    } catch (error) {
      console.error("Error deleting file:", error);
      alert("Something went wrong while deleting.");
    }
  };

  // ✅ Upload new files only
  const handleUpload = async () => {
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const uploadUrl = apiBaseUrl ? `${apiBaseUrl}/api/spins/upload/` : '/api/spins/upload/';
      for (const row of rows) {
        if (!row.dataFile) continue; // skip already uploaded rows

        const formData = new FormData();
        formData.append('filename', row.fileName || 'Untitled');
        if (row.image) formData.append('picture', row.image);
        formData.append('excel_file', row.dataFile);
        formData.append('active', row.active);
        formData.append('password', passwordInput);

        // ✅ Send rigged tickets
        if (row.ticketNumber && row.ticketNumber.trim() !== "") {
          formData.append("rigged_ticket", row.ticketNumber.trim()); // ✅ single string
        }

        const response = await fetch(uploadUrl, {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();
        if (!response.ok) {
          alert(`❌ Upload failed: ${result.error}`);
          return;
        }
        // ✅ Update the frontend row with the real backend ID after successful upload
        setRows((prev) =>
          prev.map((r) =>
            r.id === row.id ? { ...r, id: result.id, dataFile: null } : r
          )
        );
      }
      alert('✅ All files uploaded successfully!');
      fetchFiles(); // refresh table after upload
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Something went wrong while uploading. Try again.');
    }
  };

  return (
    <>
      {!isAuthenticated && (
        <div className="spin-admin-password-modal">
          <form className="spin-admin-password-form" onSubmit={handlePasswordSubmit}>
            <h2>Enter Admin Password</h2>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Password"
              disabled={loading}
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Checking...' : 'Enter'}
            </button>
          </form>
        </div>
      )}

      {isAuthenticated && (
        <>
          <section className="spin-admin-hero">
            <div className="spin-admin-background"></div>
            <h1 className="spin-admin-hero-title">ADMIN PANEL</h1>
            <div className="spin-admin-wave">
              <img src={waveYellow} alt="Wave" className="spin-admin-wave-image" />
            </div>
          </section>
          <div className="spin-admin-container">
          <div className="spin-admin-nav-button-container">
            <button
              className="spin-admin-spinwheel-button"
              onClick={() => navigate('/spin')}
            >
              Go to Spin Wheel
            </button>
          </div>

          <div className="spin-admin-table-wrapper">
            <div className="spin-admin-table-header">
              <h2>Upload Files</h2>
              <button className="spin-admin-add-row-button" onClick={handleAddRow}>
                +
              </button>
            </div>

            <table className="spin-admin-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Data File</th>
                  <th>File Name</th>
                  <th>Rigged Tickets</th>
                  <th>Status</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.id}
                    className={row.active ? 'spin-admin-active-row' : 'spin-admin-inactive-row'}
                  >
                    <td>
                      {row.imagePreview ? (
                        <img
                          src={row.imagePreview}
                          alt="preview"
                          className="spin-admin-preview-image"
                        />
                      ) : (
                        <div className="spin-admin-custom-file-input">
                          <input
                            type="file"
                            accept="image/*"
                            disabled={!row.active}
                            onChange={(e) =>
                              handleImageChange(row.id, e.target.files[0])
                            }
                          />
                          <div className="file-label">Choose Image</div>
                        </div>
                      )}
                    </td>
                    <td>
                      <div className="custom-file-input">
                        <input
                          type="file"
                          disabled={!row.active}
                          onChange={(e) =>
                            handleDataFileChange(row.id, e.target.files[0])
                          }
                        />
                        <div className="file-label">Choose File</div>
                      </div>
                    </td>
                    <td>{row.fileName || 'File Name'}</td>
                    <td className='display'>
                      <div className="spin-admin-custom-ticket">
                        <input
                          type="text"
                          value={row.ticketNumber}
                          disabled={!row.active}
                          onChange={(e) =>
                            handleTicketNumberChange(row.id, e.target.value)
                          }
                          placeholder="Enter Ticket"
                          className="spin-admin-ticket-input"
                        />
                      </div>
                    </td>
                    <td>
                      <button
                        className={`spin-admin-status-button ${row.active ? 'active' : 'inactive'}`}
                        onClick={() => toggleActive(row.id)}
                      >
                        {row.active ? 'Active' : 'Inactive'}
                      </button>
                    </td>
                    <td>
                      <button
                        className="spin-admin-status-button"
                        style={{ backgroundColor: '#ed5d53ff' }}
                        onClick={() => handleDeleteRow(row.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="spin-admin-upload-button-container">
            <button className="spin-admin-upload-button" onClick={handleUpload}>
              UPLOAD
            </button>
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default Admin;

