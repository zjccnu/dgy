<template>
	<div>
			<div class="mui-navbar-inner mui-bar mui-bar-nav">
			<button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
				<span class="mui-icon mui-icon-left-nav"></span>
			</button>
			<h1 class="mui-center mui-title">企业详情</h1>
		</div>
		<div style="margin-top: 55px;width: 100%;height: 55px;">
			<div style="width: 20%;float:left">
				<img src="../../assets/common/images/qq.png" style="width: 45px;height: 45px;">
			</div>
			<div style="width: 80%;float:left;padding-top: 10px;">
				公司名
			</div>
		</div>
		<div style="height: 1px;width: 100%;background:#E6E8EA; overflow:hidden;"></div>
		<ul>
			<li>管理员：</li>
			<li>企业人数：</li>
			<li>创建时间：</li>
		</ul>
			<div style="width:100%;height:10px;background:#f5f5f5; clear:both;"></div>

				<form class="mui-input-group">
					<div class="mui-input-row">
						<label>姓 名</label>
						<input type="text" placeholder="输入真实姓名">
					</div>
					<div class="mui-input-row">
						<label>手 机 号</label>
						<input type="text" placeholder="输入手机号">
					</div>
					<div class="mui-input-row mui-password">
						<label>密 码</label>
						<input type="password" class="mui-input-password">
					</div>
				</form>
				<div class="mui-input-row" style="width: 100%;">
					<textarea id="textarea" rows="5" placeholder="填写身份描述，以便快速通过验证"></textarea>
				</div>
				<div style="margin-top: 10px;width: 100%;text-align:center">
					<button style="width: 90%;background-color:#E15151 ;color: white;">完成</button>
				</div>

	</div>
</template>
<script >
	export default({
		data(){
			return {
				s:{}
			}
		},
		methods:{
			next:function(){
				this.$router.push("enterpriceDetail");
			}
		}
	})
</script>
<link  href="../../assets/common/styles/mui.min.css">
<link  href="../../assets/common/styles/mui.min.css">
<link  href="../../assets/common/styles/feedback.css" />
<style >
		html,
			body {
				background-color: #efeff4;
			}
			.mui-views,
			.mui-view,
			.mui-pages,
			.mui-page,
			.mui-page-content {
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				width: 100%;
				height: 100%;
				background-color: #efeff4;
			}
			.mui-pages {
				top: 46px;
				height: auto;
			}
			.mui-scroll-wrapper,
			.mui-scroll {
				background-color: #efeff4;
			}
			.mui-page.mui-transitioning {
				-webkit-transition: -webkit-transform 300ms ease;
				transition: transform 300ms ease;
			}
			.mui-page-left {
				-webkit-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
			.mui-ios .mui-page-left {
				-webkit-transform: translate3d(-20%, 0, 0);
				transform: translate3d(-20%, 0, 0);
			}
			.mui-navbar {
				position: fixed;
				right: 0;
				left: 0;
				z-index: 10;
				height: 44px;
				background-color: #f7f7f8;
			}
			.mui-navbar .mui-bar {
				position: absolute;
				background: transparent;
				text-align: center;
			}
			.mui-android .mui-navbar-inner.mui-navbar-left {
				opacity: 0;
			}
			.mui-ios .mui-navbar-left .mui-left,
			.mui-ios .mui-navbar-left .mui-center,
			.mui-ios .mui-navbar-left .mui-right {
				opacity: 0;
			}
			.mui-navbar .mui-btn-nav {
				-webkit-transition: none;
				transition: none;
				-webkit-transition-duration: .0s;
				transition-duration: .0s;
			}
			.mui-navbar .mui-bar .mui-title {
				display: inline-block;
				width: auto;
			}
			.mui-page-shadow {
				position: absolute;
				right: 100%;
				top: 0;
				width: 16px;
				height: 100%;
				z-index: -1;
				content: '';
			}
			.mui-page-shadow {
				background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, .01) 50%, rgba(0, 0, 0, .2) 100%);
				background: linear-gradient(to right, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, .01) 50%, rgba(0, 0, 0, .2) 100%);
			}
			.mui-navbar-inner.mui-transitioning,
			.mui-navbar-inner .mui-transitioning {
				-webkit-transition: opacity 300ms ease, -webkit-transform 300ms ease;
				transition: opacity 300ms ease, transform 300ms ease;
			}
			.mui-page {
				display: none;
			}
			.mui-pages .mui-page {
				display: block;
			}
			.mui-page .mui-table-view:first-child {
				margin-top: 15px;
			}
			.mui-page .mui-table-view:last-child {
				margin-bottom: 30px;
			}
			.mui-table-view {
				margin-top: 20px;
			}
			
			.mui-table-view span.mui-pull-right {
				color: #999;
			}
			.mui-table-view-divider {
				background-color: #efeff4;
				font-size: 14px;
			}
			.mui-table-view-divider:before,
			.mui-table-view-divider:after {
				height: 0;
			}
			.head {
				height: 40px;
			}
			#head {
				line-height: 40px;
			}
			.head-img {
				width: 40px;
				height: 40px;
			}
			#head-img1 {
				position: absolute;
				bottom: 10px;
				right: 40px;
				width: 40px;
				height: 40px;
			}
			.update {
				font-style: normal;
				color: #999999;
				margin-right: -25px;
				font-size: 15px
			}
			.mui-fullscreen {
				position: fixed;
				z-index: 20;
				background-color: #000;
			}
			.mui-ios .mui-navbar .mui-bar .mui-title {
				position: static;
			}
			/*问题反馈在setting页面单独的css*/
			#feedback .mui-popover{
				position: fixed;
			}
			#feedback .mui-table-view:last-child {
			    margin-bottom: 0px;
			}
			#feedback .mui-table-view:first-child {
			    margin-top: 0px;
			}
			/*问题反馈在setting页面单独的css==end*/
</style>
