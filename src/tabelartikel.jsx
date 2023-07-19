import React, { useState } from 'react';
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

const TabelArtikel = () => {
  const [data, setData] = useState([
    {
      id: 1,
      judul: 'Cara Menulis Artikel yang Menarik',
      penulis: 'John Doe',
      tanggal: '2023-07-19',
      kategori: 'Tips & Tricks',
      isi: 'Ini adalah contoh isi artikel yang menarik...',
      gambar: 'https://example.com/gambar_artikel_1.jpg',
    },
    {
      id: 2,
      judul: 'Pengenalan React Hooks',
      penulis: 'Jane Doe',
      tanggal: '2023-07-20',
      kategori: 'Programming',
      isi: 'React Hooks adalah fitur terbaru dari React...',
      gambar: 'https://example.com/gambar_artikel_2.jpg',
    },
    // Add more data objects as needed
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedRow, setEditedRow] = useState(null);

  // Function to generate a new ID
  const generateNewId = () => {
    const maxId = data.reduce((max, item) => Math.max(max, item.id), 0);
    return maxId + 1;
  };

  // Function to handle the edit action
  const handleEdit = (row) => {
    setEditedRow(row);
    setIsEditing(true);
  };

  // Function to handle the delete action
  const handleDelete = (row) => {
    setData((prevData) => prevData.filter((item) => item.id !== row.id));
    // Setelah menghapus data, kita perlu menyesuaikan kembali nomor ID
    // agar tetap konsisten dan mengikuti urutan data yang ada
    setData((prevData) =>
      prevData.map((item, index) => ({ ...item, id: index + 1 })),
    );
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
      name: 'Judul',
      selector: 'judul',
    },
    {
      name: 'Penulis',
      selector: 'penulis',
    },
    {
      name: 'Tanggal',
      selector: 'tanggal',
    },
    {
      name: 'Kategori',
      selector: 'kategori',
    },
    {
      name: 'Isi Artikel',
      selector: 'isi',
      wrap: true, // Wrap the content to fit in the column width
    },
    {
      name: 'Gambar Artikel',
      cell: (row) => (
        <img
          src={row.gambar}
          alt={row.judul}
          style={{ maxWidth: '100px', maxHeight: '100px' }}
        />
      ),
      allowOverflow: true,
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
                  <h4 className="mb-0">Tabel Artikel</h4>
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
              maxWidth: '600px', // Set the maximum width of the modal
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
              <h2>Edit Data Artikel</h2>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
              ></button>
            </div>
            {editedRow && (
              <div className="modal-body">
                <label>Judul:</label>
                <input
                  type="text"
                  value={editedRow.judul}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, judul: e.target.value })
                  }
                  className="form-control"
                />
                <label>Penulis:</label>
                <input
                  type="text"
                  value={editedRow.penulis}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, penulis: e.target.value })
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
                <label>Kategori:</label>
                <input
                  type="text"
                  value={editedRow.kategori}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, kategori: e.target.value })
                  }
                  className="form-control"
                />
                <label>Isi Artikel:</label>
                <textarea
                  value={editedRow.isi}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, isi: e.target.value })
                  }
                  className="form-control"
                />
                <label>Gambar Artikel:</label>
                <input
                  type="text"
                  value={editedRow.gambar}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, gambar: e.target.value })
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

export default TabelArtikel;
