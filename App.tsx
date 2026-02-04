
import React, { useState } from 'react';
import { Artist } from './types';
import { ARTISTS } from './constants';
import ArtistCard from './components/ArtistCard';
import DashboardHeader from './components/DashboardHeader';
import NewsInsights from './components/NewsInsights';
import Community from './components/Community';
import AIAnalyst from './components/AIAnalyst';
import { Newspaper, Users, BrainCircuit } from 'lucide-react';

enum Tab {
  NEWS = 'news',
  COMMUNITY = 'community',
  AI_ANALYST = 'ai_analyst'
}

const App: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>(Tab.NEWS);

  if (selectedArtist) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-orange-500/30">
        <DashboardHeader 
          artist={selectedArtist} 
          onBack={() => setSelectedArtist(null)} 
        />
        
        <main className="max-w-6xl mx-auto px-4 pt-6">
          {/* Custom Tabs */}
          <div className="flex p-1 bg-zinc-900 rounded-xl mb-8 sticky top-20 z-40 border border-zinc-800">
            <button 
              onClick={() => setActiveTab(Tab.NEWS)}
              className={`flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === Tab.NEWS ? 'bg-zinc-800 text-orange-500 shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Newspaper size={18} />
              <span>뉴스 & 인사이트</span>
            </button>
            <button 
              onClick={() => setActiveTab(Tab.COMMUNITY)}
              className={`flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === Tab.COMMUNITY ? 'bg-zinc-800 text-orange-500 shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Users size={18} />
              <span>커뮤니티</span>
            </button>
            <button 
              onClick={() => setActiveTab(Tab.AI_ANALYST)}
              className={`flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === Tab.AI_ANALYST ? 'bg-zinc-800 text-orange-500 shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <BrainCircuit size={18} />
              <span>AI 분석가</span>
            </button>
          </div>

          <div className="transition-all duration-300 ease-in-out">
            {activeTab === Tab.NEWS && <NewsInsights />}
            {activeTab === Tab.COMMUNITY && <Community />}
            {activeTab === Tab.AI_ANALYST && <AIAnalyst />}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <header className="py-12 px-4 text-center">
        <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-500 text-xs font-bold uppercase tracking-widest mb-6">
          프리미엄 아티스트 포털
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
          KQ 팬덤 허브
        </h1>
        <p className="text-zinc-500 max-w-lg mx-auto text-lg">
          KQ 엔터테인먼트 소속 아티스트의 최신 뉴스, 팬 커뮤니티, 그리고 AI 기반의 전문 분석을 한곳에서 만나보세요.
        </p>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 pb-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTISTS.map(artist => (
            <ArtistCard 
              key={artist.id} 
              artist={artist} 
              onClick={() => setSelectedArtist(artist)} 
            />
          ))}
        </div>

        <section className="mt-20 border-t border-zinc-900 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Newspaper className="text-orange-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">심층 인사이트</h3>
              <p className="text-zinc-500 text-sm">엄선된 산업 뉴스보와 데이터 시각화를 통해 깊이 있는 정보를 제공합니다.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Users className="text-blue-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">팬 커뮤니티</h3>
              <p className="text-zinc-500 text-sm">전 세계 에이티니 및 싸이커스 팬들과 실시간으로 소통하세요.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4 mx-auto md:mx-0">
                <BrainCircuit className="text-purple-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">AI 분석 시스템</h3>
              <p className="text-zinc-500 text-sm">K-Pop 전략과 시장 성장에 대해 무엇이든 산업 전문가 AI에게 물어보세요.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-zinc-900 bg-zinc-950 text-center text-zinc-700 text-xs">
        &copy; 2024 KQ FANDOM HUB. 본 플랫폼은 프로토타입입니다.
      </footer>
    </div>
  );
};

export default App;
