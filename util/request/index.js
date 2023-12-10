// 请求接口
// const commoneUrl = "https://gongshen.yuanmajie.top/";
const commoneUrl = "http://112.124.38.175:8080";
// new 域名
 
//get请求封装
function getRequest(url, data) {
	var promise = new Promise((resolve, reject) => {
		var postData = data;
		uni.request({
			url: commoneUrl + url,
			data: postData,
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
				
				if (res.statusCode === 200 && res.data.resultCode == 0) {
					resolve(res.data);
				} else {
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