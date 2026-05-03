import React from 'react';
import { AeroBackButton } from './AeroBackButton';

export default function PortalNews2003() {
  return (
    <div style={{ fontFamily: 'SimSun, "Times New Roman", serif', fontSize: '12px', backgroundColor: '#FFFFFF', color: '#000000', minHeight: '100vh', width: '760px', margin: '0 auto', padding: '10px 0' }}>
      <AeroBackButton />
      
      {/* Top Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '5px' }}>
        <div>
          <a href="#" style={{ color: '#0000CC' }}>设为首页</a> | <a href="#" style={{ color: '#0000CC' }}>加入收藏</a> | <a href="#" style={{ color: '#0000CC' }}>手机新浪网</a> | <a href="#" style={{ color: '#0000CC' }}>English</a>
        </div>
        <div>
          2003年10月16日 星期四 农历癸未年九月廿一
        </div>
      </div>

      {/* Header */}
      <table width="100%" border={0} cellSpacing={0} cellPadding={0} style={{ marginBottom: '10px' }}>
        <tbody>
          <tr>
            <td width="200">
              <h1 style={{ color: '#CC0000', margin: 0, fontSize: '32px', fontStyle: 'italic', fontWeight: 'bold' }}>SINA 新浪</h1>
            </td>
            <td align="right" valign="bottom">
              <form style={{ margin: 0 }}>
                <input type="text" size={30} style={{ border: '1px solid #7F9DB9', height: '18px' }} />
                <input type="submit" value="新浪搜索" style={{ height: '22px', marginLeft: '5px' }} />
              </form>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Main Nav */}
      <div style={{ backgroundColor: '#EFEFEF', borderTop: '2px solid #CC0000', borderBottom: '1px solid #CCCCCC', padding: '5px 10px', fontWeight: 'bold', marginBottom: '10px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>新闻</a>
        <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>体育</a>
        <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>娱乐</a>
        <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>科技</a>
        <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>财经</a>
        <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>汽车</a>
        <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>房产</a>
        <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>教育</a>
        <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>女性</a>
        <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>游戏</a>
        <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>论坛</a>
        <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>博客</a>
        <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>短信</a>
        <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>交友</a>
        <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>商城</a>
      </div>

      <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
        <tbody>
          <tr>
            {/* Left Column */}
            <td width="180" valign="top" style={{ paddingRight: '10px' }}>
              <div style={{ border: '1px solid #CCCCCC', marginBottom: '10px' }}>
                <div style={{ backgroundColor: '#F5F5F5', padding: '3px 5px', fontWeight: 'bold', borderBottom: '1px solid #CCCCCC' }}>新闻导航</div>
                <ul style={{ listStyleType: 'none', padding: '5px', margin: 0, lineHeight: '1.8' }}>
                  <li>· <a href="#" style={{ color: '#0000CC' }}>国内新闻</a> | <a href="#" style={{ color: '#0000CC' }}>国际新闻</a></li>
                  <li>· <a href="#" style={{ color: '#0000CC' }}>社会新闻</a> | <a href="#" style={{ color: '#0000CC' }}>体育新闻</a></li>
                  <li>· <a href="#" style={{ color: '#0000CC' }}>娱乐新闻</a> | <a href="#" style={{ color: '#0000CC' }}>军事新闻</a></li>
                  <li>· <a href="#" style={{ color: '#0000CC' }}>科技新闻</a> | <a href="#" style={{ color: '#0000CC' }}>财经新闻</a></li>
                  <li>· <a href="#" style={{ color: '#0000CC' }}>港澳台新闻</a> | <a href="#" style={{ color: '#0000CC' }}>法治新闻</a></li>
                </ul>
              </div>
              
              <div style={{ border: '1px solid #CCCCCC', marginBottom: '10px' }}>
                <div style={{ backgroundColor: '#F5F5F5', padding: '3px 5px', fontWeight: 'bold', borderBottom: '1px solid #CCCCCC' }}>股市行情</div>
                <div style={{ padding: '5px', lineHeight: '1.5', fontSize: '11px' }}>
                  上证指数: <span style={{ color: 'red' }}>1382.45 +12.3</span><br/>
                  深证成指: <span style={{ color: 'red' }}>3210.12 +25.6</span><br/>
                  纳斯达克: <span style={{ color: 'green' }}>1920.33 -5.4</span><br/>
                  道琼斯: <span style={{ color: 'red' }}>9812.50 +45.2</span>
                </div>
              </div>

              <div style={{ border: '1px solid #CCCCCC', marginBottom: '10px' }}>
                <div style={{ backgroundColor: '#F5F5F5', padding: '3px 5px', fontWeight: 'bold', borderBottom: '1px solid #CCCCCC' }}>天气预报</div>
                <div style={{ padding: '5px', lineHeight: '1.5', fontSize: '11px' }}>
                  北京：晴 15℃/25℃<br/>
                  上海：多云 18℃/22℃<br/>
                  广州：阵雨 22℃/28℃<br/>
                  深圳：雷阵雨 24℃/30℃
                </div>
              </div>
            </td>

            {/* Middle Column */}
            <td width="400" valign="top" style={{ padding: '0 10px' }}>
              <h2 style={{ color: '#CC0000', textAlign: 'center', fontSize: '22px', margin: '5px 0 15px 0' }}>神舟五号载人飞船发射成功</h2>
              <p style={{ textIndent: '24px', lineHeight: '1.6', marginBottom: '15px' }}>北京时间2003年10月15日9时整，我国自行研制的“神舟”五号载人飞船在酒泉卫星发射中心发射升空。这是我国首次进行载人航天飞行。航天员杨利伟成为中国太空第一人...</p>
              
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.8', fontSize: '14px', fontWeight: 'bold' }}>
                <li>· <a href="#" style={{ color: '#0000CC' }}>杨利伟：感觉良好，我为祖国感到骄傲</a></li>
                <li>· <a href="#" style={{ color: '#0000CC' }}>胡锦涛等党和国家领导人观看发射实况</a></li>
                <li>· <a href="#" style={{ color: '#0000CC' }}>世界各大媒体纷纷头条报道中国载人航天</a></li>
                <li>· <a href="#" style={{ color: '#0000CC' }}>神舟五号飞船返回舱成功着陆 杨利伟出舱</a></li>
              </ul>
              
              <div style={{ borderTop: '1px dotted #CCCCCC', margin: '15px 0' }}></div>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: '#CC0000', fontSize: '14px', margin: '0 0 5px 0' }}>国际新闻</h3>
                  <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
                    <li>· <a href="#" style={{ color: '#0000CC' }}>伊拉克首都巴格达发生连环爆炸</a></li>
                    <li>· <a href="#" style={{ color: '#0000CC' }}>布什发表讲话强调反恐战争</a></li>
                    <li>· <a href="#" style={{ color: '#0000CC' }}>阿诺·施瓦辛格当选加州州长</a></li>
                    <li>· <a href="#" style={{ color: '#0000CC' }}>六方会谈在北京钓鱼台国宾馆举行</a></li>
                  </ul>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: '#CC0000', fontSize: '14px', margin: '0 0 5px 0' }}>国内新闻</h3>
                  <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
                    <li>· <a href="#" style={{ color: '#0000CC' }}>SARS疫情基本得到控制 各地恢复正常生活</a></li>
                    <li>· <a href="#" style={{ color: '#0000CC' }}>三峡大坝二期工程顺利蓄水</a></li>
                    <li>· <a href="#" style={{ color: '#0000CC' }}>温家宝总理视察灾区慰问群众</a></li>
                    <li>· <a href="#" style={{ color: '#0000CC' }}>全国人大常委会通过行政许可法</a></li>
                  </ul>
                </div>
              </div>

              <div style={{ borderTop: '1px dotted #CCCCCC', margin: '15px 0' }}></div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: '#0000CC', fontSize: '14px', margin: '0 0 5px 0' }}>体育·娱乐</h3>
                  <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
                    <li>· <a href="#" style={{ color: '#0000CC' }}>皇马中国行：巨星抵达北京引爆球迷狂欢</a></li>
                    <li>· <a href="#" style={{ color: '#0000CC' }}>姚明NBA新赛季表现备受期待</a></li>
                    <li>· <a href="#" style={{ color: '#0000CC' }}>周杰伦新专辑《叶惠美》全亚洲发行</a></li>
                    <li>· <a href="#" style={{ color: '#0000CC' }}>张艺谋电影《英雄》票房创纪录</a></li>
                  </ul>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: '#0000CC', fontSize: '14px', margin: '0 0 5px 0' }}>科技·财经</h3>
                  <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
                    <li>· <a href="#" style={{ color: '#0000CC' }}>淘宝网正式上线 进军C2C电子商务市场</a></li>
                    <li>· <a href="#" style={{ color: '#0000CC' }}>网易宣布盈利 丁磊成为中国首富</a></li>
                    <li>· <a href="#" style={{ color: '#0000CC' }}>微软发布 Windows Server 2003</a></li>
                    <li>· <a href="#" style={{ color: '#0000CC' }}>彩屏手机成为市场新宠 销量大增</a></li>
                  </ul>
                </div>
              </div>
            </td>

            {/* Right Column */}
            <td width="180" valign="top" style={{ paddingLeft: '10px' }}>
              <div style={{ border: '1px solid #CCCCCC', marginBottom: '10px' }}>
                <div style={{ backgroundColor: '#F5F5F5', padding: '3px 5px', fontWeight: 'bold', borderBottom: '1px solid #CCCCCC' }}>图片新闻</div>
                <div style={{ textAlign: 'center', padding: '10px 5px' }}>
                  <div style={{ width: '140px', height: '105px', backgroundColor: '#DDDDDD', margin: '0 auto 5px auto', border: '1px solid #999', backgroundImage: 'url(https://picsum.photos/seed/rocket/140/105)' }}></div>
                  <a href="#" style={{ color: '#0000CC' }}>火箭点火升空瞬间</a>
                </div>
                <div style={{ textAlign: 'center', padding: '10px 5px', borderTop: '1px dashed #CCC' }}>
                  <div style={{ width: '140px', height: '105px', backgroundColor: '#DDDDDD', margin: '0 auto 5px auto', border: '1px solid #999', backgroundImage: 'url(https://picsum.photos/seed/soccer/140/105)' }}></div>
                  <a href="#" style={{ color: '#0000CC' }}>皇马巨星抵达北京</a>
                </div>
                <div style={{ textAlign: 'center', padding: '10px 5px', borderTop: '1px dashed #CCC' }}>
                  <div style={{ width: '140px', height: '105px', backgroundColor: '#DDDDDD', margin: '0 auto 5px auto', border: '1px solid #999', backgroundImage: 'url(https://picsum.photos/seed/jay/140/105)' }}></div>
                  <a href="#" style={{ color: '#0000CC' }}>周杰伦发布新专辑</a>
                </div>
              </div>

              <div style={{ border: '1px solid #CCCCCC', marginBottom: '10px' }}>
                <div style={{ backgroundColor: '#F5F5F5', padding: '3px 5px', fontWeight: 'bold', borderBottom: '1px solid #CCCCCC' }}>特别推荐</div>
                <ul style={{ listStyleType: 'none', padding: '5px', margin: 0, lineHeight: '1.8' }}>
                  <li>· <a href="#" style={{ color: '#CC0000', fontWeight: 'bold' }}>新浪VIP邮箱全面升级</a></li>
                  <li>· <a href="#" style={{ color: '#0000CC' }}>下载新浪UC 语音聊天</a></li>
                  <li>· <a href="#" style={{ color: '#0000CC' }}>新浪交友 寻找你的另一半</a></li>
                  <li>· <a href="#" style={{ color: '#0000CC' }}>手机铃声图片火爆下载</a></li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      
      <div style={{ textAlign: 'center', borderTop: '2px solid #CC0000', marginTop: '20px', paddingTop: '10px', color: '#666' }}>
        <a href="#" style={{ color: '#666' }}>关于新浪</a> | <a href="#" style={{ color: '#666' }}>About Sina</a> | <a href="#" style={{ color: '#666' }}>广告服务</a> | <a href="#" style={{ color: '#666' }}>联系我们</a> | <a href="#" style={{ color: '#666' }}>招聘信息</a> | <a href="#" style={{ color: '#666' }}>网站律师</a> | <a href="#" style={{ color: '#666' }}>SINA English</a> | <a href="#" style={{ color: '#666' }}>会员注册</a> | <a href="#" style={{ color: '#666' }}>产品答疑</a><br/>
        Copyright © 1996 - 2003 SINA Inc. All Rights Reserved
      </div>
    </div>
  );
}
