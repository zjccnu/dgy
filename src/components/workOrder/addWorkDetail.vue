<template>
	
   <div>
   	 
     <div>
			<table style="width:100%;">
				<tr>
					<td style="width:9%;">
					</td>
					<td style="width:9%;">
					</td>
					<td style="width:9%;">
					</td>
					<td style="width:18%;">
					</td>
					<td style="width:9%;">
					</td>
					<td style="width:18%;">
					</td>
					<td style="width:9%;">
					</td>
					<td style="width:16%;">
					</td>
					<td style="width:3%;">
					</td>
				</tr>
				
				<tr>
					<td colspan="2" style="font-family: '黑体';border-bottom: 1px solid gainsboro;height: 50px;font-size: 18px;text-align: left;" @click="back()">
						<img src="../../assets/common/images/back.png" /><font color="#ff0066">返回</font>
					</td>
					<td colspan="5" style="font-family: '宋体';font-weight: 800;border-bottom: 1px solid gainsboro;height: 50px;font-size: 20px;text-align: center;">
						添加工作
					</td>
					<td colspan="2" style="font-family: '黑体';border-bottom: 1px solid gainsboro;height: 50px;font-size: 18px;text-align: right;">
						<font color="#ff0066">提交</font>
					</td>
				</tr>
				
				<tr>
					<td colspan="2" style="font-family: '黑体';border-bottom: 1px solid gainsboro;height: 10px;background-color: #eeeeee;text-align: center;">
					</td>
					<td colspan="6" style="font-family: '黑体';border-bottom: 1px solid gainsboro;height: 10px;background-color: #eeeeee;text-align: right;">
					</td>
					<td style="border-bottom: 1px solid gainsboro;height: 10px;background-color: #eeeeee;"></td>
				</tr>
				
				<tr>
					<td colspan="9" style="padding-left:5px ;">
						填写工作内容:
					</td>
				</tr>
				
			</table>
		</div>
		<div class="mui-input-row" style="margin-top: 10px;text-align: center;">
			<textarea id="textarea" rows="5"  placeholder="多行文本框" style="width: 96%;"></textarea>
		</div>
		<div>
			<table style="width: 100%;">
				<tr>
				<td style="height: 40px;width: 30%; text-align: left; padding-left:5px ;">
					添加照片
				</td>
				<td style="height: 50px;text-align: right; padding-right:5px;">
					<img src="../../assets/common/images/camera.png" />
				</td>
				<td style="border-bottom: 1px solid gainsboro;height: 50px;"></td>
			</tr>
			</table>
		</div>

   </div>

</template>
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
			body{font-family: "微软雅黑";margin: 0;padding: 0;font-size: 16px;}
			::placeholder{
				font-size: 15px;
			}
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
<link href="../../assets/common/styles/app.css" />
<link href="../../assets/common/styles/mui.picker.css" />
<link href="../../assets/common/styles/mui.poppicker.css" />
<script >
	export default({
		data(){
			return {
				s:{}
			}
		},
		methods:{
			back:function(){
				this.$router.go(-1);
			}
		}
	})
</script>