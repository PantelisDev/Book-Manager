import React from 'react';

function NavTabs({ activeTab, onTabChange }) {
  return (
    <div style={styles.navRail}>
      <div
        style={{...styles.navTab, ...(activeTab === 'books' ? styles.activeTab : {})}}
        onClick={() => onTabChange('books')}
      >
        📚 Books
      </div>
      <div
        style={{...styles.navTab, ...(activeTab === 'authors' ? styles.activeTab : {})}}
        onClick={() => onTabChange('authors')}
      >
        👤 Authors
      </div>
    </div>
  );
}

const styles = {
  navRail: { display: 'flex', background: 'white', padding: '0 16px', boxShadow: '0 1px 0 #E8EAED' },
  navTab: { padding: '0 16px', height: '48px', display: 'flex', alignItems: 'center', fontSize: '14px', fontWeight: '500', color: '#5F6368', borderBottom: '3px solid transparent', cursor: 'pointer', gap: '8px', fontFamily: 'Google Sans, sans-serif' },
  activeTab: { color: '#1A73E8', borderBottom: '3px solid #1A73E8' }
};

export default NavTabs;