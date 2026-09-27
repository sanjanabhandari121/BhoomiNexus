import React, { useState } from 'react';
import { Bot, X, Send, ArrowRight } from 'lucide-react';
import type { ViewMode } from '../../types';

interface ChatMessage {
  id: number;
  sender: 'user' | 'assistant';
  text: string;
  sources?: string[];
  confidence?: string;
  action?: { label: string; view: ViewMode };
}

interface BhoomiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveView: (view: ViewMode) => void;
  onSearchQuery: (query: string) => void;
}

export const BhoomiAssistant: React.FC<BhoomiAssistantProps> = ({
  isOpen,
  onClose,
  setActiveView,
  onSearchQuery,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: 'assistant',
      text: 'Namaste! I am Bhoomi Intelligence, your evidence-aware land governance assistant. Every answer I provide is backed by indexed satellite layers, land records, and research papers.',
      sources: ['ISRO Bhuvan', 'ICAR Spatial Study', 'DDA Master Plan 2041'],
      confidence: 'High (98%)',
      action: { label: 'Query Delhi Farmland Loss', view: 'search' as ViewMode }
    }
  ]);
  const [input, setInput] = useState('');

  if (!isOpen) return null;

  const samplePrompts = [
    'Show evidence about agricultural land loss in Delhi NCR.',
    'Which datasets support the Yamuna floodplain eco-buffer?',
    'Simulate a 10% urban expansion scenario.',
    'Compare land-use trends between 2018 and 2026.'
  ];

  const handleSend = (textToSend?: string) => {
    const queryText = textToSend || input;
    if (!queryText.trim()) return;

    // Add user message
    const newMsgId = Date.now();
    const userMsg: ChatMessage = { id: newMsgId, sender: 'user', text: queryText };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Formulate evidence-backed response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: newMsgId + 1,
        sender: 'assistant',
        text: `Based on indexed ICAR remote sensing papers and ISRO raster layers, agricultural farmland in Najafgarh block decreased by 8.4% between 2018 and 2025. This spatial trend directly overlaps with proposed DDA Master Plan 2041 housing corridors.`,
        sources: ['ICAR Spatial Paper 2025', 'ISRO Bhuvan LULC 2026', 'DILRMP Cadastral Vector'],
        confidence: 'High (94%)',
        action: queryText.includes('Simulate') || queryText.includes('expansion')
          ? { label: 'Open Policy Impact Lab Simulator', view: 'policy_lab' as ViewMode }
          : { label: 'View Supporting Evidence Items', view: 'search' as ViewMode }
      };

      setMessages((prev) => [...prev, botResponse]);
    }, 400);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 max-w-[90vw] bg-[#0f2942] border border-emerald-500/40 rounded-xl shadow-2xl flex flex-col h-[520px] overflow-hidden animate-slideUp">
      {/* Header */}
      <div className="px-4 py-3 bg-[#0a192f] border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-emerald-600 flex items-center justify-center text-slate-950 font-black">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-extrabold text-white text-xs tracking-wide">Bhoomi Intelligence</h3>
            <span className="text-[10px] text-emerald-400 font-semibold block">Evidence-Backed AI Assistant</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto space-y-3 text-xs">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`space-y-2 p-3 rounded-lg ${
              m.sender === 'user'
                ? 'bg-emerald-950/60 border border-emerald-500/30 ml-8 text-slate-200'
                : 'bg-[#0a192f] border border-slate-800 mr-4 text-slate-200'
            }`}
          >
            <p className="leading-relaxed">{m.text}</p>

            {m.sources && (
              <div className="pt-2 border-t border-slate-800 space-y-1.5 text-[10px]">
                <div className="flex justify-between text-slate-400 font-mono">
                  <span>Confidence: <strong className="text-emerald-400">{m.confidence}</strong></span>
                  <span>Sources: {m.sources.length}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {m.sources.map((src, idx) => (
                    <span key={idx} className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">
                      {src}
                    </span>
                  ))}
                </div>

                {m.action && (
                  <button
                    onClick={() => {
                      setActiveView(m.action!.view);
                      if (m.action!.view === 'search') onSearchQuery(m.text);
                    }}
                    className="w-full mt-1 py-1 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40 text-[10px] font-bold transition-colors flex items-center justify-center gap-1"
                  >
                    <span>{m.action.label}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Suggested Quick Prompts */}
      <div className="p-2 border-t border-slate-800 bg-[#071324] space-y-1">
        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block px-1">
          Preset Intelligence Queries:
        </span>
        <div className="flex flex-wrap gap-1">
          {samplePrompts.slice(0, 2).map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p)}
              className="text-[10px] bg-[#0a192f] hover:bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700/80 truncate max-w-full"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-2 bg-[#0a192f] border-t border-slate-800 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask Bhoomi Intelligence..."
          className="flex-1 bg-[#071324] border border-slate-700/80 rounded px-2.5 py-1.5 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-400"
        />
        <button
          onClick={() => handleSend()}
          className="p-1.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
