import React, { useState, useEffect } from 'react';
import { encyclopediaData } from '../data/encyclopedia';
import * as LucideIcons from 'lucide-react';
import { Search, SlidersHorizontal, Star, BookOpen, Share2 } from 'lucide-react';

const Encyclopedia = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Semua');
  const [viewMode, setViewMode] = useState('all'); // 'all' or 'bookmarks'
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('riau_og_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    localStorage.setItem('riau_og_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (e, id) => {
    e.stopPropagation(); // prevent modal opening
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter(b => b !== id));
    } else {
      setBookmarks([...bookmarks, id]);
    }
  };

  const filteredData = encyclopediaData.filter(item => {
    const matchSearch = item.nama.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        item.deskripsi.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = categoryFilter === 'Semua' || item.kategori === categoryFilter;
    const matchBookmark = viewMode === 'bookmarks' ? bookmarks.includes(item.id) : true;
    
    return matchSearch && matchCategory && matchBookmark;
  });

  const categories = ['Semua', 'Aman', 'Bahaya', 'Potensial'];

  return (
    <div className="container animate-fade-in">
      <div className="mb-8 text-center flex flex-col items-center">
        <div className="flex items-center gap-3 mb-2 justify-center">
          <BookOpen size={32} strokeWidth={1.5} color="var(--color-primary)" />
          <h1 className="text-gradient" style={{ margin: 0 }}>Ensiklopedia Migas</h1>
        </div>
        <p style={{ color: 'var(--color-text-muted)' }}>Jelajahi dan kenali karakteristik berbagai gas dan sumber daya di sekitarmu.</p>
      </div>

      <div className="glass-card mb-8">
        <div className="flex gap-4 justify-between items-center filter-bar-container">
          <div className="relative search-input-container">
            <div className="absolute left-3 top-1/2" style={{ transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }}>
              <Search size={18} strokeWidth={1.5} />
            </div>
            <input 
              type="text" 
              placeholder="Cari (misal: metana, beracun...)" 
              className="input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '2.5rem', width: '100%' }}
            />
          </div>
          
          <div className="flex gap-2 items-center" style={{ overflowX: 'auto', paddingBottom: '4px', maxWidth: '100%' }}>
            <SlidersHorizontal size={18} strokeWidth={1.5} color="var(--color-text-muted)" />
            {categories.map(cat => (
              <button 
                key={cat}
                className={`btn ${categoryFilter === cat && viewMode === 'all' ? 'btn-primary' : 'btn-outline'}`}
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
                onClick={() => { setCategoryFilter(cat); setViewMode('all'); }}
              >
                {cat}
              </button>
            ))}
            <button 
              className={`btn ${viewMode === 'bookmarks' ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              onClick={() => setViewMode('bookmarks')}
            >
              <Star size={16} strokeWidth={viewMode === 'bookmarks' ? 2 : 1.5} fill={viewMode === 'bookmarks' ? 'currentColor' : 'none'} /> 
              Tersimpan ({bookmarks.length})
            </button>
          </div>
        </div>
      </div>

      {filteredData.length === 0 ? (
        <div className="text-center py-8">
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>Tidak ada entri yang ditemukan.</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2">
          {filteredData.map((item, index) => {
            const Icon = LucideIcons[item.icon] || LucideIcons.HelpCircle;
            const iconColor = item.kategori === 'Aman' ? '#4ADE80' : item.kategori === 'Bahaya' ? '#EF4444' : '#FF6B35';

            return (
              <div 
                key={item.id} 
                className="glass-card animate-fade-in"
                style={{ animationDelay: `${(index % 10) * 50}ms`, cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                onClick={() => setSelectedEntry(item)}
              >
                <div className="flex justify-between items-start mb-4">
                  <Icon size={32} strokeWidth={1.5} color={iconColor} />
                  <div className="flex items-center gap-2">
                    <span className={`badge badge-${item.kategori.toLowerCase()}`}>{item.kategori}</span>
                    <button 
                      className={`bookmark-btn ${bookmarks.includes(item.id) ? 'active' : ''}`}
                      onClick={(e) => toggleBookmark(e, item.id)}
                      title="Simpan entri"
                      style={{ padding: '0.25rem' }}
                    >
                      <Star size={20} strokeWidth={bookmarks.includes(item.id) ? 2 : 1.5} fill={bookmarks.includes(item.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>
                <h3 className="mb-2">{item.nama}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', flexGrow: 1 }}>
                  {item.deskripsi}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {/* Detail Modal */}
      {selectedEntry && (
        <div className="modal-overlay" onClick={() => setSelectedEntry(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="flex items-center gap-3">
                {(() => {
                  const Icon = LucideIcons[selectedEntry.icon] || LucideIcons.HelpCircle;
                  const iconColor = selectedEntry.kategori === 'Aman' ? '#4ADE80' : selectedEntry.kategori === 'Bahaya' ? '#EF4444' : '#FF6B35';
                  return <Icon size={32} strokeWidth={1.5} color={iconColor} />;
                })()}
                <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{selectedEntry.nama}</h2>
              </div>
              <button className="modal-close" onClick={() => setSelectedEntry(null)}>
                <LucideIcons.X size={24} strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="flex justify-between items-center mb-4">
                <span className={`badge badge-${selectedEntry.kategori.toLowerCase()}`}>
                  Kategori: {selectedEntry.kategori}
                </span>
                <div className="flex gap-2">
                  <button 
                    className="btn btn-outline"
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      // simulate share
                      alert(`Berbagi informasi tentang ${selectedEntry.nama}`);
                    }}
                  >
                    <Share2 size={16} strokeWidth={1.5} /> Bagikan
                  </button>
                  <button 
                    className={`btn ${bookmarks.includes(selectedEntry.id) ? 'btn-outline' : 'btn-primary'}`}
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                    onClick={(e) => toggleBookmark(e, selectedEntry.id)}
                  >
                    <Star size={16} strokeWidth={bookmarks.includes(selectedEntry.id) ? 2 : 1.5} fill={bookmarks.includes(selectedEntry.id) ? 'currentColor' : 'none'} />
                    {bookmarks.includes(selectedEntry.id) ? 'Tersimpan' : 'Simpan'}
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="mb-1 flex items-center gap-2" style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                  <LucideIcons.FileText size={16} strokeWidth={1.5} /> Deskripsi
                </h4>
                <p>{selectedEntry.deskripsi}</p>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 flex items-center gap-2" style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                  <LucideIcons.List size={16} strokeWidth={1.5} /> Ciri-Ciri
                </h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  {selectedEntry.ciriCiri.map((ciri, idx) => (
                    <li key={idx} className="mb-1">{ciri}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 p-4 glass" style={{ borderRadius: '12px', borderLeft: `4px solid var(--${selectedEntry.kategori === 'Bahaya' ? 'danger' : selectedEntry.kategori === 'Aman' ? 'success' : 'color-primary'})` }}>
                <h4 className="mb-2 flex items-center gap-2" style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                  <LucideIcons.ShieldAlert size={16} strokeWidth={1.5} /> Tindakan
                </h4>
                <p style={{ margin: 0, fontWeight: 500 }}>{selectedEntry.tindakan}</p>
              </div>

              <div className="p-4" style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px' }}>
                <h4 className="mb-2 flex items-center gap-2" style={{ color: '#fbbf24', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                  <LucideIcons.Lightbulb size={16} strokeWidth={1.5} /> Fakta Menarik
                </h4>
                <p style={{ margin: 0, fontStyle: 'italic' }}>"{selectedEntry.faktaMenarik}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Encyclopedia;
