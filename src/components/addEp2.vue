<template>
   <div>
   	  <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style="color: #e15252;font-size: 18px;line-height: 25px;">返回</a>
			<h5 class="mui-title" style="font-size: 14px;line-height: 35px;color: #333333;">创建企业</h5>
			<h5 class="mui-title" style="font-size: 12px;line-height: 65px;color: #333333;">2/2</h5>
				</header>
		

	<div class="mui-content" style="margin-top: 5px;;">
			<div class="mui-content-padded" style="margin: 5px;">
			
				<form class="mui-input-group">
					
					<div class="mui-input-row">
						<label>姓 名</label>
						<input type="text" placeholder="您的真实姓名">
					</div>
					
					<div class="mui-input-row" >
						
							<label>企业名称</label>
							<input type="text" placeholder="请填写企业名称，以便邀请同事加入">
						
						</div>
				</form>		
					</div>

					</div>
					
						<button  class="mui-btn mui-btn-block" type='button' style="width: 86%;margin-left: 7%;border-right: 0;border-top: 0;border-bottom: 0;background-color:#CF2D28;color:white;border: 1px solid #c8c7cc;margin-top: 20px;">完成</button>
						
						<button  class="mui-btn mui-btn-block" type='button' style="width: 86%;margin-left: 7%;border: 1px solod #FAFAFA;background-color:#FAFAFA;color:#DD524D;border: 1px solid #c8c7cc;margin-top: 20px;">加入现有企业</button>
   </div>
</template>


<script>	
    export default({
    	data(){
    		return {
    			s:{}
    		}
    	},
    	methods:{
    		next:function(){
    			this.$router.push("");
    		}
    	}
    })
</script>
<style src="../assets/common/styles/mui.min.css"></style>
<style src="../assets/common/styles/app.css"></style>
<style src="../assets/common/styles/mui.picker.css"></style>
<style src="../assets/common/styles/mui.poppicker.css"></style>
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
			.mui-input-row{
				font-size: 17px;
			}
			
			::-webkit-input-placeholder { /* WebKit browsers */  
			 font-size: 15px;text-align:left;
			}  
			:-moz-placeholder { /* Mozilla Firefox 4 to 18 */  
			  font-size: 15px;text-align:left; 
			}  
			::-moz-placeholder { /* Mozilla Firefox 19+ */  
			    font-size: 15px;text-align:left; 
			}  
			:-ms-input-placeholder { /* Internet Explorer 10+ */  
			    font-size: 15px;text-align:left;
			}  
						
			
			input[type=text]{
    text-align:left;
}

</style>