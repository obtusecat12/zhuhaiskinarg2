import React, { useState } from 'react';

// --- Baike Data ---
export const BAIKE_KEYWORDS = ["珠海", "412", "刘铮铮", "刘欣悦", "蒋阳宏", "剥皮", "海天大厦"];

export const BAIKE_FAKE_RESULT = {
  title: "<b>4·12海天大厦事件</b>_百度百科",
  snippet: "<b>4·12海天大厦事件</b>（4·12 Haitian Building Incident），指2001年4月发生于广东省珠海市的一起特大恶性刑事案件。该案件涉及宏大建设集团...",
  url: "http://baike.baidu.com/view/412.htm",
  dateStr: "2009-08-14",
  isSpecial: true
};

const BAIKE_ARTICLE = {
  title: "4·12海天大厦事件",
  summary: "4·12海天大厦事件（4·12 Haitian Building Incident），指2001年4月发生于广东省珠海市的一起特大恶性刑事案件。该案件涉及宏大建设集团前董事长蒋某及其养女刘某两名死者。因案发现场情况特殊、死者尸体呈现出反常理的损伤特征，且案件至今仍未有明确结论，故在当地及网络上引发了长期的讨论与衍生流言。此案件在民间常被称为“珠海剥皮案”或“海天大厦水泥案”，但官方档案中一般统称为“4·12专案”。",
  basicInfo: [
    { name: "中文名", value: "4·12海天大厦事件" },
    { name: "外文名", value: "4·12 Haitian Building Incident" },
    { name: "别名", value: "珠海剥皮案" },
    { name: "时间", value: "2001年4月12日" },
    { name: "地点", value: "广东省珠海市" },
    { name: "结果", value: "案件挂起" },
    { name: "死者", value: "蒋某、刘某" },
  ],
  sections: [
    {
      id: 1,
      title: "事件背景",
      content: `海天大厦位于珠海市情侣路沿线，原计划为宏大建设集团投资建设的高端商业综合体。1996年7月，该工地曾发生一起施工事故，导致一名刘姓架子工坠入桩井身亡（一说失踪），导致工程停摆。此后该建筑长期处于烂尾状态，被称为“特区伤疤”。<br/><br/>死者蒋某（男，48岁），系宏大建设集团原实际控制人，案发前居住于听涛雅苑。另一死者刘某（女，22岁），系蒋某养女，案发前已失踪多日。`
    },
    {
      id: 2,
      title: "案件经过",
      content: `2001年4月12日凌晨，蒋某的私人厨师刘某东在进入蒋某书房服务时，发现蒋某在座椅上已无生命体征，随即产生剧烈应激反应并报警。<br/><br/>警方接警后迅速封锁现场。据早期流出的非官方信源称，报案人刘某东在现场目击了极度反常规的景象，声称死者“仍在活动”且“正在饮茶”，但该说法后被警方定性为目击者在极度惊恐下产生的解离性幻觉。<br/><br/>三日后，警方在对海天大厦烂尾楼地下室进行排查时，发现了第二名死者刘某的遗体。`
    },
    {
      id: 3,
      title: "现场勘查与尸检",
      content: `关于本案的尸检报告，至今未有详细公开版本，仅有部分碎片化信息流传：<br/><br/><b>蒋某遗体：</b>死者被发现时全身表皮组织大面积缺失，创面边缘整齐，无明显生活反应，未发现致死性外伤或中毒迹象。现场（书房）未发现喷溅血迹，亦未寻获缺失的皮肤组织。坊间传闻的“自行蜕皮”说法缺乏生物学依据。<br/><br/><b>刘某遗体：</b>在海天大厦地下室积水中被发现。尸体腹腔及胸腔内脏器缺失，填充有大量直径约5-8厘米的球状硬化物（成分疑似高标号水泥）。体表皮肤出现严重的角质化与纤维化病变，呈现出类似粗糙织物的质感。死者身着一件与其体型严重不符的男式工装。`
    },
    {
      id: 4,
      title: "后续调查",
      content: `案发后，第一目击者刘某东因精神状态异常，被送往珠海市红旗医院接受强制治疗。诊断结果为重度解离性漫游症 (Dissociative Fugue)。其关于案发现场的证词被认为不具备法律效力。<br/><br/>针对海天大厦地下室的监控录像显示，死者刘某系独自一人进入地下室，期间未有他人跟随或离开，现场亦未提取到第三人的生物检材。<br/><br/>鉴于案件缺乏关键性物证及嫌疑人，且死因超出常规法医学范畴，该案目前处于挂起（Suspended）状态。`
    },
    {
      id: 5,
      title: "社会影响",
      content: `本案发生后，在“天涯社区”、“金山论坛”等网络社区引发了关于“都市传说”的讨论热潮。部分网民将1996年的工程事故（刘铮铮坠井案）与本案联系起来，衍生出了“水泥鬼”、“活体剥皮”、“借皮还魂”等迷信说法。<br/><br/>相关部门多次辟谣，强调应相信科学，不信谣不传谣。所谓的“剥皮人”多为网民对尸体非正常腐败现象的误读与艺术加工。`
    }
  ]
};

// --- Icons (SVG replacements for Emojis) ---

const IconEdit = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 2L14 5L5 14H2V11L11 2Z" stroke="#2d78f4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconStar = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L10 6H15L11 9L12 14L8 11L4 14L5 9L1 6H6L8 1Z" stroke="#888" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const IconShare = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8H12M12 8L9 5M12 8L9 11" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 13V3" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// --- Aero Back Button (Duplicated for simplicity to avoid circular deps with index.tsx if structured improperly, 
// though logically could be a shared component. Keeping it here ensures BaikeView is self-contained) ---
const AeroBackButton = () => {
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

// --- Components ---

const BaikeSearchHeader = ({ onBack }: { onBack: () => void }) => {
    // 2012 Baike Logo but we need to fit it into the search header style
    const baikeLogo = "https://web.archive.org/web/20120608000000im_/http://img.baidu.com/img/logo-bk.gif"; 

    return (
        <div style={{ 
            borderBottom: '1px solid #e0e0e0', 
            background: '#fbfbfb',
            minHeight: '70px',
            width: '100%',
            fontFamily: 'arial, sans-serif' // Keep header Arial to match Search Interface exactly
        }}>
            {/* Centered Wrapper for Header Content to align with Body */}
            <div style={{ width: '980px', margin: '0 auto', position: 'relative', paddingTop: '12px', paddingBottom: '5px' }}>
                
                {/* Logo Section */}
                <div style={{ float: 'left', width: '137px', marginRight: '16px', cursor: 'pointer', textAlign: 'center' }} onClick={onBack}>
                    <img src={baikeLogo} alt="Baidu Baike" style={{ height: '46px', maxWidth: '145px', objectFit: 'contain' }} />
                </div>

                {/* Search Content Section */}
                <div style={{ float: 'left', width: '600px' }}>
                    <div style={{ marginBottom: '8px', paddingLeft: '5px', lineHeight: '22px', height: '22px' }}>
                        {/* Navigation Links matched to search interface */}
                        <div style={{ float: 'left', paddingLeft: '5px' }}>
                            {["新闻", "网页", "贴吧", "知道", "音乐", "图片", "视频", "地图"].map(link => (
                                <a key={link} href="#" style={{ color: '#0000cc', textDecoration: 'underline', margin: '0 9px', fontSize: '13px' }}>{link}</a>
                            ))}
                            <span style={{ fontWeight: 'bold', margin: '0 9px', fontSize: '13px' }}>百科</span>
                            <a href="#" style={{ color: '#0000cc', textDecoration: 'underline', margin: '0 9px', fontSize: '13px' }}>更多&gt;&gt;</a>
                        </div>
                    </div>
                    <div style={{ clear: 'both' }}>
                        <form onSubmit={(e) => { e.preventDefault(); onBack(); }}>
                            <input 
                                type="text" 
                                defaultValue="4·12海天大厦事件"
                                style={{
                                    width: '410px',
                                    height: '20px',
                                    padding: '2px 5px',
                                    font: '16px arial',
                                    border: '1px solid #7b7b7b',
                                    borderColor: '#7b7b7b #b6b6b6 #b6b6b6 #7b7b7b',
                                    background: '#fff',
                                    marginRight: '6px',
                                    verticalAlign: 'top',
                                    outline: 'none'
                                }}
                            />
                            <span 
                                className="bg s_btn_wr small_btn" 
                                style={{ 
                                    width: '80px', 
                                    height: '26px', 
                                    display: 'inline-block',
                                    verticalAlign: 'top',
                                    cursor: 'pointer'
                                }}
                            >
                                <input 
                                    type="submit" 
                                    value="进入词条" 
                                    style={{
                                        width: '80px',
                                        height: '26px',
                                        padding: '0',
                                        border: '0',
                                        background: '#ddd url(https://web.archive.org/web/20120101000000im_/http://www.baidu.com/img/i-1.0.0.png) no-repeat -86px -35px',
                                        fontSize: '14px',
                                        cursor: 'pointer',
                                        color: '#000',
                                        fontFamily: 'arial'
                                    }}
                                />
                            </span>
                        </form>
                    </div>
                </div>

                {/* Top Right Links */}
                <div style={{ position: 'absolute', right: '0', top: '12px', fontSize: '13px' }}>
                    <a href="#" style={{ color: '#0000cc', marginRight: '15px' }}>百度首页</a>
                    <a href="#" style={{ color: '#0000cc', marginRight: '15px' }}>登录</a>
                    <a href="#" style={{ color: '#0000cc' }}>注册</a>
                </div>
                
                {/* Proper Clearfix using inline style to ensure it works without external classes */}
                <div style={{ clear: 'both' }}></div>
            </div>
        </div>
    );
};

// --- Aero Style Components ---

const InfoBox = () => {
    // 2012 Baike InfoBox Style (Floating Right, Green/Blue headers)
    return (
        <div style={{
            float: 'right',
            width: '268px',
            border: '1px solid #cce1ff',
            background: '#fff',
            margin: '0 0 20px 20px',
            padding: '1px',
            fontSize: '12px'
        }}>
            {/* Image Placeholder */}
            <div style={{ padding: '4px', borderBottom: '1px solid #e0e0e0', textAlign: 'center' }}>
                <div style={{ 
                    width: '258px', 
                    height: '190px', 
                    background: '#f0f0f0', 
                    border: '1px solid #ddd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ccc',
                    fontSize: '10px'
                }}>
                    暂无图片
                </div>
                <div style={{ padding: '6px 0 2px', color: '#666' }}>
                    案发地点：珠海海天大厦
                </div>
            </div>

            {/* Basic Info Header - Green Aero Style */}
            <div style={{
                height: '28px',
                lineHeight: '28px',
                background: '#f3f8fe', // Light blue gradient substitute
                borderTop: '1px solid #fff',
                borderBottom: '1px solid #cce1ff',
                color: '#333',
                fontWeight: 'bold',
                paddingLeft: '10px',
                position: 'relative'
            }}>
                <span style={{ 
                    display: 'inline-block', 
                    width: '3px', 
                    height: '12px', 
                    background: '#55c880', // The classic green accent
                    marginRight: '6px',
                    verticalAlign: 'middle',
                    marginTop: '-2px'
                }}></span>
                基本信息
            </div>

            {/* Info Table */}
            <div style={{ padding: '5px', background: '#fff' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                    <tbody>
                        {BAIKE_ARTICLE.basicInfo.map((info, i) => (
                            <tr key={i}>
                                <td style={{ 
                                    width: '70px', 
                                    color: '#999', 
                                    fontWeight: 'bold', 
                                    padding: '4px 0 4px 5px',
                                    verticalAlign: 'top',
                                    lineHeight: '18px'
                                }}>
                                    {info.name.split('').join('\u3000') /* Justify workaround */}
                                </td>
                                <td style={{ 
                                    color: '#333', 
                                    padding: '4px 0',
                                    lineHeight: '18px'
                                }}>
                                    {info.value}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const SectionHeader = ({ title }: { title: string }) => (
    <div style={{ 
        borderBottom: '2px solid #ccc', // Thicker bottom border
        paddingBottom: '5px', 
        marginBottom: '15px',
        marginTop: '25px',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end'
    }}>
        <h2 style={{ 
            fontSize: '20px', 
            fontWeight: 'normal', 
            fontFamily: '"SimSun", "宋体", serif', 
            margin: 0,
            lineHeight: '1'
        }}>
            {title}
        </h2>
        <a href="#" style={{ 
            marginLeft: '15px', 
            fontSize: '12px', 
            color: '#2d78f4', 
            textDecoration: 'none',
            marginBottom: '2px'
        }}>
            <span style={{ fontSize: '10px', marginRight: '3px' }}>✎</span>编辑
        </a>
    </div>
);

const BaikeView = ({ onBack }: { onBack: () => void }) => {
  // Use SimSun font and disable smoothing to mimic non-aliased XP/2012 rendering
  const fontStyle = {
      fontFamily: '"SimSun", "宋体", serif',
      WebkitFontSmoothing: 'none',
      MozOsxFontSmoothing: 'grayscale',
  };

  return (
    <div style={{ backgroundColor: '#fff', color: '#333', fontSize: '12px', minHeight: '100vh', width: '100%', ...fontStyle }}>
        <AeroBackButton />
        
        {/* 1. Header (Matched to Search Interface) */}
        <BaikeSearchHeader onBack={onBack} />

        {/* 2. Navigation Bar (Gradient Aero Blue) */}
        <div style={{ 
            width: '100%', 
            // 2012 Style Gradient
            background: 'linear-gradient(to bottom, #4a91d9 0%, #2570be 100%)',
            height: '34px', 
            lineHeight: '34px', 
            minWidth: '980px',
            borderTop: '1px solid #1f64ad',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}>
             <div style={{ width: '980px', margin: '0 auto', fontSize: '14px', fontWeight: 'bold', color: '#fff' }}>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 18px', display: 'inline-block', background: '#195cb3' }}>首页</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 18px', textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}>自然</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 18px', textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}>文化</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 18px', textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}>地理</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 18px', textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}>历史</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 18px', textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}>生活</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 18px', textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}>社会</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 18px', textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}>艺术</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 18px', textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}>人物</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 18px', textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}>经济</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 18px', textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}>科技</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 18px', textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}>体育</a>
             </div>
        </div>

        {/* 3. Main Container */}
        <div style={{ width: '980px', margin: '0 auto', paddingTop: '15px', position: 'relative' }}>
            {/* Clearfix for main container */}
            <div style={{ clear: 'both' }}>
            
                {/* Left Main Content (approx 740px) */}
                <div style={{ float: 'left', width: '710px', paddingRight: '20px', minHeight: '600px' }}>
                    
                    {/* Title Section */}
                    <div style={{ marginBottom: '20px', position: 'relative' }}>
                        <h1 style={{ 
                            fontSize: '34px', 
                            lineHeight: '34px',
                            fontWeight: 'normal', 
                            fontFamily: '"SimSun", "宋体", serif', 
                            color: '#333',
                            display: 'inline-block',
                            marginRight: '10px'
                        }}>
                            {BAIKE_ARTICLE.title}
                        </h1>
                        
                        <a href="#" style={{ 
                            display: 'inline-block', 
                            verticalAlign: 'text-bottom',
                            fontSize: '12px',
                            color: '#2d78f4',
                            background: '#f1f5fa',
                            border: '1px solid #d4e3f3',
                            padding: '0 8px',
                            height: '22px',
                            lineHeight: '22px',
                            borderRadius: '2px',
                            textDecoration: 'none'
                        }}>
                            <span style={{ marginRight: '3px', verticalAlign: '-1px' }}><IconEdit/></span>
                            <span style={{ verticalAlign: '1px' }}>编辑</span>
                        </a>

                        <div style={{ float: 'right', marginTop: '10px', color: '#666', fontSize: '12px' }}>
                            <span style={{ marginRight: '15px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
                                <span style={{marginRight: '3px'}}><IconStar/></span> 收藏
                            </span>
                            <span style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
                                <span style={{marginRight: '3px'}}><IconShare/></span> 分享
                            </span>
                        </div>
                    </div>

                    {/* Content Body */}
                    <div style={{ fontSize: '14px', lineHeight: '24px', color: '#333', position: 'relative' }}>
                        
                        {/* Floating Info Box (Inside content flow) */}
                        <InfoBox />

                        {/* Summary Text */}
                        <div style={{ marginBottom: '25px', textIndent: '2em' }} dangerouslySetInnerHTML={{ __html: BAIKE_ARTICLE.summary }} />

                        {/* Catalog */}
                        <div style={{ 
                            background: '#fafafa', 
                            border: '1px solid #e6e6e6', 
                            padding: '12px 20px', 
                            marginBottom: '30px',
                            clear: 'both' // Ensure it sits below the floated info box if summary is short
                        }}>
                            <div style={{ 
                                fontSize: '16px', 
                                fontWeight: 'bold', 
                                marginBottom: '10px', 
                                position: 'relative',
                                textAlign: 'center'
                            }}>
                                <span style={{ background: '#fafafa', padding: '0 10px', position: 'relative', zIndex: 1 }}>目录</span>
                                <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', borderTop: '1px solid #ddd', zIndex: 0 }}></div>
                            </div>
                            <div style={{ columns: 2, columnGap: '40px' }}>
                                {BAIKE_ARTICLE.sections.map(s => (
                                    <div key={s.id} style={{ marginBottom: '6px', fontSize: '12px' }}>
                                        <span style={{ color: '#333', fontWeight: 'bold', marginRight: '5px' }}>{s.id}</span>
                                        <a href={`#section-${s.id}`} style={{ color: '#136ec2', textDecoration: 'none' }}>
                                            {s.title}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sections */}
                        {BAIKE_ARTICLE.sections.map(s => (
                            <div key={s.id} id={`section-${s.id}`}>
                                <SectionHeader title={s.title} />
                                <div style={{ fontSize: '14px', lineHeight: '1.8', textIndent: '2em', marginBottom: '10px' }} dangerouslySetInnerHTML={{ __html: s.content }} />
                            </div>
                        ))}
                        
                        {/* References */}
                        <div style={{ marginTop: '50px', background: '#f8f8f8', padding: '20px', border: '1px solid #eee' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>参考资料</div>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '12px', color: '#666', lineHeight: '20px' }}>
                                <li style={{ marginBottom: '5px' }}>1.&nbsp;&nbsp;<a href="#" style={{ color: '#136ec2' }}>珠海特区报历史档案 - 2001.04．珠海新闻网 [引用日期2009-08-14]</a></li>
                                <li style={{ marginBottom: '5px' }}>2.&nbsp;&nbsp;<a href="#" style={{ color: '#136ec2' }}>南方都市报：烂尾楼的阴影．南都网 [引用日期2009-08-14]</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Right Sidebar (240px) */}
                <div style={{ float: 'right', width: '240px' }}>
                    
                    {/* Ad / Promo Block */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ width: '240px', height: '200px', background: '#f5f5f5', border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
                            百度推广位
                        </div>
                    </div>

                    {/* Stats */}
                    <div style={{ border: '1px solid #e6e6e6', background: '#fafafa', padding: '10px', marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: 'bold', borderBottom: '1px solid #ddd', paddingBottom: '5px', marginBottom: '10px' }}>词条统计</h3>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '12px', color: '#666', lineHeight: '22px' }}>
                            <li>浏览次数：120492次</li>
                            <li>编辑次数：15次 <a href="#" style={{ color: '#136ec2' }}>历史版本</a></li>
                            <li>最近更新：2009-08-14</li>
                            <li>创建者：<a href="#" style={{ color: '#136ec2' }}>雪山飞狐99</a></li>
                        </ul>
                    </div>

                    {/* Contribution */}
                    <div style={{ border: '1px solid #e6e6e6', background: '#fafafa', padding: '10px' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: 'bold', borderBottom: '1px solid #ddd', paddingBottom: '5px', marginBottom: '10px' }}>贡献光荣榜</h3>
                        <div style={{ fontSize: '12px', color: '#666' }}>
                            <span style={{ display: 'inline-block', marginRight: '10px', color: '#136ec2' }}>追风少年</span>
                            <span style={{ display: 'inline-block', marginRight: '10px', color: '#136ec2' }}>Summer_2008</span>
                            <div style={{ marginTop: '5px' }}><span style={{ display: 'inline-block', marginRight: '10px', color: '#136ec2' }}>王建国</span></div>
                        </div>
                    </div>

                </div>
            
            </div>
            {/* End of clearfix div */}
            
            <div className="clearfix" style={{ clear: 'both' }}></div>
        </div>
        
        {/* Footer */}
        <div style={{ textAlign: 'center', fontSize: '12px', color: '#666', padding: '30px 0', marginTop: '50px', borderTop: '1px solid #eee', background: '#fbfbfb' }}>
            ©2012 Baidu <a href="#" style={{color: '#333', margin: '0 5px'}}>权利声明</a>
        </div>

    </div>
  );
};

export default BaikeView;