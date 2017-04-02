<template>
	<div>
			<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style="color: #e15252;font-size: 18px;line-height: 25px;">返回</a>
			<span class="mui-title" style="color: #CF2D28; ">跟进记录</span>
			<a class=" mui-icon  mui-pull-right " style="color: #e15252; font-size: 18px;line-height: 25px;">提交</a>
		   </header>
		
	<div class="mui-content" style="margin-top: 5px;;">
			<div class="mui-content-padded" style="margin: 5px;">
			
				  <form class="mui-input-group">
					
					<div class="mui-input-row">
						<label>标题</label>
						<input type="text" placeholder="请填写标题名称">
					</div>
					
					
					<div class="mui-input-row" style="margin: 10px 5px;">
					<textarea id="textarea" rows="6" placeholder="请填写跟进内容"></textarea>
					</div>
					 </form>
				 </div>
				
		</div>
	</div>
</template>
<script>
	
</script>
<style>
      
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
				font-size: 28px;
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
