import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import BaikeView, { BAIKE_KEYWORDS, BAIKE_FAKE_RESULT } from './BaikeView';

// --- Constants & Types ---

const NAVIGATION_LINKS = [
  "新闻", // News
  "网页", // Web (Active)
  "贴吧", // Tieba
  "知道", // Zhidao
  "音乐", // Music
  "图片", // Image
  "视频", // Video
  "地图"  // Map
];

const MORE_LINKS = ["百科", "文库", "hao123", "|", "更多>>"];

interface SearchResultItem {
  title: string;
  snippet: string;
  url: string;
  dateStr: string;
  isSpecial?: boolean; // For triggering Baike view
}

// --- Aero Back Button Component ---
export const AeroBackButton = () => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <a
      href="#"
      onClick={(e) => { 
        e.preventDefault(); 
        window.location.hash = ''; // Return to main Time Archive app
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        position: 'fixed',
        top: '10px',
        left: '10px',
        zIndex: 10000,
        fontFamily: '"Segoe UI", Tahoma, sans-serif',
        fontSize: '12px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#1e395b',
        padding: '5px 12px',
        borderRadius: '3px',
        border: '1px solid #7096c9',
        background: active 
          ? 'linear-gradient(to bottom, #bed6f0 0%, #a0c2e6 49%, #8ab2db 50%, #b3d1f0 100%)'
          : hover 
            ? 'linear-gradient(to bottom, #eaf6fd 0%, #d9f0fc 49%, #bee6fd 50%, #a7d9f5 100%)'
            : 'linear-gradient(to bottom, #f2f7fc 0%, #dbeaf9 49%, #b7d6f6 50%, #dceaf9 100%)',
        boxShadow: active
          ? 'inset 0 1px 3px rgba(0,0,0,0.2)'
          : hover 
            ? 'inset 0 0 0 1px rgba(255,255,255,0.8), 0 1px 2px rgba(0,0,0,0.2), 0 0 3px #66aadd'
            : 'inset 0 0 0 1px rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.1)',
        transition: 'all 0.1s',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      <span style={{ marginRight: '4px', fontSize: '14px', lineHeight: '1' }}>«</span> 
      返回时光档案馆
    </a>
  );
};

// --- API Logic ---

// Initialize GenAI lazily to prevent crash if API key is missing
const getAI = () => {
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  try {
    return new GoogleGenAI({ apiKey });
  } catch (e) {
    console.warn("Failed to initialize GoogleGenAI", e);
    return null;
  }
};

// --- Mock Search Logic ---

const generateMockResults = (query: string): SearchResultItem[] => {
  const results: SearchResultItem[] = [];
  const year = 2012;
  const safeQuery = query.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // 1. Tieba Result
  results.push({
    title: `<em>${safeQuery}</em>吧 - 百度贴吧`,
    snippet: `本吧热帖: 1.【公告】<em>${safeQuery}</em>吧吧规 2. 欢迎来到<em>${safeQuery}</em>吧... 共有主题数万个，贴子数百万篇。`,
    url: `http://tieba.baidu.com/f?kw=${encodeURIComponent(query)}`,
    dateStr: `${year}-10-12`
  });

  // 2. Zhidao Result
  results.push({
    title: `什么是<em>${safeQuery}</em>？_百度知道`,
    snippet: `最佳答案: 关于<strong>${safeQuery}</strong>的问题，其实很简单。在2012年，这个概念主要指的是... 更多关于<em>${safeQuery}</em>的问题>>`,
    url: `http://zhidao.baidu.com/question/${Math.floor(Math.random() * 100000000)}.html`,
    dateStr: `${year}-05-21`
  });

  // 3. News Result
  results.push({
    title: `<em>${safeQuery}</em>最新相关消息 - 新浪新闻`,
    snippet: `2012年最新报道，关于<strong>${safeQuery}</strong>的事件引发了广泛关注。专家表示，<em>${safeQuery}</em>的发展将影响未来的趋势...`,
    url: `http://news.sina.com.cn/c/${year}-${Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0')}-${Math.floor(Math.random() * 28 + 1).toString().padStart(2, '0')}/12345.shtml`,
    dateStr: `${year}-11-03`
  });

  // 4. Download/Software (if applicable, but generic is fine)
  results.push({
    title: `<em>${safeQuery}</em> 2012官方最新版免费下载 - 华军软件园`,
    snippet: `华军软件园为您提供<em>${safeQuery}</em>2012官方下载。<em>${safeQuery}</em>是一款功能强大的工具，全面支持Windows XP/Win7系统...`,
    url: `http://www.onlinedown.net/soft/${Math.floor(Math.random() * 100000)}.htm`,
    dateStr: `${year}-08-15`
  });

  // 5. Blog Result
  results.push({
    title: `我对<em>${safeQuery}</em>的一些看法 - 网易博客`,
    snippet: `今天想和大家聊聊<strong>${safeQuery}</strong>。记得前几年还没有这么火，现在到处都在讨论<em>${safeQuery}</em>...`,
    url: `http://blog.163.com/user_${Math.floor(Math.random() * 10000)}/blog/static/123456/`,
    dateStr: `${year}-02-14`
  });

  return results;
};

// --- Components ---

const BaiduLogo = ({ size = "large" }: { size?: "large" | "small" }) => {
  // Using Wayback Machine links for authentic 2012 logos
  const largeLogo = "https://web.archive.org/web/20121114000000im_/http://www.baidu.com/img/baidu_sylogo1.gif";
  const smallLogo = "https://web.archive.org/web/20121114000000im_/http://www.baidu.com/img/baidu_jgylogo3.gif";

  const style: React.CSSProperties = size === "large" 
    ? { width: '270px', height: '129px', display: 'block', margin: '0 auto' }
    : { width: '137px', height: '46px', display: 'block', marginLeft: '0px' };

  return (
    <img 
      src={size === "large" ? largeLogo : smallLogo} 
      alt="Baidu" 
      style={style} 
    />
  );
};

// --- Top Components ---

const TopNavHome = () => {
  return (
    <div style={{ textAlign: 'right', padding: '19px 10px 0 0', width: '100%', boxSizing: 'border-box', fontFamily: 'arial', fontSize: '13px' }}>
       <a href="#" style={{ margin: '0 5px', textDecoration: 'underline', color: '#0000cc' }}>登录</a>
       <a href="#" style={{ margin: '0 5px', textDecoration: 'underline', color: '#0000cc' }}>注册</a>
       <span style={{ margin: '0 10px 0 10px', fontSize: '12px' }}>|</span>
       <a href="#" style={{ margin: '0 5px', textDecoration: 'underline', color: '#0000cc' }}>百度首页</a>
       <a href="#" style={{ margin: '0 5px', textDecoration: 'underline', color: '#0000cc' }}>把百度设为首页</a>
    </div>
  );
};

const CategoryLinks = ({ isResultPage = false }: { isResultPage?: boolean }) => {
  // Home page categories were centered. Result page categories were left aligned.
  const containerStyle: React.CSSProperties = isResultPage 
    ? { float: 'left', paddingLeft: '5px', lineHeight: '22px', height: '22px' }
    : { textAlign: 'center', marginBottom: '15px', fontSize: '14px', fontWeight: 'bold' };

  const linkStyle: React.CSSProperties = {
    color: '#0000cc',
    textDecoration: 'underline',
    margin: isResultPage ? '0 9px' : '0 10px',
    fontSize: isResultPage ? '13px' : '14px',
    fontWeight: isResultPage ? 'normal' : 'bold'
  };

  const activeStyle: React.CSSProperties = {
    color: '#000',
    fontWeight: 'bold',
    textDecoration: 'none',
    margin: isResultPage ? '0 9px' : '0 10px',
    fontSize: isResultPage ? '13px' : '14px',
    cursor: 'text'
  };

  return (
    <div style={containerStyle} className="clearfix">
      {NAVIGATION_LINKS.map((link) => (
        <a key={link} href="#" style={link === "网页" ? activeStyle : linkStyle}>
          {link}
        </a>
      ))}
      <a href="#" style={linkStyle}>更多&gt;&gt;</a>
    </div>
  );
};

const Footer = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '60px', color: '#666', fontSize: '12px', paddingBottom: '20px', fontFamily: 'arial' }}>
      <p style={{ marginBottom: '6px' }}>
        <a href="#" style={{color: '#0000cc'}}>把百度设为首页</a>
        <a href="#" style={{color: '#0000cc', margin: '0 15px'}}>关于百度</a>
        <a href="#" style={{color: '#0000cc'}}>About Baidu</a>
      </p>
      <p style={{ marginTop: '6px' }}>
        ©2012 Baidu <a href="#" style={{color: '#0000cc', marginLeft: '10px'}}>使用百度前必读</a> <a href="#" style={{color: '#0000cc', marginLeft: '10px'}}>京ICP证030173号</a>
      </p>
    </div>
  );
};

const ResultItem: React.FC<{ item: SearchResultItem, index: number, onSpecialClick: () => void }> = ({ item, index, onSpecialClick }) => {
  return (
    <div style={{ marginBottom: '22px', fontFamily: 'arial', width: '540px', tableLayout: 'fixed', wordWrap: 'break-word' }}>
      <h3 style={{ fontSize: '16px', fontWeight: 'normal', marginBottom: '4px', lineHeight: '1.54' }}>
        <a 
          href={item.isSpecial ? '#' : item.url} 
          onClick={(e) => {
              if (item.isSpecial) {
                  e.preventDefault();
                  onSpecialClick();
              }
          }}
          className="result-link"
          target={item.isSpecial ? undefined : "_blank"} 
          rel="noreferrer"
          style={{ textDecoration: 'underline', cursor: 'pointer', color: '#0000cc' }}
          dangerouslySetInnerHTML={{ __html: item.title }}
        />
      </h3>
      <div 
        style={{ fontSize: '13px', lineHeight: '1.54', color: '#000' }}
        dangerouslySetInnerHTML={{ __html: item.snippet }}
      />
      <div style={{ fontSize: '13px', color: '#008000', marginTop: '2px', lineHeight: '1.54' }}>
        <span style={{ marginRight: '15px' }}>{item.url.length > 55 ? item.url.substring(0, 55) + '...' : item.url}</span>
        <span style={{ color: '#666', marginRight: '10px' }}>{item.dateStr}</span> 
        <a href="#" style={{ color: '#008000', textDecoration: 'underline', marginRight: '10px' }}>百度快照</a>
        {index < 3 && <a href="#" style={{ color: '#666', textDecoration: 'underline' }}>手气不错</a>}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<'home' | 'results' | 'baike'>('home');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [lastQuery, setLastQuery] = useState('');
  
  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setView('results'); 
    setResults([]);
    setLastQuery(query);
    
    // Check triggers for Baike special logic
    const isTrigger = BAIKE_KEYWORDS.some(k => query.includes(k));

    let realResults: SearchResultItem[] = [];
    const ai = getAI();

    if (ai) {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: `Perform a web search for "${query}". Return the top 3 to 5 most relevant results. For each result, provide a title, a short snippet (summary), the URL, and a date string (YYYY-MM-DD).`,
          config: {
            tools: [{ googleSearch: {} }],
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  snippet: { type: Type.STRING },
                  url: { type: Type.STRING },
                  dateStr: { type: Type.STRING }
                },
                required: ["title", "snippet", "url", "dateStr"]
              }
            }
          }
        });

        if (response.text) {
          const parsed = JSON.parse(response.text);
          // Add <em> tags to real results to simulate Baidu's keyword highlighting
          realResults = parsed.map((r: any) => ({
            ...r,
            title: r.title.replace(new RegExp(query, 'gi'), `<em>$&</em>`),
            snippet: r.snippet.replace(new RegExp(query, 'gi'), `<em>$&</em>`),
          }));
        }
      } catch (e) {
        console.warn("Real search failed, falling back to mock generator:", e);
      }
    } else {
      // Simulate network delay if we are only using mock
      await new Promise(resolve => setTimeout(resolve, 600));
    }

    const mockResults = generateMockResults(query);
    let finalResults = [...realResults];

    if (finalResults.length === 0) {
      // If real search returned nothing or failed, use all mock results
      finalResults = mockResults;
    } else {
      // If real search succeeded, append 2 mock results at the bottom to fill the page
      finalResults = [...finalResults, ...mockResults.slice(0, 2)];
    }

    if (isTrigger) {
      finalResults = [BAIKE_FAKE_RESULT, ...finalResults];
    }

    setResults(finalResults);
    setLoading(false);
  };

  const handleLogoClick = () => {
    setView('home');
    setQuery('');
    setResults([]);
  };

  // 2012 Style Search Button with authentic sprite logic
  const SearchButton = ({ size }: { size: 'large' | 'small' }) => {
    const isLarge = size === 'large';
    return (
      <span 
        className={isLarge ? "bg s_btn_wr" : "bg s_btn_wr small_btn"} 
        style={{ 
            width: isLarge ? '95px' : '80px', 
            height: isLarge ? '32px' : '26px', 
            display: 'inline-block',
            verticalAlign: 'top',
            cursor: 'pointer'
        }}
      >
        <input 
            type="submit" 
            value="百度一下" 
            id="su" 
            className={isLarge ? "btn" : "btn btn_h"}
            onMouseDown={(e) => { e.currentTarget.style.backgroundPosition = isLarge ? '-1px -70px' : '-86px -70px'; }}
            onMouseUp={(e) => { e.currentTarget.style.backgroundPosition = ''; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundPosition = ''; }}
            style={{
                width: isLarge ? '95px' : '80px',
                height: isLarge ? '32px' : '26px',
                padding: '0',
                border: '0',
                // Authentic 2012 sprite URL from archive
                background: '#ddd url(https://web.archive.org/web/20120101000000im_/http://www.baidu.com/img/i-1.0.0.png) no-repeat',
                backgroundPosition: isLarge ? '0 -35px' : '-86px -35px',
                fontSize: isLarge ? '15px' : '14px',
                cursor: 'pointer',
                color: '#000',
                fontFamily: 'arial',
            }}
        />
      </span>
    );
  };

  // Dynamic related searches based on current query
  const getRelatedSearches = (q: string) => {
    return [
        q + " 吧",
        q + " 图片",
        q + " 视频",
        q + " 下载",
        q + " 攻略",
        q + " 怎么样",
        "最新 " + q,
        q + " 官网",
        q + " 意思"
    ].slice(0, 9);
  };

  // --- Render Views ---

  if (view === 'baike') {
      return <BaikeView onBack={() => setView('results')} />;
  }

  if (view === 'home') {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 999 }}>
        <AeroBackButton />
        <TopNavHome />
        
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '60px' }}>
          <div style={{ marginBottom: '20px', cursor: 'pointer' }} onClick={handleLogoClick}>
            <BaiduLogo size="large" />
          </div>

          <div style={{ width: '640px', textAlign: 'center' }}>
            <CategoryLinks />
            
            <form onSubmit={handleSearch} style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                maxLength={100}
                style={{
                  width: '458px',
                  height: '22px', // content height
                  padding: '4px 5px',
                  font: '16px arial',
                  border: '1px solid #7b7b7b',
                  borderColor: '#7b7b7b #b6b6b6 #b6b6b6 #7b7b7b', // Inset 3D border
                  background: '#fff',
                  backgroundColor: '#fff', 
                  color: '#000', 
                  verticalAlign: 'top',
                  marginRight: '6px',
                  outline: 'none'
                }}
              />
              <SearchButton size="large" />
            </form>
            
            <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '12px', color: '#333' }}>
                {MORE_LINKS.map((link, i) => (
                    <a key={i} href="#" style={{ margin: '0 10px', color: '#0000cc' }}>{link}</a>
                ))}
            </div>
            
            <div style={{ marginTop: '50px', textAlign: 'center' }}>
                <a href="#" style={{ color: '#0000cc', fontSize: '12px' }}>加入百度推广</a>
                <span style={{ margin: '0 10px', fontSize: '12px', color: '#666' }}>|</span>
                <a href="#" style={{ color: '#0000cc', fontSize: '12px' }}>搜索风云榜</a>
                <span style={{ margin: '0 10px', fontSize: '12px', color: '#666' }}>|</span>
                <a href="#" style={{ color: '#0000cc', fontSize: '12px' }}>关于百度</a>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Results View
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', fontFamily: 'arial', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 999 }}>
      <AeroBackButton />
      {/* Result Header */}
      <div style={{ 
        borderBottom: '1px solid #e0e0e0', 
        padding: '12px 10px 5px 10px', 
        background: '#fbfbfb',
        minHeight: '70px',
        position: 'relative'
      }}>
        <div style={{ float: 'left', width: '137px', marginRight: '16px', cursor: 'pointer' }} onClick={handleLogoClick}>
          <BaiduLogo size="small" />
        </div>
        
        <div style={{ float: 'left', width: '600px' }}>
            <div style={{ marginBottom: '8px', paddingLeft: '0' }}>
                <CategoryLinks isResultPage={true} />
            </div>
            <div className="clearfix" style={{ clear: 'both' }}>
                <form onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{
                            width: '410px',
                            height: '20px',
                            padding: '2px 5px',
                            font: '16px arial',
                            border: '1px solid #7b7b7b',
                            borderColor: '#7b7b7b #b6b6b6 #b6b6b6 #7b7b7b',
                            background: '#fff',
                            backgroundColor: '#fff',
                            color: '#000',
                            marginRight: '6px',
                            verticalAlign: 'top',
                            outline: 'none'
                        }}
                    />
                    <SearchButton size="small" />
                </form>
            </div>
        </div>
        <div style={{ position: 'absolute', right: '10px', top: '10px', fontSize: '13px', paddingTop: '0' }}>
            <a href="#" style={{ color: '#0000cc', marginRight: '15px' }}>百度首页</a>
            <a href="#" style={{ color: '#0000cc', marginRight: '15px' }}>登录</a>
            <a href="#" style={{ color: '#0000cc' }}>注册</a>
        </div>
        <div className="clearfix"></div>
      </div>

      {/* Main Content Area */}
      <div style={{ display: 'flex', marginTop: '25px', paddingLeft: '145px', minWidth: '960px' }}>
        {/* Left Column (Results) */}
        <div style={{ width: '540px', paddingRight: '50px' }}>
          {/* Status Bar */}
          <div style={{ color: '#999', fontSize: '12px', marginBottom: '15px' }}>
            {results.length > 0 
                ? `百度为您找到相关结果约 ${results.length * 1000 + 500} 个` 
                : loading ? `正在搜索 "${query}"...` : null}
          </div>
          
          {/* No results state (only after loading is done) */}
          {!loading && results.length === 0 && (
             <div style={{ padding: '20px', background: '#f5f5f5', border: '1px solid #e3e3e3', fontSize: '13px' }}>
                抱歉，没有找到与 "{lastQuery}" 相关的网页。
                <br/><br/>
                建议：<br/>
                1. 尝试更通用的关键词。<br/>
                2. 换一个关键词试试。
             </div>
          )}

          {results.map((item, i) => (
              <ResultItem 
                key={i} 
                item={item} 
                index={i} 
                onSpecialClick={() => setView('baike')}
              />
          ))}

          {/* Pagination */}
          {!loading && results.length > 0 && (
             <div style={{ marginTop: '40px', marginBottom: '60px', fontSize: '14px', fontFamily: 'arial' }}>
                <span style={{ fontWeight: 'bold', marginRight: '15px' }}>1</span>
                {[2,3,4,5,6,7,8,9,10].map(n => (
                    <a key={n} href="#" style={{ marginRight: '15px', color: '#0000cc', border: '1px solid #e1e2e3', padding: '3px 8px' }}>{n}</a>
                ))}
                <a href="#" style={{ color: '#0000cc' }}>下一页 &gt;</a>
             </div>
          )}
        </div>

        {/* Right Column */}
        <div style={{ width: '280px', borderLeft: '1px solid #e1e1e1', paddingLeft: '15px' }}>
            <div style={{ fontSize: '13px', marginBottom: '10px', fontWeight: 'bold' }}>相关搜索</div>
            <table style={{ fontSize: '13px', width: '100%', marginBottom: '20px' }}>
                <tbody>
                    {getRelatedSearches(lastQuery || query).map((text, i) => (
                        <tr key={i}>
                            <td style={{ padding: '3px 0' }}>
                                <a href="#" style={{ color: '#0000cc' }}>{text}</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <div style={{ background: '#fcfcfc', border: '1px solid #f0f0f0', padding: '10px' }}>
                 <div style={{ color: '#666', fontSize: '12px', textAlign: 'right' }}>推广链接</div>
                 <div style={{ marginTop: '5px' }}>
                    <a href="#" style={{ color: '#0000cc', fontSize: '13px', textDecoration: 'underline' }}>{lastQuery || "搜索"} - 百度推广</a>
                    <div style={{ fontSize: '12px', color: '#666' }}>想让您的网站出现在这里吗？...</div>
                 </div>
                 <div style={{ marginTop: '15px' }}>
                    <a href="#" style={{ color: '#0000cc', fontSize: '13px', textDecoration: 'underline' }}>品牌推广首选</a>
                    <div style={{ fontSize: '12px', color: '#666' }}>全方位覆盖您的目标客户...</div>
                 </div>
            </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: '12px', color: '#666', padding: '20px 0', borderTop: '1px solid #ddd' }}>
        ©2012 Baidu <a href="#" style={{color: '#0000cc'}}>使用百度前必读</a> <a href="#" style={{color: '#0000cc'}}>京ICP证030173号</a>
      </div>
    </div>
  );
}