import React from 'react';
import TopNav from './TopNav';
import Footer from './Footer';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#e9eaed]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, "Microsoft YaHei", sans-serif' }}>
      <TopNav />
      
      <div className="flex-1 flex items-center justify-center py-12" style={{
        backgroundImage: 'url(https://i.imgur.com/4VBGoX1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="w-full max-w-[420px] bg-white p-8 rounded-[6px] flex flex-col items-center relative"
             style={{
               boxShadow: '0 8px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,1)',
               background: 'linear-gradient(to bottom, #ffffff 0%, #f9f9f9 100%)'
             }}>
          
          {/* Logo */}
          <div className="mb-6 flex flex-col items-center">
            <img src="https://i.ibb.co/YsPbs2v/Chat-GPT-Image-2026-1-1-15-20-34.png" alt="Logo" className="h-[130px] w-auto mb-4" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} />
            <h1 className="text-[22px] font-bold text-[#333] mb-1" style={{ textShadow: '0 1px 0 #fff' }}>登录时光档案馆</h1>
            <p className="text-[13px] text-[#666]" style={{ textShadow: '0 1px 0 #fff' }}>使用您的账号继续</p>
          </div>

          {/* Form */}
          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="电子邮件地址" 
                className="w-full h-[40px] px-3 text-[14px] rounded-[4px] focus:outline-none transition-all"
                style={{
                  border: '1px solid #aaa',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,1)',
                  background: '#fafafa'
                }}
                required
              />
            </div>
            
            <div className="mb-6">
              <input 
                type="password" 
                placeholder="密码" 
                className="w-full h-[40px] px-3 text-[14px] rounded-[4px] focus:outline-none transition-all"
                style={{
                  border: '1px solid #aaa',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,1)',
                  background: '#fafafa'
                }}
                required
              />
            </div>

            <button 
              type="submit" 
              className="w-full h-[42px] text-white font-bold text-[15px] rounded-[4px] transition-all mb-6 cursor-pointer"
              style={{
                background: 'linear-gradient(to bottom, #7abcff 0%, #60abf8 49%, #4096ee 50%, #3488e3 100%)',
                border: '1px solid #235a8d',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.3)',
                textShadow: '0 -1px 0 rgba(0,0,0,0.4)'
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to bottom, #3488e3 0%, #4096ee 50%, #60abf8 51%, #7abcff 100%)';
                e.currentTarget.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.5)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to bottom, #7abcff 0%, #60abf8 49%, #4096ee 50%, #3488e3 100%)';
                e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to bottom, #7abcff 0%, #60abf8 49%, #4096ee 50%, #3488e3 100%)';
                e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.3)';
              }}
            >
              登录
            </button>
          </form>

          {/* Divider */}
          <div className="w-full flex items-center justify-between mb-6">
            <div className="h-[1px] bg-[#ccc] flex-1" style={{ borderBottom: '1px solid #fff' }}></div>
            <span className="px-4 text-[12px] text-[#777] font-bold" style={{ textShadow: '0 1px 0 #fff' }}>或者</span>
            <div className="h-[1px] bg-[#ccc] flex-1" style={{ borderBottom: '1px solid #fff' }}></div>
          </div>

          {/* Google Login Button */}
          <button 
            type="button"
            className="w-full h-[42px] text-[#333] font-bold text-[14px] rounded-[4px] transition-all flex items-center justify-center mb-6 cursor-pointer"
            style={{
              background: 'linear-gradient(to bottom, #ffffff 0%, #f1f1f1 49%, #e1e1e1 50%, #f6f6f6 100%)',
              border: '1px solid #aaa',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.2)',
              textShadow: '0 1px 0 rgba(255,255,255,0.8)'
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to bottom, #e1e1e1 0%, #f1f1f1 50%, #f6f6f6 100%)';
              e.currentTarget.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.5)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to bottom, #ffffff 0%, #f1f1f1 49%, #e1e1e1 50%, #f6f6f6 100%)';
              e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to bottom, #ffffff 0%, #f1f1f1 49%, #e1e1e1 50%, #f6f6f6 100%)';
              e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.2)';
            }}
          >
            <img src="https://i.imgur.com/8AZu9oC.png" alt="Google" className="h-[18px] w-auto mr-3" style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.2))' }} />
            使用 Google 账号登录
          </button>

          {/* Links */}
          <div className="w-full flex justify-between text-[12px] font-bold">
            <a href="#" className="text-[#2a5db0] hover:underline" style={{ textShadow: '0 1px 0 #fff' }}>忘记密码？</a>
            <a href="#" className="text-[#2a5db0] hover:underline" style={{ textShadow: '0 1px 0 #fff' }}>注册新账号</a>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
