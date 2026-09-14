import React from 'react';
import { encyclopediaData } from '../data/encyclopedia';
import * as LucideIcons from 'lucide-react';
import { AlertTriangle, Droplet, ShieldCheck, BookOpen, BrainCircuit, ArrowRight } from 'lucide-react';

const Home = ({ setPage }) => {
  return (
    <div className="container animate-fade-in">
      <section className="hero">
        <h1 className="text-gradient">Riau Oil & Gas Literacy</h1>
        <p>Kenali apa yang ada di sekitar kita — sebelum terlambat.</p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="btn btn-primary flex items-center gap-2" onClick={() => setPage('encyclopedia')}>
            <BookOpen size={18} strokeWidth={1.5} /> Mulai Belajar
          </button>
          <button className="btn btn-outline flex items-center gap-2" onClick={() => setPage('quiz')}>
            <BrainCircuit size={18} strokeWidth={1.5} /> Ikut Kuis
          </button>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-center">Why This Matters</h2>
        <div className="grid lg:grid-cols-3">
          <div className="glass-card animate-fade-in delay-100">
            <div className="mb-4 text-primary-gradient">
              <AlertTriangle size={32} strokeWidth={1.5} color="var(--color-primary)" />
            </div>
            <h3>Banyak Kasus Fatal</h3>
            <p className="mt-2" style={{ color: 'var(--color-text-muted)' }}>
              Banyak kasus keracunan gas rumah tangga dan industri yang sebenarnya bisa dihindari dengan literasi dasar.
            </p>
          </div>
          <div className="glass-card animate-fade-in delay-200">
            <div className="mb-4">
              <Droplet size={32} strokeWidth={1.5} color="var(--color-primary)" />
            </div>
            <h3>Provinsi Migas</h3>
            <p className="mt-2" style={{ color: 'var(--color-text-muted)' }}>
              Riau adalah salah satu tulang punggung energi nasional, tetapi warga lokal jarang memahami apa yang ada di bawah kaki mereka.
            </p>
          </div>
          <div className="glass-card animate-fade-in delay-300">
            <div className="mb-4">
              <ShieldCheck size={32} strokeWidth={1.5} color="var(--color-primary)" />
            </div>
            <h3>Pencegahan Dini</h3>
            <p className="mt-2" style={{ color: 'var(--color-text-muted)' }}>
              Edukasi sederhana ini dapat mencegah bahaya, menyelamatkan nyawa, dan membuka peluang ekonomi untuk masyarakat.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8 glass-card" style={{ background: 'rgba(255, 107, 53, 0.05)', borderColor: 'rgba(255, 107, 53, 0.2)' }}>
        <h2 className="mb-2 text-primary-gradient text-center">Tahukah Kamu?</h2>
        <p className="text-center" style={{ fontSize: '1.25rem', fontWeight: 500 }}>
          "3 dari 10 rumah tangga di Riau tidak tahu cara membedakan gas LPG yang bocor dan bau alami lingkungan sekitarnya."
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-center">Apa yang akan kamu pelajari</h2>
        <div className="grid lg:grid-cols-3">
          {encyclopediaData.slice(0, 3).map((item, index) => {
            const Icon = LucideIcons[item.icon] || LucideIcons.HelpCircle;
            const iconColor = item.kategori === 'Aman' ? '#4ADE80' : item.kategori === 'Bahaya' ? '#EF4444' : '#FF6B35';
            
            return (
              <div key={item.id} className={`glass-card animate-fade-in delay-${(index + 1) * 100}`} onClick={() => setPage('encyclopedia')} style={{ cursor: 'pointer' }}>
                <div className="flex justify-between items-start mb-4">
                  <Icon size={32} strokeWidth={1.5} color={iconColor} />
                  <span className={`badge badge-${item.kategori.toLowerCase()}`}>{item.kategori}</span>
                </div>
                <h3 className="mb-2">{item.nama}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {item.deskripsi}
                </p>
                <div className="mt-4 flex items-center gap-1" style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 600 }}>
                  Pelajari selengkapnya <ArrowRight size={16} strokeWidth={2} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
