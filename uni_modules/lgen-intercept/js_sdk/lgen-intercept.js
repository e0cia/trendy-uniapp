/**
 * @Descripttion: uni-app登录拦截
 * @Version: 1.0.0
 * @Author: lgen
 */

import config from '@/lgen-config.js'

const routeList=['navigateTo','redirectTo','reLaunch','switchTab']

export default function({path,query}){
	if(!config.uInfo || (!config.whiteList && !config.blackList)) return;

	// 进入页面时拦截
	if(config.loginPath){
		path='/'+path;
		const uInfo=uni.getStorageSync(config.uInfo);
		if(!uInfo){
			if(config.whiteList && !config.whiteList.includes(path)){
				handleInit(path,query)
			}else if(config.blackList && config.blackList.includes(path)){
				handleInit(path,query)
			}
		}
	}
		
	// 点击跳转时拦截
	routeList.forEach(rItem=>{
		uni.addInterceptor(rItem,{
			// 拦截前
			invoke(args){
				const uInfo=uni.getStorageSync(config.uInfo),
					url=args.url.split('?')[0]; //跳转页面路径
				
				let pass=true;
				if(config.whiteList){
					// 白名单模式
					pass=config.whiteList.some(item=>{
						if(typeof(item)=='object' && item.pattern){
							return item.pattern.test(url)
						}
						return url==item
					})
				}else if(config.blackList){
					// 黑名单模式
					pass=config.blackList.every(item=>{
						if(typeof(item)=='object' && item.pattern){
							return !item.pattern.test(url)
						}
						return url!=item
					})
				}
				
				// 未登录
				if(!pass && !uInfo){
					if(config.toLogin && config.loginPath){
						jumpLogin(args.url,1)
					}
					return false
				}
				
				return args
			}
		})
	})
}

function handleInit(path,query){
	let paramStr=''; //参数拼接
	for(let key in query){
		paramStr+=`&${key}=${query[key]}`
	}
	paramStr=paramStr.replace('&','?')
	let newPath=path+paramStr;
	jumpLogin(newPath)
}

// 跳转登录
function jumpLogin(path,type=0){
	let pagePath=encodeURIComponent(path);
	let toUrl=config.loginPath+'?path='+pagePath;
	if(type){
		uni.navigateTo({
			url:toUrl
		})
	}else{
		uni.reLaunch({
			url:toUrl
		})
	}
}