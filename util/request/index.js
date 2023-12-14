// 请求接口
// const commoneUrl = "https://gongshen.yuanmajie.top/";
const commoneUrl = "http://112.124.38.175:8080";
// const commoneUrl = "http://127.0.0.1:8081";
// new 域名
 
//get请求封装
function getRequest(url, data) {
	var promise = new Promise((resolve, reject) => {

		const params = Object.entries(data)
			.filter(([key, value]) => value !== '')
			.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
			.join('&');
		const queryString = `?${params}`;
		uni.request({
			url: commoneUrl + url+queryString,
			method: "GET",
			header: {
				"Authorization": uni.getStorageSync('Authorization')
			},
			success: function(res) {
				if (res.statusCode === 200) {
					resolve(res.data);
				} else {
					resolve(res.data)
				}
			},
			error: function(e) {
				reject('网络出错');
			}
		});
	});
	return promise;
}
 
//post请求封装
function postRequest(url, data) {
	var promise = new Promise((resolve, reject) => {
		var postData = data;
		uni.request({
			url: commoneUrl + url,
			data: postData,
			method: 'POST',
			header: {
				"Authorization": uni.getStorageSync('Authorization')
			},
			success: function(res) {
				console.log(res.data.code)
				if (res.statusCode === 200 && res.data.code == 200) {
					resolve(res.data);
				} else if (res.data.code == 401){
					uni.navigateTo({
						url: '/pages/login/login',
					});
				}else {
					resolve(res.data)
				}
			},
			error: function(e) {
				reject('网络出错');
			}
		})
	});
	return promise;
}
 
 
//封装上传单个图片
 function uploadFile(url, data) {
	 var promise = new Promise((resolve, reject) => {
		 let lj= commoneUrl + url;
		 // let filePath=null;
		 // let name='file';
		 // let header=""
		 var postData = data.file;
	 	uni.uploadFile({
	 		url:commoneUrl + url, //文件服务器地址
	 		filePath:postData,
				name:'file',
				header:{
					"Content-Type": "multipart/form-data",
					"Authorization": uni.getStorageSync('Authorization')
				},
				showToast : true,
				success(res) {
	 			resolve(JSON.parse(res.data))
	 		},
	 		fail(err) {
	 			reject(err)
	 		}
	 	});
	 });
	 return promise;
 }
 
 
 
 
module.exports = {
	postRequest,
	getRequest,
	commoneUrl,
	uploadFile
}