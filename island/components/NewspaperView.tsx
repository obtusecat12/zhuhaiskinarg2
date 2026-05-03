import React from 'react';

export const NewspaperView: React.FC = () => {
  return (
    <div className="newspaper-wrapper bg-white text-[#333] font-sans min-w-[1180px] min-h-screen">
      <style>{`
        .newspaper-wrapper {
          --newspaper-red: #bf4444;
          --newspaper-bg: #f4f4f4;
        }
        .newspaper-wrapper ul, .newspaper-wrapper li, .newspaper-wrapper ol, .newspaper-wrapper dl, .newspaper-wrapper dt, .newspaper-wrapper dd, .newspaper-wrapper p, .newspaper-wrapper img, .newspaper-wrapper input, .newspaper-wrapper select, .newspaper-wrapper option, .newspaper-wrapper h1, .newspaper-wrapper h2, .newspaper-wrapper h3, .newspaper-wrapper h4, .newspaper-wrapper h5, .newspaper-wrapper h6 { margin: 0; padding: 0; border: none; border: 0; outline: none; list-style: none; }
        .newspaper-wrapper a { color: #333; text-decoration: none; }
        .newspaper-wrapper a:hover { text-decoration: underline; }
        .newspaper-wrapper img { max-width: 100%; }
        .newspaper-wrapper .fl { float: left; }
        .newspaper-wrapper .fr { float: right; }
        .newspaper-wrapper .container { width: 1180px; margin: auto; }
        .newspaper-wrapper .header { background: #eee; height: 110px; padding: 0 20px; }
        .newspaper-wrapper .logo img { height: 82px; }
        .newspaper-wrapper .logo { margin-top: 14px; }
        .newspaper-wrapper .search-con { width: 600px; position: relative; float: right; margin-top: 20px; }
        .newspaper-wrapper .search-con .choose-select { width: 95px; height: 38px; float: left; border: 1px solid #a5a5a5; }
        .newspaper-wrapper .search-text { width: 463px; height: 36px; line-height: 36px; float: right; padding-left: 5px; border: 1px solid #bf4444; font-size: 16px; padding-left: 40px; }
        .newspaper-wrapper .search-btn { width: 94px; height: 38px; background: #bf4444; color: #fff; border: 0; cursor: pointer; position: absolute; top: 0; right: 0; line-height: 38px; }
        .newspaper-wrapper .search-bg { width: 16px; height: 36px; float: right; position: absolute; top: 1px; right: 94px; }
        .newspaper-wrapper .nav { background: #e6e6e6; height: 50px; margin-bottom: 10px; clear: both; }
        .newspaper-wrapper .nav li { float: left; border-right: 1px solid #ccc; margin-top: 5px; position: relative; }
        .newspaper-wrapper .nav li a { color: #5d0006; font-size: 16px; padding: 10px 25px; display: block; }
        .newspaper-wrapper .section-l { width: 510px; float: left; overflow: hidden; margin-right: 5px; position: relative; height: 745px; }
        .newspaper-wrapper .newspaper { overflow: hidden; border: 1px solid #6b6b6b; margin-bottom: 30px; }
        .newspaper-wrapper .newspaper .newspaper-img { margin: auto; display: block; text-align: center; }
        .newspaper-wrapper .newspaper-last-con { background: #e5e5e5; padding: 5px; overflow: hidden; position: absolute; bottom: 0; left: 0; width: 99%; }
        .newspaper-wrapper .next-btn, .newspaper-wrapper .prev-btn, .newspaper-wrapper .pre-btn { font-weight: bold; padding: 0 5px; }
        .newspaper-wrapper .section-r { border: 1px solid #ccc; padding: 1px; overflow: hidden; min-height: 740px; position: relative; }
        .newspaper-wrapper .article-l { width: 38%; float: left; margin-right: 2%; overflow: hidden; }
        .newspaper-wrapper .column { background: #bf4444; overflow: hidden; text-align: center; padding: 9px 0; display: block; color: #fff; font-weight: bold; }
        .newspaper-wrapper .banmian-wenzhang li a { padding: 5px; display: block; line-height: 24px; }
        .newspaper-wrapper .article-r { overflow: hidden; width: 60%; float: right; background: #f4f4f4; }
        .newspaper-wrapper .article-r .banmian-wenzhang li { padding-left: 15px; }
        .newspaper-wrapper .article-r .banmian-wenzhang { padding: 0 10px; height: 494px; overflow: auto; }
        .newspaper-wrapper .banmian-wenzhang li:nth-child(odd) { background-color: #f4f4f4; }
        .newspaper-wrapper .footer { overflow: hidden; border-top: 1px solid #a5a5a5; margin-top: 30px; text-align: center; padding: 20px 0; font-size: 16px; }
        .newspaper-wrapper .footer p { line-height: 24px; margin-bottom: 5px; }
        .newspaper-wrapper .areaBox { display: block; position: absolute; z-index: 10; cursor: pointer; }
        .newspaper-wrapper .areaBox:hover { border: 2px solid rgb(16, 113, 184); opacity: 0.3; background-color: rgb(243, 152, 20); }
        .newspaper-wrapper .calendar { margin: 10px; }
        .newspaper-wrapper table { border-collapse: collapse; width: 100%; }
        .newspaper-wrapper th, .newspaper-wrapper td { text-align: center; padding: 5px; border: 1px solid #eee; font-size: 12px; }
        .newspaper-wrapper th { background: #bf4444; color: white; }
        .newspaper-wrapper .today { background: #bf4444; color: white; border-radius: 50%; display: inline-block; width: 20px; height: 20px; line-height: 20px; }
      `}</style>

      <div className="header">
        <div className="container">
          <a href="#" className="fl logo">
            <img src="https://i.ibb.co/zHfNxMNc/logo.png" alt="logo" style={{height: '82px'}} />
          </a>
          <div className="fr search-con">
            <div className="main-search">
              <select name="field" className="choose-select">
                <option value="all">智能匹配</option>
                <option value="title">标题</option>
                <option value="author">作者</option>
                <option value="column">栏目</option>
              </select>
              <input type="text" id="keywordInput" name="keyword" autoComplete="off" placeholder="一键匹配 智能搜索" className="search-text" />
              <input type="submit" value="搜 索" className="search-btn" />
              <span className="search-bg"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="nav">
        <div className="container">
          <ul>
            <li className="nav-bar"><a href="#">仙桃日报</a></li>
            <li className="navigation">
              <a href="#">版面导航</a>
            </li>
            <li><a href="#">版面概览</a></li>
            <li><a href="#">往期报纸</a></li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="section-l">
          <div className="newspaper">
            <img width="500px" height="700px" alt="image" useMap="#newspapermap" className="newspaper-img" src="https://i.ibb.co/LhhMRJyH/image.png" />
            <a href="#" className="areaBox" style={{ left: '9.01628px', top: '36.1661px', width: '334.496px', height: '143.649px' }}></a>
            <a href="#" className="areaBox" style={{ left: '9.01628px', top: '192.79px', width: '331.628px', height: '45.115px' }}></a>
            <a href="#" className="areaBox" style={{ left: '9.01628px', top: '251.472px', width: '331.628px', height: '53.0934px' }}></a>
            <a href="#" className="areaBox" style={{ left: '356.13px', top: '36.2679px', width: '137.072px', height: '368.43px' }}></a>
            <a href="#" className="areaBox" style={{ left: '11.7897px', top: '327.093px', width: '322.037px', height: '163.099px' }}></a>
            <a href="#" className="areaBox" style={{ left: '9.01628px', top: '512.717px', width: '333.847px', height: '142.782px' }}></a>
            <a href="#" className="areaBox" style={{ left: '358.332px', top: '416.997px', width: '134.87px', height: '95.8135px' }}></a>
            <a href="#" className="areaBox" style={{ left: '358.332px', top: '525.111px', width: '132.651px', height: '90.2737px' }}></a>
          </div>
          <div className="newspaper-last-con">
            <span className="fl"><b>第02版：</b>要闻</span>
            <a target="_blank" href="#" className="fl turn">&nbsp;&nbsp;3D阅读</a>
            <a href="#" className="fr next-btn">下一版 &gt;</a>
            <a href="#" className="fr pre-btn">&lt;上一版 </a>
          </div>
        </div>
        <div className="section-r">
          <div className="article-l">
            <div className="article-con">
              <div className="column">版面导航</div>
              <ul className="banmian-wenzhang">
                <li><a href="#">第01版：头版</a></li>
                <li><a href="#">第02版：要闻</a></li>
                <li><a href="#">第03版：桃苑</a></li>
                <li><a href="#">第04版：综合</a></li>
              </ul>
            </div>
          </div>
          <div className="article-r">
            <div className="column">第02版：要闻</div>
            <ul className="banmian-wenzhang">
              <li><a href="#">火马福颂展亮相仙桃武商MALL</a></li>
              <li><a href="#">我市发布“春风行动”岗位征集令</a></li>
              <li><a href="#">仙桃职业学院夺得50个奖项</a></li>
              <li><a href="#">减负增效添干劲实干担当谱新篇</a></li>
              <li><a href="#">新春灯会火热筹备</a></li>
              <li><a href="#">电力一线的“追光人”</a></li>
              <li><a href="#">化解1490余户办证难题</a></li>
              <li><a href="#" style={{color: '#bf4444', fontWeight: 'bold'}}>仙桃一高中生深夜失踪 警方介入调查</a></li>
            </ul>
            <div id="calendar" className="calendar">
                <table>
                  <thead>
                    <tr><th colSpan={7}>23 一月 2026</th></tr>
                    <tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="text-gray-400">28</td><td className="text-gray-400">29</td><td className="text-gray-400">30</td><td className="text-gray-400">31</td><td>1</td><td>2</td><td>3</td></tr>
                    <tr><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>
                    <tr><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td></tr>
                    <tr><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td><span className="today">23</span></td><td>24</td></tr>
                    <tr><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td></tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer">
          <p style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>互联网新闻信息服务许可证：42120240014 </p>
          <p> 鄂ICP备2024060995号</p>
          <p>联系方式 邮箱361697759@qq.com</p>
          <p>版权所有，未经书面授权禁止使用</p>
          <p>Copyright© 2015-2023 by .all rights reserved</p>
        </div>
      </div>
    </div>
  );
};
