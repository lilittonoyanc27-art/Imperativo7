/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Textbook from './Textbook';
import VerbConjugator from './VerbConjugator';
import GamesContainer from './GamesContainer';
import { BookOpen, Sparkles, Trophy, CheckSquare, GraduationCap, Calendar, MessageSquare } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'textbook' | 'conjugator' | 'games'>('textbook');
  
  // Progress states with persistent localstorage
  const [completedChapters, setCompletedChapters] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('imperativo_completed') || '[]');
    } catch {
      return [];
    }
  });

  const [bookmarkedChapters, setBookmarkedChapters] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('imperativo_bookmarks') || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('imperativo_completed', JSON.stringify(completedChapters));
  }, [completedChapters]);

  useEffect(() => {
    localStorage.setItem('imperativo_bookmarks', JSON.stringify(bookmarkedChapters));
  }, [bookmarkedChapters]);

  const toggleChapterComplete = (id: number) => {
    setCompletedChapters((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const toggleBookmark = (id: number) => {
    setBookmarkedChapters((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Formatted date string for the calendar
  const todayStr = "10 Հունիսի, 2026";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col md:flex-row" id="applet-main-container">
      {/* Sidebar Navigation - Visible on Desktop */}
      <aside className="hidden md:flex w-72 bg-slate-900 text-white flex-col border-r border-slate-800 shrink-0">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-md font-black tracking-tight text-blue-400 leading-tight">Imperativo</h1>
              <p className="text-[10px] text-slate-400 font-medium">Իսպաներենի Հրամայական</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 py-6 space-y-1" id="navigation-tabs">
          <div className="px-6 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Գլխավոր Մենյու</div>
          
          <button
            onClick={() => setActiveTab('textbook')}
            className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-bold transition-all text-left border-l-4 ${
              activeTab === 'textbook'
                ? 'bg-blue-600/10 border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:bg-slate-800/50 hover:text-white'
            }`}
            id="tab-btn-textbook"
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>1. Տեսական Դասագիրք</span>
          </button>

          <button
            onClick={() => setActiveTab('conjugator')}
            className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-bold transition-all text-left border-l-4 ${
              activeTab === 'conjugator'
                ? 'bg-blue-600/10 border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:bg-slate-800/50 hover:text-white'
            }`}
            id="tab-btn-conjugator"
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>2. Բայերի Խոնարհիչ</span>
          </button>

          <button
            onClick={() => setActiveTab('games')}
            className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-bold transition-all text-left border-l-4 ${
              activeTab === 'games'
                ? 'bg-blue-600/10 border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:bg-slate-800/50 hover:text-white'
            }`}
            id="tab-btn-games"
          >
            <Trophy className="w-4 h-4 shrink-0" />
            <span>3. Մարզիչ Խաղեր (6)</span>
          </button>
        </nav>

        {/* Sidebar Progress Tracker */}
        <div className="p-6 bg-slate-800/30 border-t border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400">Առաջընթաց</span>
            <span className="text-xs font-bold text-blue-400">
              {Math.round((completedChapters.length / 27) * 100)}%
            </span>
          </div>
          <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
            <div
              className="bg-blue-400 h-1 rounded-full transition-all duration-500"
              style={{ width: `${(completedChapters.length / 27) * 100}%` }}
            ></div>
          </div>
          <p className="text-[10px] text-slate-500 mt-2 text-center">
            Անցած է ՝ {completedChapters.length} դաս / 27
          </p>
        </div>
      </aside>

      {/* Main Container Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-slate-50">
        {/* Mobile Header Bar */}
        <header className="bg-slate-900 md:bg-white text-white md:text-gray-900 border-b border-slate-800 md:border-slate-200 h-16 px-4 md:px-8 flex items-center justify-between sticky top-0 z-50 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-blue-600 rounded-lg text-white md:hidden">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="hidden md:inline px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-bold uppercase tracking-widest mr-2.5">
                Իսպաներեն
              </span>
              <h2 className="text-sm md:text-lg font-bold text-slate-100 md:text-slate-800 leading-tight">
                Իսպաներենի Հրամայական Եղանակ — Imperativo
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Status Pill */}
            <div className="hidden sm:flex items-center gap-1.5 bg-slate-800 md:bg-slate-100 border border-slate-700 md:border-slate-200 px-3 py-1.5 rounded-xl text-xs text-slate-300 md:text-slate-600 font-semibold">
              <Calendar className="w-3.5 h-3.5 text-blue-500" />
              <span>{todayStr}</span>
            </div>
            
            {/* Minimal Mobile indicators */}
            <div className="md:hidden flex items-center gap-1.5 bg-blue-500/15 border border-blue-500/30 px-2.5 py-1 rounded-lg text-[10px] font-bold text-blue-400">
              <span>{completedChapters.length} դաս</span>
            </div>
          </div>
        </header>

        {/* Mobile Tab/Navigation bar (visible only on small devices) */}
        <nav className="bg-white border-b border-slate-200 py-2.5 px-3 sticky top-16 z-40 shadow-sm md:hidden" id="navigation-tabs">
          <div className="flex gap-1.5 justify-around animate-fade-in">
            <button
              onClick={() => setActiveTab('textbook')}
              className={`flex-1 flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-bold transition-all ${
                activeTab === 'textbook'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
              id="tab-btn-textbook"
            >
              <BookOpen className="w-4 h-4" />
              <span>Դասագիրք</span>
            </button>

            <button
              onClick={() => setActiveTab('conjugator')}
              className={`flex-1 flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-bold transition-all ${
                activeTab === 'conjugator'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
              id="tab-btn-conjugator"
            >
              <Sparkles className="w-4 h-4" />
              <span>Խոնարհիչ</span>
            </button>

            <button
              onClick={() => setActiveTab('games')}
              className={`flex-1 flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-bold transition-all ${
                activeTab === 'games'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
              id="tab-btn-games"
            >
              <Trophy className="w-4 h-4" />
              <span>Խաղեր</span>
            </button>
          </div>
        </nav>

        {/* Hero Welcome banner - Styled to exactly match the sleek design background-gradient theme */}
        <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white py-8 px-6 md:px-8 shadow-sm relative overflow-hidden" id="hero-banner">
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">
                ՄԱՍՆԱԳԻՏԱԿԱՆ ԱԿԱԴԵՄԻԱ
              </span>
              <h2 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
                Իմացե՞լ եք Imperativo-ն հստակ։
              </h2>
              <p className="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Բացահայտեք իսպաներենի հրամայական եղանակի դրական ու ժխտական ձևերը, անկանոն բայերը, դերանունների դասավորությունն ու վերադարձական բայերի օրենքները համապարփակ հայարեն բացատրություններով և ինտերակտիվ խաղերով։
              </p>
            </div>

            {/* Quick Stats cards */}
            <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-4 border border-slate-700/60 w-full md:w-auto shrink-0 flex justify-between gap-6 md:gap-10">
              <div>
                <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Դասընթացներ</span>
                <span className="text-xl font-black font-mono text-blue-400">27</span>
              </div>
              <div className="w-px h-8 bg-slate-700"></div>
              <div>
                <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Խաղային մակարդակներ</span>
                <span className="text-xl font-black font-mono text-emerald-400">6 LEVEL</span>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 translate-x-12 -translate-y-12"></div>
        </section>

        {/* Main View Wrapper */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-6 md:py-8 overflow-y-auto">
          {activeTab === 'textbook' && (
            <Textbook
              completedChapters={completedChapters}
              toggleChapterComplete={toggleChapterComplete}
              bookmarkedChapters={bookmarkedChapters}
              toggleBookmark={toggleBookmark}
            />
          )}
          {activeTab === 'conjugator' && <VerbConjugator />}
          {activeTab === 'games' && <GamesContainer />}
        </main>

        {/* Simple Clean Footer */}
        <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500" id="applet-footer">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
            <span>&copy; {new Date().getFullYear()} Spanish Imperative Academy. Բոլոր իրավունքները պաշտպանված են:</span>
            <div className="flex gap-4">
              <a href="#hero-banner" className="hover:text-blue-600 transition-colors">Դեպի վեր</a>
              <span>&middot;</span>
              <span className="font-mono text-[10px]">v1.0.0</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
