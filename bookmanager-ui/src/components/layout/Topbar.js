import React from 'react';

function Topbar({ searchQuery, onSearchChange }) {
  return (
    <div style={styles.topbar}>
      <div style={styles.logoWrap}>
        <div style={styles.logoIcon}>
          <span style={{...styles.dot, background: '#4285F4'}}></span>
          <span style={{...styles.dot, background: '#EA4335'}}></span>
          <span style={{...styles.dot, background: '#FBBC05'}}></span>
          <span style={{...styles.dot, background: '#34A853'}}></span>
        </div>
        <span style={styles.logoText}>
          <span style={{color: '#4285F4'}}>Book</span>Manager
        </span>
      </div>

      <div style={styles.searchBar}>
        <span style={styles.searchIcon}>🔍</span>
        <input
          style={styles.searchInput}
          type="text"
          placeholder="Search books, authors..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div style={styles.avatar}>U</div>
    </div>
  );
}

const styles = {
  topbar: { background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', height: '64px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', flexWrap: 'wrap', gap: '8px' },
  logoWrap: { display: 'flex', alignItems: 'center', gap: '10px' },
  logoIcon: { display: 'flex', flexWrap: 'wrap', width: '22px', gap: '2px' },
  dot: { width: '9px', height: '9px', borderRadius: '50%', display: 'block' },
  logoText: { fontFamily: 'Google Sans, sans-serif', fontSize: '20px', fontWeight: '400', color: '#5F6368' },
  searchBar: { display: 'flex', alignItems: 'center', gap: '12px', background: '#F1F3F4', borderRadius: '24px', padding: '8px 16px', width: '100%', maxWidth: '420px', border: '1px solid transparent', flex: '1' },
  searchIcon: { fontSize: '16px' },
  searchInput: { border: 'none', background: 'transparent', fontSize: '16px', color: '#202124', outline: 'none', width: '100%', fontFamily: 'Roboto, sans-serif' },
  avatar: { width: '32px', height: '32px', borderRadius: '50%', background: '#EA4335', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }
};

export default Topbar;