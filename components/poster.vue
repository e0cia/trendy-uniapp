<template>
	<view  style="background: #FFFFFF;text-align: center;" :style="isShowCan?'opacity:1':'opacity:0'">
		<canvas v-if="!tempFilePath" :canvas-id="CanvasID" :style="{ width: canvasW + 'px', height: canvasH + 'px' }"></canvas>
		<image v-else lazy-load :src="tempFilePath" mode="widthFix" class="is-response" @longpress="toSave(tempFilePath)"></image>
  </view>


</template>

<script>
	var _this;
	export default {
		name: 'poster',
		props: {
			CanvasID: {
				//CanvasID 等同于 canvas-id
				Type: String,
				default: 'PosterCanvas'
			},
			imgSrc: {
				//展示图
				Type: String,
				default: ''
			},
			QrSrc: {
				//二维码
				Type: String,
				default: ''
			},
			Title: {
				//文本内容
				Type: String,
				default: '省钱兄'
			},
			TitleColor: {
				//标题颜色
				Type: String,
				default: '#333333'
			},
			LineType: {
				//标题显示行数 大于两行是否省略	（注超出2行显示会导致画布布局絮乱）
				Type: [String, Boolean],
				default: true
			},
			PriceTxt: {
				//价格值
				Type: String,
				default: ''
			},
			PriceColor: {
				//价格颜色
				Type: String,
				default: '#e31d1a'
			},
			OriginalTxt: {
				//原价值
				Type: String,
				default: ''
			},
			OriginalColor: {
				//默认颜色（如原价与扫描二维码颜色）
				Type: String,
				default: '#b8b8b8'
			},
			Width: {
				//画布宽度  (高度根据图片比例计算 单位upx)
				Type: String,
				default: 690
			},
			CanvasBg: {
				//canvas画布背景色
				Type: String,
				default: '#ffffff'
			},
			Referrer: {
				//推荐人信息
				Type: String,
				default: '卡卡海底世界'
			},
			ViewDetails: {
				//描述提示文字
				Type: String,
				default: '享受海底世界，一起产产产！！！'
			}
		},
		data() {
			return {
				loading: false,
				tempFilePath: '',
				canvasW: 0,
				canvasH: 0,
				canvasImgSrc: '',
				ctx: null,
        isShowCan:false
			};
		},
		methods: {
			toSave(url) {
				// console.log("长按开始");
				//#ifndef H5
				uni.getImageInfo({
					src: url,
					success: function(image) {
						// console.log('图片信息：', JSON.stringify(image));
						uni.saveImageToPhotosAlbum({
							filePath: image.path,
							success: function() {
								// console.log('save success');
								uni.showToast({
									title: '海报已保存相册',
									icon: 'success',
									duration: 2000
								});
							}
						});
					}
				});
				//#endif
			},
			async OnCanvas() {
				this.loading = true;

				// this.$queue.showLoading('海报生成中...');
				_this.ctx = uni.createCanvasContext(_this.CanvasID, this);
				const C_W = uni.upx2px(_this.Width), //canvas宽度
					C_P = uni.upx2px(0), //canvas Paddng 间距
					C_Q = uni.upx2px(150); //二维码或太阳码宽高
				let _strlineW = 0; //文本宽度
				let _imgInfo = await _this.getImageInfo({
					imgSrc: _this.imgSrc
				}); //广告图
				let _QrCode = await _this.getImageInfo({
					imgSrc: _this.QrSrc
				}); //二维码或太阳码
				let r = [_imgInfo.width, _imgInfo.height];
				let q = [_QrCode.width, _QrCode.height];
        // console.log("宽度：：：：：：：",C_W)
				let imgW = C_W - C_P * 2;

        // console.log("图片宽度：：：：：：：",imgW)
				if (r[0] != imgW) {
					r[1] = Math.floor((imgW / r[0]) * r[1]);
					r[0] = imgW;
				}
				if (q[0] != C_Q) {
					q[1] = Math.floor((C_Q / q[0]) * q[1]);
					q[0] = C_Q;
				}
				_this.canvasW = C_W;
				_this.canvasH = r[1] + q[1] + 90;
				_this.ctx.setFillStyle(_this.CanvasBg); //canvas背景颜色
				_this.ctx.fillRect(0, 0, C_W, _this.canvasH); //canvas画布大小

				//添加图片展示
				_this.ctx.drawImage(_imgInfo.path, C_P, C_P, r[0], r[1]);
				//添加图片展示 end

				//设置文本
				_this.ctx.setFontSize(uni.upx2px(32)); //设置标题字体大小
				_this.ctx.setFillStyle(_this.TitleColor); //设置标题文本颜色
				let _strLastIndex = 0; //每次开始截取的字符串的索引
				let _strHeight = r[1] + C_P * 2 + 10; //绘制字体距离canvas顶部的初始高度
				let _num = 1;

				//设置文本 end
				//设置价格
        let otherWidth = 20;
				_strlineW = C_P+otherWidth;
				_strHeight += uni.upx2px(50);
				if (_this.PriceTxt != '') {
					//判断是否有销售价格
          var gradient = _this.ctx.createLinearGradient(0, 0, 150 , 0);
          gradient.addColorStop(0, "#69b3f2");    // 设置起始颜色
          gradient.addColorStop(1, "#8a5cef");   // 设置结束颜色
					_this.ctx.setFillStyle(gradient);
					_this.ctx.setFontSize(uni.upx2px(38));
          _this.ctx.font = 'bold 24px Arial';
          _this.ctx.fillText('邀请你加入' + _this.PriceTxt, _strlineW, _strHeight); //商品价格
					// _strlineW += _this.ctx.measureText('券后价 ￥' + _this.PriceTxt).width + uni.upx2px(10);
				}
				// #ifdef H5
				if (_this.PriceTxt != '' && _this.OriginalTxt != '') {
					//判断是否有销售价格且原价
					_this.ctx.setFillStyle(_this.OriginalColor);
					_this.ctx.setFontSize(uni.upx2px(24));
					_this.ctx.fillText(_this.OriginalTxt, _strlineW, _strHeight); //商品原价
				}
				// #endif
				_this.ctx.strokeStyle = _this.OriginalColor;
				_this.ctx.moveTo(_strlineW, _strHeight - uni.upx2px(10)); //起点
				_this.ctx.lineTo(_strlineW + _this.ctx.measureText(_this.OriginalTxt).width, _strHeight - uni.upx2px(10)); //终点
				_this.ctx.stroke();
				//设置价格 end

				//添加二维码
				_strHeight += uni.upx2px(0);
				_this.ctx.drawImage(_QrCode.path, r[0] - q[0] + C_P-10, _strHeight, q[0], q[1]);
				//添加二维码 end

				//添加推荐人与描述
				_this.ctx.setFillStyle(_this.TitleColor);
				_this.ctx.setFontSize(uni.upx2px(30));
        _strHeight += uni.upx2px(30);
				_this.ctx.fillText(_this.Referrer, C_P+10, _strHeight + q[1] / 2);
				_this.ctx.setFillStyle(_this.OriginalColor);
				_this.ctx.setFontSize(uni.upx2px(24));
				_this.ctx.fillText(_this.ViewDetails, C_P+10, _strHeight + q[1] / 2 + 20);
				//添加推荐人与描述 end
				//延迟后渲染至canvas上
				setTimeout(function() {
					_this.ctx.draw(true, ret => {
            _this.isShowCan = true
						uni.hideLoading();
						_this.getNewImage();
					});
				}, 600);
			},
			async getImageInfo({
				imgSrc
			}) {
				return new Promise((resolve, errs) => {
					uni.getImageInfo({
						src: imgSrc,
						success: function(image) {
							resolve(image);
						},
						fail(err) {
							errs(err);

							uni.showToast({
								title: '海报生成失败',
								mask: false,
								duration: 2000,
								icon: "none"
							});
							uni.hideLoading()
						}
					});
				});
			},
			getNewImage() {
				uni.canvasToTempFilePath({
						canvasId: _this.CanvasID,
						quality: 1,
						complete: res => {
							_this.tempFilePath = res.tempFilePath;
							_this.$emit('success', res);
							_this.loading = false;

							uni.showToast({
								title: '长按图片保存海报',
								mask: false,
								duration: 2000,
								icon: "none"
							});
							uni.hideLoading();
						}
					},
					this
				);
			}
		},
		mounted() {
			_this = this;
      uni.showLoading({
        title: '海报生成中......',
        mask: true
      })
			this.OnCanvas();
		}
	};
</script>

<style></style>
