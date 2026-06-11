/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { verbsList } from './theoryData';
import { VerbInfo } from './types';
import { Sparkles, ArrowRightLeft, Search, HelpCircle, Eye } from 'lucide-react';

export default function VerbConjugator() {
  const [selectedVerb, setSelectedVerb] = useState<VerbInfo>(verbsList[0]);
  const [isPositive, setIsPositive] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredVerbs = verbsList.filter((v) =>
    v.infinitive.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.translation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getArmenianPersonTranslation = (verb: VerbInfo, person: keyof typeof verb.afirmativo, positive: boolean) => {
    const isReflexive = verb.infinitive.endsWith('se');
    const baseTranslate = verb.translation; // e.g. "խոսել" or "ուտել" or "վեր կենալ"

    // Custom translations mapping for high precision
    if (verb.infinitive === 'hablar') {
      const positiveMap = { tú: 'Խոսի՛ր', usted: 'Խոսե՛ք (հարգալից)', nosotros: 'Եկե՛ք խոսենք', vosotros: 'Խոսե՛ք', ustedes: 'Խոսե՛ք (բազմակի)' };
      const negativeMap = { tú: 'Մի՛ խոսիր', usted: 'Մի՛ խոսեք (հարգալից)', nosotros: 'Եկեք չխոսենք', vosotros: 'Մի՛ խոսեք', ustedes: 'Մի՛ խոսեք (բազմակի)' };
      return positive ? positiveMap[person] : negativeMap[person];
    }
    if (verb.infinitive === 'comer') {
      const positiveMap = { tú: 'Կե՛ր', usted: 'Կերե՛ք (հարգալից)', nosotros: 'Եկե՛ք ուտենք', vosotros: 'Կերե՛ք', ustedes: 'Կերե՛ք (բազմակի)' };
      const negativeMap = { tú: 'Մի՛ կեր', usted: 'Մի՛ կերեք', nosotros: 'Եկեք չուտենք', vosotros: 'Մի՛ կերեք', ustedes: 'Մի՛ կերեք' };
      return positive ? positiveMap[person] : negativeMap[person];
    }
    if (verb.infinitive === 'vivir') {
      const positiveMap = { tú: 'Ապրի՛ր', usted: 'Ապրե՛ք (հարգալից)', nosotros: 'Եկե՛ք ապրենք', vosotros: 'Ապրե՛ք', ustedes: 'Ապրե՛ք (բազմակի)' };
      const negativeMap = { tú: 'Մի՛ ապրիր', usted: 'Մի՛ ապրեք', nosotros: 'Եկեք չապրենք', vosotros: 'Մի՛ ապրեք', ustedes: 'Մի՛ ապրեք' };
      return positive ? positiveMap[person] : negativeMap[person];
    }
    if (verb.infinitive === 'ser') {
      const positiveMap = { tú: 'Եղի՛ր', usted: 'Եղե՛ք (հարգալից)', nosotros: 'Եկե՛ք լինենք', vosotros: 'Եղե՛ք', ustedes: 'Եղե՛ք' };
      const negativeMap = { tú: 'Մի՛ եղիր', usted: 'Մի՛ եղեք (հարգալից)', nosotros: 'Եկեք չլինենք', vosotros: 'Մի՛ եղեք', ustedes: 'Մի՛ եղեք' };
      return positive ? positiveMap[person] : negativeMap[person];
    }
    if (verb.infinitive === 'ir') {
      const positiveMap = { tú: 'Գնա՛', usted: 'Գնացե՛ք (հարգալից)', nosotros: 'Եկե՛ք գնանք (Vamos)', vosotros: 'Գնացե՛ք', ustedes: 'Գնացե՛ք' };
      const negativeMap = { tú: 'Մի՛ գնա', usted: 'Մի՛ գնացեք', nosotros: 'Եկեք չգնանք', vosotros: 'Մի՛ գնացեք', ustedes: 'Մի՛ գնացեք' };
      return positive ? positiveMap[person] : negativeMap[person];
    }
    if (verb.infinitive === 'tener') {
      const positiveMap = { tú: 'Ունեցի՛ր / Վերցրու՛', usted: 'Ունեցե՛ք (հարգալից)', nosotros: 'Եկե՛ք ունենանք', vosotros: 'Ունեցե՛ք', ustedes: 'Ունեցե՛ք' };
      const negativeMap = { tú: 'Մի՛ ունեցիր', usted: 'Մի՛ ունեցեք', nosotros: 'Եկեք չունենանք', vosotros: 'Մի՛ ունեցեք', ustedes: 'Մի՛ ունեցեք' };
      return positive ? positiveMap[person] : negativeMap[person];
    }
    if (verb.infinitive === 'hacer') {
      const positiveMap = { tú: 'Արա՛', usted: 'Արե՛ք (հարգալից)', nosotros: 'Եկե՛ք անենք', vosotros: 'Արե՛ք', ustedes: 'Արե՛ք' };
      const negativeMap = { tú: 'Մի՛ արա', usted: 'Մի՛ արեք', nosotros: 'Եկեք չանենք', vosotros: 'Մի՛ արեք', ustedes: 'Մի՛ արեք' };
      return positive ? positiveMap[person] : negativeMap[person];
    }
    if (verb.infinitive === 'decir') {
      const positiveMap = { tú: 'Ասա՛', usted: 'Ասե՛ք (հարգալից)', nosotros: 'Եկե՛ք ասենք', vosotros: 'Ասե՛ք', ustedes: 'Ասե՛ք' };
      const negativeMap = { tú: 'Մի՛ ասա', usted: 'Մի՛ ասեք', nosotros: 'Եկեք չասենք', vosotros: 'Մի՛ ասեք', ustedes: 'Մի՛ ասեք' };
      return positive ? positiveMap[person] : negativeMap[person];
    }
    if (isReflexive) {
      if (verb.infinitive === 'levantarse') {
        const positiveMap = { tú: 'Վե՛ր կաց (Արթնացի՛ր)', usted: 'Վե՛ր կացեք (հարգալից)', nosotros: 'Եկե՛ք վեր կենանք (Levantémonos)', vosotros: 'Վե՛ր կացեք', ustedes: 'Վե՛ր կացեք' };
        const negativeMap = { tú: 'Ուշ վեր մի՛ կաց', usted: 'Մի՛ վեր կենաք (հարգալից)', nosotros: 'Եկեք վեր չկենանք', vosotros: 'Մի՛ վեր կացեք', ustedes: 'Մի՛ վեր կենաք' };
        return positive ? positiveMap[person] : negativeMap[person];
      }
    }

    // Default fallbacks with placeholders
    const defaultSuffix = positive ? "!" : " (մի արա)";
    return `${baseTranslate} / ${person}${defaultSuffix}`;
  };

  const getVerbBadgeColor = (type: string) => {
    switch (type) {
      case 'regular':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'irregular':
        return 'bg-red-50 text-red-700 border-red-100';
      case 'stem-changing':
        return 'bg-amber-50 text-amber-700 border-amber-100';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6" id="conjugator-view">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100 mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span>Բայերի ինտերակտիվ խոնարհում</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Ընտրեք ցանկացած բայ՝ տեսնելու դրական և ժխտական հրամայականի ձևերը
          </p>
        </div>

        {/* Switcher */}
        <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setIsPositive(true)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              isPositive
                ? 'bg-white text-emerald-700 shadow-sm'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Դրական (Afirmativo)</span>
          </button>
          <button
            onClick={() => setIsPositive(false)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              !isPositive
                ? 'bg-white text-red-700 shadow-sm'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span>Ժխտական (Negativo)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Verbs Sidebar Selector */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Փնտրել բայ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all font-sans"
              id="verb-search-input"
            />
          </div>

          <div className="max-h-[350px] overflow-y-auto space-y-1.5 border border-slate-100 rounded-xl p-2 bg-slate-50/50">
            {filteredVerbs.length === 0 ? (
              <div className="text-center py-4 text-gray-400 text-xs">Բայ չի գտնվել</div>
            ) : (
              filteredVerbs.map((verb) => (
                <button
                  key={verb.infinitive}
                  onClick={() => setSelectedVerb(verb)}
                  className={`w-full text-left p-2.5 rounded-xl transition-all border flex items-center justify-between ${
                    selectedVerb.infinitive === verb.infinitive
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                      : 'bg-white hover:bg-slate-100 hover:border-slate-300 text-slate-700 border-slate-200'
                  }`}
                  id={`verb-select-btn-${verb.infinitive}`}
                >
                  <div className="min-w-0">
                    <p className="text-sm font-bold truncate leading-tight">
                      {verb.infinitive}
                    </p>
                    <p className={`text-[10px] leading-tight ${selectedVerb.infinitive === verb.infinitive ? 'text-blue-100' : 'text-slate-400'}`}>
                      {verb.translation}
                    </p>
                  </div>

                  <span className={`text-[9px] px-1.5 py-0.5 rounded border uppercase shrink-0 font-semibold ${
                    selectedVerb.infinitive === verb.infinitive
                      ? 'bg-blue-700 border-blue-500 text-white'
                      : getVerbBadgeColor(verb.type)
                  }`}>
                    {verb.type === 'stem-changing' ? (verb.change || 'stem') : verb.type}
                  </span>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div>
            {/* Verb Card Meta */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-5 flex flex-wrap justify-between items-center gap-4">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Ընտրված Բայ</span>
                <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mt-0.5 leading-none">
                  <span>{selectedVerb.infinitive}</span>
                  <span className="text-xs text-slate-500 font-normal">({selectedVerb.translation})</span>
                </h3>
              </div>

              <div className="flex gap-2.5 flex-wrap">
                <span className={`text-xs px-2.5 py-1 rounded-full border font-bold ${getVerbBadgeColor(selectedVerb.type)}`}>
                  Տեսակ՝ {selectedVerb.type === 'regular' ? 'Կանոնավոր' : selectedVerb.type === 'irregular' ? 'Անկանոն' : `Արմատափոխվող (${selectedVerb.change})`}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full border border-gray-200 bg-white text-gray-600 font-medium font-mono">
                  Խումբ՝ {selectedVerb.group}
                </span>
              </div>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3.5" id="conjugator-cards-grid">
              {(Object.keys(isPositive ? selectedVerb.afirmativo : selectedVerb.negativo) as Array<keyof typeof selectedVerb.afirmativo>).map((person) => {
                const conjugated = isPositive ? selectedVerb.afirmativo[person] : selectedVerb.negativo[person];
                if (!conjugated) return null; // safety check

                const translation = getArmenianPersonTranslation(selectedVerb, person as "tú" | "usted" | "nosotros" | "vosotros" | "ustedes", isPositive);

                // Determine dynamic font size based on conjugated word length to prevent spilling
                const fontSizeClass = conjugated.length > 12 
                  ? 'text-sm md:text-base font-bold' 
                  : conjugated.length > 8 
                    ? 'text-base md:text-lg font-extrabold' 
                    : 'text-xl md:text-2xl font-black';

                return (
                  <div
                    key={person}
                    className={`rounded-xl border p-4 shadow-sm flex flex-col justify-between min-h-[155px] transition-all duration-300 relative overflow-hidden ${
                      isPositive
                        ? 'bg-emerald-50/20 border-emerald-100 hover:border-emerald-300 hover:shadow-emerald-100/50'
                        : 'bg-red-50/20 border-red-100 hover:border-red-300 hover:shadow-red-100/50'
                    }`}
                  >
                    {/* Top part: person */}
                    <div>
                      <div className="flex flex-col whitespace-normal leading-tight">
                        <span className="text-xs uppercase font-extrabold tracking-wider text-slate-500 font-mono">
                          {person}
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold leading-tight mt-0.5 whitespace-normal break-words">
                          {person === 'tú' ? '(դու)' : person === 'usted' ? '(Դուք)' : person === 'nosotros' ? '(մենք)' : person === 'vosotros' ? '(ոչ պաշտոնական դուք)' : '(դուք բոլորդ)'}
                        </span>
                      </div>
                      <h4 className={`${fontSizeClass} mt-2.5 leading-tight tracking-tight break-all ${isPositive ? 'text-emerald-800' : 'text-red-800'}`}>
                        {conjugated}
                      </h4>
                    </div>

                    {/* Bottom part: translation */}
                    <div className="mt-3.5 pt-2.5 px-0.5 border-t border-slate-100">
                      <p className="text-xs md:text-sm font-bold text-slate-700 leading-snug break-words whitespace-normal font-sans">
                        {translation}
                      </p>
                    </div>

                    {/* Subtle watermarked person indicator */}
                    <span className="absolute bottom-1 right-2 text-5xl text-slate-200/25 select-none font-bold -z-10 capitalize">
                      {person[0]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Grammar Tips for selected verb */}
          <div className="mt-6 p-4 bg-blue-50/50 border border-blue-100 rounded-xl flex gap-3 text-xs leading-relaxed text-blue-900 leading-loose" id="conjugator-tips-box">
            <HelpCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Ուսուցչի խորհուրդը ՝</p>
              {selectedVerb.type === 'regular' && (
                <p>
                  Այս բայը կատարյալ կանոնավոր է: Դրական <strong>tú</strong> ձևը կազմվում է վերջին <span className="font-mono text-blue-600">-r</span> տառը հեռացնելով: Ժխտականում կիրառում ենք հակառակ վերջավորությունները (<strong>-AR &#8594; e, -ER/-IR &#8594; a</strong>):
                </p>
              )}
              {selectedVerb.type === 'irregular' && (
                <p>
                  Այս բայն ունի հատուկ անկանոն դրական <strong>tú</strong> ձև (<strong>{selectedVerb.afirmativo.tú}</strong>), որն անհրաժեշտ է անգիր հիշել: Ժխտական <strong>tú</strong> ձևը (<strong>{selectedVerb.negativo.tú}</strong>) հարմարվում է Subjuntivo-ի և ներկայի <strong>yo</strong> ձևին:
                </p>
              )}
              {selectedVerb.type === 'stem-changing' && (
                <p>
                  Այս բայն ունի արմատական ձայնավորի փոփոխություն (<strong>{selectedVerb.change}</strong>): Տեղի է ունենում <strong>tú, usted, ustedes</strong> ձևերում: Ուշադրություն դարձրեք, որ <strong>nosotros</strong> և <strong>vosotros</strong> ձևերը զերծ են մնում արմատի փոփոխությունից:
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
