<template>
	<div>
		<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style="color: #e15252;font-size: 18px;line-height: 25px;">返回</a>
			<span class="mui-title" style="color: #CF2D28; ">新增客户</span>
			<a class=" mui-icon  mui-pull-right " style="color: #e15252; font-size: 18px;line-height: 25px;">添加</a>
		</header>
	<div class="mui-content" style="margin-top: 5px;;">
			<div class="mui-content-padded" style="margin: 5px;">
			
				<form class="mui-input-group">
					
					<div class="mui-input-row">
						<label>客户名称</label>
						<input type="text" placeholder="请填写客户名称">
					</div>
								
				</form>
					<form class="mui-input-group"style="margin-top: 10px;">
			
				<div class="mui-input-row">
						<label>客户分类</label>
						<input type="text" id='showUserPicker'  placeholder="请选择客户的分类">
					</div>	
					</form>
						
				</div>
			
				<div class="mui-active" style="width: 35%;height: 123px;display: inline-block;position: absolute;line-height: 120px;background-color:#FFFFFF;text-align: center;border-top:1px solid #c8c7cc;border-right: 1px solid #c8c7cc;">客户地址</div>
						<button id='showCityPicker3' class="mui-btn mui-btn-block" type='button' style="width: 65%;margin-left: 35%;border-right: 0;border-top: 0;border-bottom: 0;background-color:#FFFFFF;border-left: none;border-top: 1px solid #c8c7cc;">省/市/区</button>
			
					
						
						<input type="text"  placeholder="请填写客户名称" style="width: 65%;margin-left: 35%;border-right: 0;border-top: 0;border-bottom: 0;background-color:#FFFFFF;margin-top: -2px;border-top: 1px solid #c8c7cc;border-left: none;">
						<button  class="mui-btn mui-btn-block" type='button' style="width: 65%;margin-left: 35%;border-right: 0;border-top: 0;border-bottom: 0;background-color:#FFFFFF;border-left: none;border-top: 1px solid #c8c7cc;margin-top: -15px;">地图定位</button>
			
			</div>
			<div class="mui-content">
				
				<button  class="mui-btn mui-btn-block" type='button' style="width: 99%;margin-top: -20px;">添加联系人</button>
			
				
			</div>
			<div id='userResult' class="ui-alert"></div>
				<div id='cityResult3' class="ui-alert"></div>

	</div>
</template>
<script >
    import {cityData3} from '../assets/common/js/city.data-3.js'
	import city from '../assets/common/js/city.data.js'
	import pick from '../assets/common/js/mui.picker.js'
	import pop from '../assets/common/js/mui.poppicker.js'
	
	export default({
		data(){
			return {
				s:{}
			}
		},
		created(){
            this.$nextTick(function(){
            	this.initDom();
            })
		},
		methods:{
			initDom:function(){
                 (function($, doc) {
				$.init();
				$.ready(function() {
					//普通示例
					var userPicker = new $.PopPicker();
					userPicker.setData([{
						value: 'A',
						text: 'A级'
					}, {
						value: 'B',
						text: 'B级'
					}, {
						value: 'C',
						text: 'C级'
					}, {
						value: 'D',
						text: 'D级'
					}]);
					var showUserPickerButton = doc.getElementById('showUserPicker');
					var userResult = doc.getElementById('userResult');
					showUserPickerButton.addEventListener('tap', function(event) {
						userPicker.show(function(items) {
							userResult.innerText = JSON.stringify(items[0]);
							//返回 false 可以阻止选择框的关闭
							//return false;
						});
					}, false);
					//-----------------------------------------

					//-----------------------------------------
					//					//级联示例
					var cityPicker3 = new $.PopPicker({
						layer: 3
					});
					cityPicker3.setData(cityData3);
					var showCityPickerButton = doc.getElementById('showCityPicker3');
					var cityResult3 = doc.getElementById('cityResult3');
					showCityPickerButton.addEventListener('tap', function(event) {
						cityPicker3.show(function(items) {
							cityResult3.innerText = "你选择的城市是:" + (items[0] || {}).text + " " + (items[1] || {}).text + " " + (items[2] || {}).text;
							//返回 false 可以阻止选择框的关闭
							//return false;
						});
					}, false);
				});
			})(mui, document);
			}
		}
	})
</script>
<!-- 引入外部css样式 -->
<style src="../assets/common/styles/mui.poppicker.css"/>
<style src="../assets/common/styles/app.css"/>
<style src="../assets/common/styles/mui.picker.css"/>
<style >
	.mui-btn {
				font-size: 16px;
				padding: 8px;
				margin: 3px;
			}
			h5.mui-content-padded {
				margin-left: 3px;
				margin-top: 20px !important;
			}
			h5.mui-content-padded:first-child {
				margin-top: 12px !important;
			}
			.ui-alert {
				text-align: center;
				padding: 20px 10px;
				font-size: 16px;
			}
			body{font-family: "微软雅黑";margin: 0;padding: 0;}
			html,
			body {
				background-color: #efeff4;
			}
			.mui-bar .mui-pull-left .mui-icon {
				padding-right: 5px;
				font-size: 20px;
			}
			.mui-bar .mui-btn {
				font-weight: normal;
				font-size: 17px;
			}
			.mui-bar .mui-btn-link {
				top: 1px;
			}
			input[type='text']{
   			 text-align:right;
			}
</style>