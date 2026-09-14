import React, { useState } from 'react';
import { quizData } from '../data/quiz';
import { Award, CheckCircle2, XCircle, ArrowRight, RotateCcw, Home } from 'lucide-react';

const Quiz = ({ setPage }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = quizData[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex) / quizData.length) * 100;

  const handleOptionSelect = (index) => {
    if (showExplanation) return; // Prevent clicking after answered

    setSelectedOption(index);
    setShowExplanation(true);
    
    if (index === question.jawaban) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  const getBadge = (finalScore) => {
    const percentage = (finalScore / quizData.length) * 100;
    if (percentage >= 90) return { title: "Ahli Literasi Migas", color: "#fbbf24" };
    if (percentage >= 70) return { title: "Paham Dasar", color: "#9ca3af" };
    if (percentage >= 50) return { title: "Perlu Belajar Lagi", color: "#f87171" };
    return { title: "Pemula — Ayo Coba Lagi!", color: "#ef4444" };
  };

  if (quizFinished) {
    const badge = getBadge(score);
    return (
      <div className="container animate-fade-in flex justify-center items-center" style={{ minHeight: '60vh' }}>
        <div className="glass-card text-center" style={{ maxWidth: '600px', width: '100%' }}>
          <h2 className="mb-2 text-gradient">Hasil Kuis</h2>
          <div className="mb-4" style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--color-primary)' }}>
            {score} <span style={{ fontSize: '2rem', color: 'var(--color-text-muted)' }}>/ {quizData.length}</span>
          </div>
          <div className="p-4 mb-6 flex flex-col items-center gap-2" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
            <Award size={48} strokeWidth={1.5} color={badge.color} />
            <h3 style={{ color: badge.color, fontSize: '1.5rem', margin: 0 }}>{badge.title}</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Skor akhirmu adalah {Math.round((score / quizData.length) * 100)}%.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn btn-outline flex items-center gap-2" onClick={() => {
              setCurrentQuestionIndex(0);
              setScore(0);
              setShowExplanation(false);
              setSelectedOption(null);
              setQuizFinished(false);
            }}>
              <RotateCcw size={18} strokeWidth={1.5} /> Ulangi Kuis
            </button>
            <button className="btn btn-primary flex items-center gap-2" onClick={() => setPage('home')}>
              <Home size={18} strokeWidth={1.5} /> Kembali ke Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in flex justify-center">
      <div className="glass-card" style={{ maxWidth: '700px', width: '100%' }}>
        <div className="mb-4 flex justify-between items-center" style={{ color: 'var(--color-text-muted)' }}>
          <span style={{ fontWeight: 600 }}>Pertanyaan {currentQuestionIndex + 1} dari {quizData.length}</span>
          <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Skor Benar: {score}</span>
        </div>
        
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
        </div>

        <h2 className="mb-6" style={{ fontSize: '1.25rem', lineHeight: 1.5 }}>
          {question.pertanyaan}
        </h2>

        <div className="mb-6">
          {question.opsi.map((opt, idx) => {
            let className = "quiz-option";
            if (showExplanation) {
              if (idx === question.jawaban) className += " correct";
              else if (idx === selectedOption) className += " incorrect";
            }
            return (
              <button 
                key={idx} 
                className={className}
                onClick={() => handleOptionSelect(idx)}
                disabled={showExplanation}
              >
                <div className="flex justify-between items-center">
                  <span>{opt}</span>
                  {showExplanation && idx === question.jawaban && <CheckCircle2 size={20} strokeWidth={1.5} color="var(--success)" />}
                  {showExplanation && idx === selectedOption && idx !== question.jawaban && <XCircle size={20} strokeWidth={1.5} color="var(--danger)" />}
                </div>
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="animate-fade-in p-4 mb-4 flex gap-3" style={{ 
            background: selectedOption === question.jawaban ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            borderLeft: `4px solid ${selectedOption === question.jawaban ? 'var(--success)' : 'var(--danger)'}`,
            borderRadius: '0 12px 12px 0'
          }}>
            <div style={{ flexShrink: 0, marginTop: '2px' }}>
              {selectedOption === question.jawaban 
                ? <CheckCircle2 size={24} strokeWidth={1.5} color="var(--success)" />
                : <XCircle size={24} strokeWidth={1.5} color="var(--danger)" />}
            </div>
            <div>
              <h4 className="mb-1" style={{ color: selectedOption === question.jawaban ? 'var(--success)' : 'var(--danger)' }}>
                {selectedOption === question.jawaban ? 'Benar!' : 'Salah!'}
              </h4>
              <p style={{ margin: 0 }}>{question.penjelasan}</p>
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <button 
            className="btn btn-primary flex items-center gap-2" 
            disabled={!showExplanation}
            onClick={handleNext}
            style={{ opacity: !showExplanation ? 0.5 : 1 }}
          >
            {currentQuestionIndex < quizData.length - 1 ? 'Soal Berikutnya' : 'Selesai'}
            {currentQuestionIndex < quizData.length - 1 ? <ArrowRight size={18} strokeWidth={1.5} /> : <CheckCircle2 size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
