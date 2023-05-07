

/******************************

脚本功能：gear浏览器插件+解锁订阅
下载地址：http://mtw.so/64tULY
软件版本：5.8.5
脚本作者：彭于晏
更新时间：2022-9-18
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body gear.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var objc = JSON.parse($response.body);

    objc = 
{"current_offering_id":"subscription","offerings":[{"description":"Gear Pro subscription","identifier":"subscription","packages":[{"identifier":"$rc_monthly","platform_product_identifier":"com.gear.app.monthly"},{"identifier":"$rc_six_month","platform_product_identifier":"com.gear.app.semiannually"},{"identifier":"$rc_annual","platform_product_identifier":"com.gear.app.yearly"}]}]}



$done({body : JSON.stringify(objc)});
