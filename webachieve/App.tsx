import React, { useState, useEffect } from 'react';
import TopNav from './components/TopNav';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Features from './components/Features';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import CalendarView from './components/CalendarView';
import GoogleAd2016 from './components/GoogleAd2016';
import BottomStickyAd from './components/BottomStickyAd';
import HotSystems from './components/HotSystems';
import Login from './components/Login';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [params, setParams] = useState<any>({});
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [ArchiveApp, setArchiveApp] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    // 修复：如果用户刷新页面或重新打开且 URL 带有 #404，强制清除 Hash 返回首页
    if (window.location.hash === '#404') {
      try {
        window.history.replaceState(null, '', window.location.href.split('#')[0]);
      } catch (e) {
        console.warn('History replaceState failed, falling back to hash assignment', e);
        window.location.hash = '';
      }
    }

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#404') {
        setCurrentRoute('404');
      } else if (hash === '#login') {
        setCurrentRoute('login');
      } else if (hash.startsWith('#calendar/')) {
        setCurrentRoute('calendar');
        setParams({ url: hash.replace('#calendar/', '') });
      } else if (hash === '#hot-systems') {
        setCurrentRoute('hot-systems');
      } else if (hash.startsWith('#playback/')) {
        // Extract everything after #playback/ as the route
        setCurrentRoute(hash.substring(1));
      } else {
        setCurrentRoute('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Dynamically load Archive App when needed
  useEffect(() => {
    if (currentRoute.startsWith('playback/')) {
      const loadArchive = async () => {
        try {
          // Extract the part after 'playback/'
          const archivePath = currentRoute.substring('playback/'.length);
          
          let module;
          
          // Decode URL components (e.g., %2F to /)
          const decodedPath = decodeURIComponent(archivePath);
          
          // Map domain names or IDs to the correct module, stripping query params or hashes
          const cleanName = decodedPath.split('?')[0].split('#')[0];
          const normalizedName = cleanName.replace(/^https?:\/\//, '').replace(/^www\./, '').toLowerCase().trim().replace(/\/$/, '');
          
          if (normalizedName === 'baidu' || normalizedName === 'baidu.com') {
            module = await import('./components/BaiduSearch/index');
          } else if (normalizedName === 'geocities_1998' || normalizedName === 'geocities.com/area51') {
            module = await import('./components/Archives/GeoCities1998');
          } else if (normalizedName === 'ebuy_2000' || normalizedName === 'ebuy.com') {
            module = await import('./components/Archives/Ebuy2000');
          } else if (normalizedName === 'flash_splash_2001' || normalizedName === 'matrixdesigns.net') {
            module = await import('./components/Archives/FlashSplash2001');
          } else if (normalizedName === 'portal_2003' || normalizedName === 'news.sina.com.cn') {
            module = await import('./components/Archives/PortalNews2003');
          } else if (normalizedName === 'blog_2005' || normalizedName === 'alexblog.net') {
            module = await import('./components/Archives/Blog2005');
          } else if (normalizedName === 'myspace_2007' || normalizedName === 'myspace.com/darkangel') {
            module = await import('./components/Archives/MySpace2007');
          } else if (normalizedName === 'web20_2008' || normalizedName === 'cloudsync.io') {
            module = await import('./components/Archives/Web20Startup2008');
          } else if (normalizedName === 'forum_2009' || normalizedName === 'techtalkforums.com') {
            module = await import('./components/Archives/Forum2009');
          } else if (normalizedName === 'mobile_2010' || normalizedName === 'm.news.com') {
            module = await import('./components/Archives/MobileWeb2010');
          } else if (normalizedName === 'skeuomorphic_2012' || normalizedName === 'icloud.com/notes') {
            module = await import('./components/Archives/Skeuomorphic2012');
          } else if (normalizedName === 'horizon-80 basic - 1980') {
            module = await import('./components/Archives/Horizon80Basic1980');
          } else {
            module = await import('./components/Archives/GenericRetroSystem');
          }
          
          if (module) {
            setArchiveApp(() => module.default);
          } else {
            console.error(`No module found for normalized name: ${normalizedName}`);
            setCurrentRoute('404');
          }
        } catch (error) {
          console.error(`Failed to load archive for route ${currentRoute}:`, error);
          setCurrentRoute('404');
        }
      };
      loadArchive();
    } else {
      setArchiveApp(null);
    }
  }, [currentRoute]);

  if (currentRoute === '404') {
    return (
      <div className="min-h-screen flex flex-col font-sans bg-white">
        <TopNav />
        <NotFound requestedUrl={window.location.hash} />
        <Footer />
      </div>
    );
  }

  if (currentRoute === 'login') {
    return <Login />;
  }

  if (currentRoute === 'calendar') {
    return (
      <div className="min-h-screen flex flex-col font-sans bg-white">
        <TopNav />
        <CalendarView url={params.url} />
        <Footer />
      </div>
    );
  }

  if (currentRoute === 'hot-systems') {
    return (
      <div className="min-h-screen flex flex-col font-sans bg-white">
        <TopNav />
        <HotSystems />
        <Footer />
      </div>
    );
  }

  if (currentRoute.startsWith('playback/')) {
    if (ArchiveApp) {
      return <ArchiveApp />;
    }
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-[#666]">
        Loading archive...
      </div>
    );
  }

  if (currentRoute === 'home') {
    return (
      <div className="min-h-screen flex flex-col font-sans relative">
        <TopNav />
        <Hero />
        <Carousel />
        <Features />
        <Footer />
        
        {/* Left Floating Ad */}
        <div className="hidden 2xl:block fixed top-[150px] left-4 z-50">
          <GoogleAd2016 
            width={160} 
            height={600} 
            type="image" 
            imageUrl={[
              "https://i.ibb.co/Kx5y6Ljv/Gemini-Generated-Image-8hsjy48hsjy48hsj.png",
              "https://i.ibb.co/x8sRcj4D/Gemini-Generated-Image-p6nkycp6nkycp6nk.png",
              "https://i.ibb.co/F483YyYf/Gemini-Generated-Image-i1a595i1a595i1a5.png"
            ]} 
          />
        </div>

        {/* Right Floating Ad */}
        <div className="hidden 2xl:block fixed top-[150px] right-4 z-50">
          <GoogleAd2016 
            width={160} 
            height={600} 
            type="image" 
            imageUrl={[
              "https://i.ibb.co/8DcYXDjn/Gemini-Generated-Image-duh2iduh2iduh2id.png",
              "https://i.ibb.co/N262xS2p/Gemini-Generated-Image-gkjznegkjznegkjz.png",
              "https://i.ibb.co/KpfFRvgY/Gemini-Generated-Image-pjxhlvpjxhlvpjxh.png",
              "https://i.ibb.co/YTWKcL2Y/Gemini-Generated-Image-hkop60hkop60hkop.png"
            ]}
          />
        </div>

        {/* Bottom Sticky Ad */}
        <BottomStickyAd />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <TopNav />
      <Hero />
      <Carousel />
      <Features />
      <Footer />
    </div>
  );
};

export default App;