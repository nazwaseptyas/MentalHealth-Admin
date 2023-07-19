import React, { useState, useEffect } from 'react';
import Layout from './layout';
import DataTable from 'react-data-table-component';
import Modal from 'react-modal';

const EditButton = ({ row, onEdit }) => {
  const handleEdit = () => {
    onEdit(row);
  };

  const editButtonStyle = {
    padding: '8px 12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '80px',
    fontSize: '10px',
  };

  return (
    <button onClick={handleEdit} style={editButtonStyle}>
      Edit
    </button>
  );
};

const DeleteButton = ({ row, onDelete }) => {
  const handleDelete = () => {
    onDelete(row);
  };

  const deleteButtonStyle = {
    padding: '8px 10px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '80px',
    fontSize: '10px',
  };

  return (
    <button onClick={handleDelete} style={deleteButtonStyle}>
      Hapus
    </button>
  );
};

const Tabelkonsultasi = () => {
  const [data, setData] = useState([
    {
      id: 1,
      nama: 'John Doe',
      email: 'john@example.com',
      tanggal: '2023-07-19',
      nohp: '123456789',
      psikolog: 'Nadjillah Fatin',
      alamat: '123 Main Street',
      keluhan: 'Anxiety',
    },
    {
      id: 2,
      nama: 'Jane Doe',
      email: 'jane@example.com',
      tanggal: '2023-07-20',
      nohp: '987654321',
      psikolog: 'Nadjillah Fatin',
      alamat: '456 Oak Avenue',
      keluhan: 'Depression',
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedRow, setEditedRow] = useState(null);

  const handleEdit = (row) => {
    setEditedRow(row);
    setIsEditing(true);
  };

  const handleDelete = (row) => {
    setData((prevData) => prevData.filter((item) => item.id !== row.id));
  };

  const handleSave = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === editedRow.id ? { ...editedRow } : item,
      ),
    );
    setIsEditing(false);
    setEditedRow(null);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
    setEditedRow(null);
  };

  const columns = [
    {
      name: 'ID',
      selector: 'id',
      maxWidth: '70px', // Set the maximum width of the ID column
      cell: (row) => <span style={{ fontWeight: 'bold' }}>{row.id}</span>,
    },
    {
      name: 'Nama',
      selector: 'nama',
    },
    {
      name: 'Email',
      selector: 'email',
    },
    {
      name: 'Tanggal',
      selector: 'tanggal',
    },
    {
      name: 'No. HP',
      selector: 'nohp',
    },
    {
      name: 'Psikolog',
      selector: 'psikolog',
    },
    {
      name: 'Alamat',
      selector: 'alamat',
    },
    {
      name: 'Keluhan',
      selector: 'keluhan',
    },
    {
      name: 'Actions',
      cell: (row) => (
        <>
          <EditButton row={row} onEdit={handleEdit} />
          <DeleteButton row={row} onDelete={handleDelete} />
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <>
      <Layout>
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Tabel Konsultasi</h4>
                </div>
              </div>
            </div>
            <div className="container mt-5">
              <DataTable columns={columns} data={data} pagination />
            </div>
          </div>
        </div>
      </Layout>
      <div className="container mt-5">
        <Modal
          isOpen={isEditing}
          onRequestClose={handleCloseModal}
          className="modal-dialog container mt-5"
          style={{
            content: {
              maxWidth: '400px', // Set the maximum width of the modal
              margin: '0 auto', // Center the modal horizontally
              border: '2px solid #ffffff', // Add a border with green color
              borderRadius: '8px', // Add border radius to make it look better
              background: 'white', // Set the background color to white
              transform: 'translate(0, 10%)', // Move it 50% from the left and 50% from the top
            },
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add overlay background color
            },
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2>Edit Data</h2>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
              ></button>
            </div>
            {editedRow && (
              <div className="modal-body">
                <label>Nama:</label>
                <input
                  type="text"
                  value={editedRow.nama}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, nama: e.target.value })
                  }
                  className="form-control"
                />
                <label>Email:</label>
                <input
                  type="text"
                  value={editedRow.email}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, email: e.target.value })
                  }
                  className="form-control"
                />
                <label>Tanggal:</label>
                <input
                  type="date"
                  value={editedRow.tanggal}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, tanggal: e.target.value })
                  }
                  className="form-control"
                />
                <label>No. HP:</label>
                <input
                  type="text"
                  value={editedRow.nohp}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, nohp: e.target.value })
                  }
                  className="form-control"
                />
                <label>Psikolog:</label>
                <input
                  type="text"
                  value={editedRow.psikolog}
                  readOnly // Set the input as read-only
                  className="form-control"
                />
                <label>Alamat:</label>
                <input
                  type="text"
                  value={editedRow.alamat}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, alamat: e.target.value })
                  }
                  className="form-control"
                />
                <label>Keluhan:</label>
                <input
                  type="text"
                  value={editedRow.keluhan}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, keluhan: e.target.value })
                  }
                  className="form-control"
                />
              </div>
            )}
            <div
              className="modal-footer"
              style={{ marginTop: '10px', marginBottom: '10px' }}
            >
              <button
                className="btn btn-primary"
                onClick={handleSave}
                style={{
                  backgroundColor: '#4CAF50',
                  marginRight: '10px',
                  border: '2px solid #4CAF50',
                }}
              >
                Save
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleCloseModal}
                style={{
                  backgroundColor: '#f44336',
                  marginRight: '10px',
                  border: '2px solid #f44336',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Tabelkonsultasi;
