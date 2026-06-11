/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { chapters } from './theoryData';
import { Chapter } from './types';
import { BookOpen, Search, CheckCircle, Bookmark, BookmarkCheck, ArrowRight, ArrowLeft } from 'lucide-react';

interface TextbookProps {
  completedChapters: number[];
  toggleChapterComplete: (id: number) => void;
  bookmarkedChapters: number[];
  toggleBookmark: (id: number) => void;
}

export default function Textbook({
  completedChapters,
  toggleChapterComplete,
  bookmarkedChapters,
  toggleBookmark,
}: TextbookProps) {
  const [activeChapterId, setActiveChapterId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState<boolean>(false);

  const activeChapter = useMemo(() => {
    return chapters.find((ch) => ch.id === activeChapterId) || chapters[0];
  }, [activeChapterId]);

  const filteredChapters = useMemo(() => {
    return chapters.filter((ch) => {
      const matchesSearch =
        ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (ch.examples &&
          ch.examples.some(
            (ex) =>
              ex.spanish.toLowerCase().includes(searchQuery.toLowerCase()) ||
              ex.armenian.toLowerCase().includes(searchQuery.toLowerCase())
          ));

      const matchesBookmark = !showBookmarksOnly || bookmarkedChapters.includes(ch.id);

      return matchesSearch && matchesBookmark;
    });
  }, [searchQuery, showBookmarksOnly, bookmarkedChapters]);

  const handleNext = () => {
    if (activeChapterId < chapters.length) {
      setActiveChapterId(activeChapterId + 1);
    }
  };

  const handlePrev = () => {
    if (activeChapterId > 1) {
      setActiveChapterId(activeChapterId - 1);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="textbook-view">
      {/* Sidebar Navigation */}
      <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm h-[calc(100vh-180px)] min-h-[500px] flex flex-col justify-start">
        {/* Search & Header */}
        <div className="mb-4">
          <h2 className="text-md font-bold text-slate-800 mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span>Բաժիններ և Տեսություն</span>
          </h2>

          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Որոնել թեմա կամ բառ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all font-sans"
              id="theory-search-input"
            />
          </div>

          <div className="flex gap-2 mt-3">
            <button
              onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
              className={`flex-1 text-xs py-1.5 px-3 rounded-lg border transition-all flex items-center justify-center gap-1.5 ${
                showBookmarksOnly
                  ? 'bg-amber-50 text-amber-700 border-amber-200 font-medium'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Էջանիշներ ({bookmarkedChapters.length})</span>
            </button>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-2.5 py-1.5 rounded-lg transition-all"
              >
                Մաքրել
              </button>
            )}
          </div>
        </div>

        {/* Scrollable List */}
        <div className="overflow-y-auto flex-1 pr-1 space-y-1 scrollbar-thin">
          {filteredChapters.length === 0 ? (
            <div className="text-center py-8 text-gray-400 text-sm">Ոչինչ չի գտնվել</div>
          ) : (
            filteredChapters.map((ch) => {
              const isActive = ch.id === activeChapterId;
              const isComp = completedChapters.includes(ch.id);
              const isMarked = bookmarkedChapters.includes(ch.id);

              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChapterId(ch.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-2.5 border-l-4 ${
                    isActive
                      ? 'bg-blue-50/50 border-blue-600 text-blue-950 font-bold'
                      : 'hover:bg-slate-50 text-slate-600 border-transparent'
                  }`}
                  id={`chapter-nav-btn-${ch.id}`}
                >
                  <div className="mt-0.5 min-w-4 flex flex-col items-center">
                    {isComp ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500 fill-emerald-50" />
                    ) : (
                      <span className="text-[10px] bg-gray-100 text-gray-500 w-4 h-4 rounded-full flex items-center justify-center font-bold">
                        {ch.id}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold leading-tight break-words truncate">
                      {ch.title.replace(/^\d+\.\s*/, '')}
                    </p>
                  </div>

                  {isMarked && <BookmarkCheck className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />}
                </button>
              );
            })
          )}
        </div>

        {/* Progress Summary Footer */}
        <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between items-center bg-white">
          <span>Անցած է՝ {completedChapters.length} / {chapters.length}</span>
          <div className="w-24 bg-slate-100 rounded-full h-1 overflow-hidden">
            <div
              className="bg-blue-600 h-full transition-all duration-300"
              style={{ width: `${(completedChapters.length / chapters.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between min-h-[500px]">
        {/* Textbook Header */}
        <div>
          <div className="flex justify-between items-start gap-4 mb-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded">
                Բաժին {activeChapter.id} / {chapters.length}
              </span>
              <h1 className="text-xl md:text-2xl font-bold font-sans text-gray-900 mt-2" id="chapter-title">
                {activeChapter.title}
              </h1>
            </div>

            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => toggleBookmark(activeChapter.id)}
                className={`p-2 rounded-xl border transition-all ${
                  bookmarkedChapters.includes(activeChapter.id)
                    ? 'bg-amber-50 text-amber-600 border-amber-200'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50 border-gray-200'
                }`}
                title="Նշել էջանիշով"
                id="chapter-bookmark-btn"
              >
                <Bookmark className="w-5 h-5 fill-current" />
              </button>

              <button
                onClick={() => toggleChapterComplete(activeChapter.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all ${
                  completedChapters.includes(activeChapter.id)
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                }`}
                id="chapter-complete-btn"
              >
                <CheckCircle className={`w-4 h-4 ${completedChapters.includes(activeChapter.id) ? 'text-emerald-500' : 'text-gray-400'}`} />
                <span>{completedChapters.includes(activeChapter.id) ? 'Կարդացված է' : 'Նշել կարդացված'}</span>
              </button>
            </div>
          </div>

          {/* Grammar Content */}
          <div className="prose max-w-none text-base md:text-[17px] text-slate-800 leading-relaxed font-sans mb-6">
            {activeChapter.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={index} className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-3">
                    {paragraph.replace('###', '').trim()}
                  </h3>
                );
              }
              const hasDoubleAsterisks = paragraph.includes('**');
              if (hasDoubleAsterisks) {
                // Highlight bold text beautifully
                return (
                  <p key={index} className="mb-4">
                    {paragraph.split('**').map((chunk, i) => (
                      i % 2 === 1 ? <strong key={i} className="text-slate-950 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded text-sm md:text-base font-bold font-mono">{chunk}</strong> : chunk
                    ))}
                  </p>
                );
              }
              return <p key={index} className="mb-4">{paragraph}</p>;
            })}
          </div>

          {/* Chapters Table */}
          {activeChapter.table && (
            <div className="overflow-x-auto my-6 border border-slate-200 rounded-xl" id="chapter-data-table">
              <table className="w-full text-left border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    {activeChapter.table.headers.map((h, i) => (
                      <th key={i} className="p-3.5 font-bold text-slate-900 border-r border-slate-200 last:border-r-0">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {activeChapter.table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b last:border-b-0 border-slate-200 hover:bg-slate-50 transition-colors">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="p-3.5 text-slate-800 border-r border-slate-200 last:border-r-0 font-medium">
                          {cell.startsWith('no ') || cell.startsWith('No ') ? (
                            <span className="text-red-600 font-bold">{cell}</span>
                          ) : cellIndex > 0 && activeChapter.id === 3 ? (
                            <span className="text-blue-600 font-bold">{cell}</span>
                          ) : (
                            <span>{cell}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Dialogue / Extra block (Special view for Chapter 27 / Chapter 13 lists) */}
          {activeChapter.additionalNotes && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-5" id="chapter-additional-notes">
              <h3 className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">
                Երկխոսություն և Լրացուցիչ Մեկնաբանություն
              </h3>
              <div className="space-y-3 whitespace-pre-wrap text-sm md:text-base text-slate-700 leading-relaxed font-mono">
                {activeChapter.additionalNotes.split('\n\n').map((item, i) => {
                  if (item.startsWith('**Profesora:**') || item.startsWith('**Carlos:**') || item.startsWith('**Lucía:**')) {
                    const name = item.match(/\*\*(.*?)\*\*/)?.[1] || '';
                    const speech = item.replace(/\*\*.*?\*\*/, '').trim();
                    return (
                      <div key={i} className="flex gap-2 text-sm md:text-base leading-relaxed border-l-2 border-blue-500 pl-3">
                        <span className="font-bold text-blue-600 w-24 shrink-0">{name}:</span>
                        <span className="text-slate-800 italic">{speech}</span>
                      </div>
                    );
                  }
                  return (
                    <p key={i} className="text-sm md:text-base leading-relaxed font-sans text-slate-600 bg-white p-3.5 rounded-lg border border-slate-150">
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          )}

          {/* Side-by-side Examples Showcase */}
          {activeChapter.examples && activeChapter.examples.length > 0 && (
            <div className="mt-6" id="chapter-examples-grid">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Կիրառական Օրինակներ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {activeChapter.examples.map((ex, i) => (
                  <div
                    key={i}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-slate-300 transition-all flex flex-col gap-1.5"
                  >
                    <span className="font-sans font-black text-slate-900 text-base md:text-lg">
                      {ex.spanish}
                    </span>
                    <span className="text-sm text-slate-600 font-medium">
                      {ex.armenian}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons bottom */}
        <div className="flex justify-between items-center gap-4 mt-8 pt-4 border-t border-gray-100">
          <button
            onClick={handlePrev}
            disabled={activeChapterId === 1}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
              activeChapterId === 1
                ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                : 'text-gray-700 border-gray-200 hover:bg-gray-50'
            }`}
            id="prev-chapter-btn"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Նախորդ բաժին</span>
          </button>

          <div className="text-xs text-gray-500 font-medium">
            Բաժին {activeChapterId} / {chapters.length}
          </div>

          <button
            onClick={handleNext}
            disabled={activeChapterId === chapters.length}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
              activeChapterId === chapters.length
                ? 'text-gray-300 border-gray-150 cursor-not-allowed'
                : 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700'
            }`}
            id="next-chapter-btn"
          >
            <span>Հաջորդ բաժին</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
