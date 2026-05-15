import React, { useState } from 'react';

function AuthorsTable({ authors, onAdd, onDelete, onUpdate }) {
  const [showNewRow, setShowNewRow] = useState(false);
  const [newAuthor, setNewAuthor] = useState({ name: '', nationality: '', dateOfBirth: '', books: [] });
  const [sortCol, setSortCol] = useState(null);
  const [sortDir, setSortDir] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [editingAuthor, setEditingAuthor] = useState({});
  const PAGE_SIZE = 10;

  const handleSort = (col) => {
    if (sortCol === col) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCol(col);
      setSortDir('asc');
    }
  };

  const sorted = [...authors].sort((a, b) => {
    if (!sortCol) return 0;
    let valA = a[sortCol], valB = b[sortCol];
    if (typeof valA === 'string') valA = valA.toLowerCase();
    if (typeof valB === 'string') valB = valB.toLowerCase();
    if (valA < valB) return sortDir === 'asc' ? -1 : 1;
    if (valA > valB) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / PAGE_SIZE);
  const paginated = sorted.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleSave = () => {
    onAdd(newAuthor);
    setNewAuthor({ name: '', nationality: '', dateOfBirth: '', books: [] });
    setShowNewRow(false);
  };

  const handleEdit = (author) => {
    setEditingId(author.id);
    setEditingAuthor({...author});
  };

  const handleUpdate = (id) => {
    onUpdate(id, editingAuthor);
    setEditingId(null);
  };

  const SortIcon = ({ col }) => {
    if (sortCol !== col) return <span style={styles.sortIcon}>⇅</span>;
    return <span style={{...styles.sortIcon, color: '#1A73E8'}}>{sortDir === 'asc' ? '↑' : '↓'}</span>;
  };

  return (
    <div>
      <div style={styles.toolbar}>
        <span style={styles.pageTitle}>Authors</span>
        <button style={styles.btnContained} onClick={() => setShowNewRow(true)} disabled={showNewRow}>
          + New author
        </button>
      </div>

      <div style={styles.card}>
        <table style={styles.table}>
          <colgroup>
            <col style={{width:'25%'}} />
            <col style={{width:'20%'}} />
            <col style={{width:'18%'}} />
            <col style={{width:'27%'}} />
            <col style={{width:'10%'}} />
          </colgroup>
          <thead>
            <tr>
              <th style={styles.th} onClick={() => handleSort('name')}>
                <div style={styles.thInner}>Name <SortIcon col="name" /></div>
              </th>
              <th style={styles.th} onClick={() => handleSort('nationality')}>
                <div style={styles.thInner}>Nationality <SortIcon col="nationality" /></div>
              </th>
              <th style={styles.th} onClick={() => handleSort('dateOfBirth')}>
                <div style={styles.thInner}>Date of birth <SortIcon col="dateOfBirth" /></div>
              </th>
              <th style={styles.th} onClick={() => handleSort('books')}>
                <div style={styles.thInner}>Books <SortIcon col="books" /></div>
              </th>
              <th style={styles.th}></th>
            </tr>
          </thead>
          <tbody>
            {showNewRow && (
              <tr style={styles.newRow}>
                <td style={styles.td} data-label="Name"><input style={styles.input} placeholder="Full name" value={newAuthor.name} onChange={e => setNewAuthor({...newAuthor, name: e.target.value})} /></td>
                <td style={styles.td} data-label="Nationality"><input style={styles.input} placeholder="Nationality" value={newAuthor.nationality} onChange={e => setNewAuthor({...newAuthor, nationality: e.target.value})} /></td>
                <td style={styles.td} data-label="Date of birth"><input style={styles.input} type="date" value={newAuthor.dateOfBirth} onChange={e => setNewAuthor({...newAuthor, dateOfBirth: e.target.value})} /></td>
                <td style={styles.td} data-label="Books"><input style={styles.input} placeholder="Books" value={newAuthor.books} onChange={e => setNewAuthor({...newAuthor, books: e.target.value})} /></td>
                <td style={styles.td} data-label="">
                  <div style={styles.actions}>
                    <button style={styles.confirmBtn} onClick={handleSave}>✓</button>
                    <button style={styles.cancelBtn} onClick={() => setShowNewRow(false)}>✕</button>
                  </div>
                </td>
              </tr>
            )}
            {paginated.map((author) => (
              <tr key={author.id} style={styles.dataRow}
                onMouseEnter={e => e.currentTarget.style.background='#F8F9FA'}
                onMouseLeave={e => e.currentTarget.style.background='white'}>
                {editingId === author.id ? (
                  <>
                    <td style={styles.td} data-label="Name"><input style={styles.input} value={editingAuthor.name} onChange={e => setEditingAuthor({...editingAuthor, name: e.target.value})} /></td>
                    <td style={styles.td} data-label="Nationality"><input style={styles.input} value={editingAuthor.nationality} onChange={e => setEditingAuthor({...editingAuthor, nationality: e.target.value})} /></td>
                    <td style={styles.td} data-label="Date of birth"><input style={styles.input} type="date" value={editingAuthor.dateOfBirth} onChange={e => setEditingAuthor({...editingAuthor, dateOfBirth: e.target.value})} /></td>
                    <td style={styles.td} data-label="Books"><input style={styles.input} value={Array.isArray(editingAuthor.books) ? editingAuthor.books.join(', ') : editingAuthor.books} onChange={e => setEditingAuthor({...editingAuthor, books: e.target.value})} /></td>
                    <td style={styles.td} data-label="">
                      <div style={styles.actions}>
                        <button style={styles.confirmBtn} onClick={() => handleUpdate(author.id)}>✓</button>
                        <button style={styles.cancelBtn} onClick={() => setEditingId(null)}>✕</button>
                      </div>
                    </td>
                  </>
                ) : (
                  <>
                    <td style={{...styles.td, fontWeight:'500'}}
                      data-label="Name"
                      data-meta={`${author.nationality} · ${author.dateOfBirth}`}>
                      {author.name}
                    </td>
                    <td style={styles.td} data-label="Nationality"><span style={styles.chip}>{author.nationality}</span></td>
                    <td style={{...styles.td, color:'#5F6368'}} data-label="Date of birth">{author.dateOfBirth}</td>
                    <td style={{...styles.td, color:'#5F6368'}} data-label="Books">{Array.isArray(author.books) ? author.books.join(', ') : author.books}</td>
                    <td style={styles.td} data-label="">
                      <div style={styles.actions}>
                        <button style={styles.iconBtn} aria-label="Edit" onClick={() => handleEdit(author)}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        </button>
                        <button style={{...styles.iconBtn, color:'#D93025'}} aria-label="Delete" onClick={() => onDelete(author.id)}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                        </button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={styles.pagination}>
        <button style={styles.pageNavText} disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>Previous</button>
        {Array.from({length: totalPages}, (_, i) => (
          <button key={i+1} style={{...styles.pageBtn, ...(currentPage === i+1 ? styles.activePage : {})}} onClick={() => setCurrentPage(i+1)}>{i+1}</button>
        ))}
        <button style={styles.pageNavText} disabled={currentPage === totalPages || totalPages === 0} onClick={() => setCurrentPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
}

const styles = {
  toolbar: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' },
  pageTitle: { fontFamily: 'Google Sans, sans-serif', fontSize: '22px', fontWeight: '400', color: '#202124' },
  btnContained: { display: 'flex', alignItems: 'center', gap: '8px', padding: '0 24px', height: '36px', background: '#1A73E8', color: 'white', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.3)', whiteSpace: 'nowrap' },
  card: { background: 'white', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.06)', overflow: 'hidden' },
  table: { width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' },
  th: { padding: '0 16px', height: '48px', textAlign: 'left', fontWeight: '500', fontSize: '12px', color: '#5F6368', borderBottom: '1px solid #E8EAED', letterSpacing: '0.8px', textTransform: 'uppercase', cursor: 'pointer', userSelect: 'none' },
  thInner: { display: 'flex', alignItems: 'center', gap: '4px' },
  sortIcon: { fontSize: '12px', opacity: '0.5' },
  td: { padding: '0 16px', height: '52px', borderBottom: '1px solid #E8EAED', color: '#202124', fontSize: '14px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' },
  newRow: { background: '#E8F0FE' },
  dataRow: { background: 'white', transition: 'background 0.15s' },
  input: { width: '100%', border: 'none', borderBottom: '2px solid #1A73E8', background: 'transparent', fontSize: '14px', color: '#202124', outline: 'none', padding: '2px 0', fontFamily: 'Roboto, sans-serif' },
  chip: { display: 'inline-flex', padding: '4px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: '500', background: '#E8F0FE', color: '#1967D2' },
  actions: { display: 'flex', gap: '4px', alignItems: 'center' },
  iconBtn: { width: '32px', height: '32px', borderRadius: '50%', border: 'none', background: 'transparent', cursor: 'pointer', color: '#5F6368', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  confirmBtn: { width: '32px', height: '32px', borderRadius: '50%', border: 'none', background: 'transparent', cursor: 'pointer', color: '#1A73E8', fontSize: '16px' },
  cancelBtn: { width: '32px', height: '32px', borderRadius: '50%', border: 'none', background: 'transparent', cursor: 'pointer', color: '#D93025', fontSize: '16px' },
  pagination: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '32px 0 8px' },
  pageBtn: { minWidth: '36px', height: '36px', padding: '0 6px', borderRadius: '4px', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '14px', color: '#1A0DAB', textDecoration: 'underline' },
  activePage: { color: '#202124', fontWeight: '700', textDecoration: 'none', fontSize: '16px' },
  pageNavText: { minWidth: '48px', height: '36px', padding: '0 8px', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '14px', color: '#1A0DAB', textDecoration: 'underline', borderRadius: '4px' },
};

export default AuthorsTable;
