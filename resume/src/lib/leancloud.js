import AV from 'leancloud-storage';

//初始化leancloud storage
var APP_ID = 'bfuA85gKiQID2XO0i91kAKDQ-gzGzoHsz';
var APP_KEY = '7IQoe2W5gHU20r2lb6YjeMjN';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export default AV