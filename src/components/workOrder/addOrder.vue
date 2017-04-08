<template>
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
				<td onclick="history.go(-1)" colspan="2" style="font-family: '黑体';border-bottom: 1px solid gainsboro;height: 50px;font-size: 18px;text-align: left;">
					<img src="../../assets/common/images/back.png" /><font color="#ff0066">返回</font>
				</td>
				<td colspan="5" style="font-family: '宋体';font-weight: 800;border-bottom: 1px solid gainsboro;height: 50px;font-size: 20px;text-align: center;">
					新建工单
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
				<td colspan="3" style="font-weight:600;font-size:16px;border-bottom: 1px solid gainsboro;height: 50px; text-align: center;">
					施工类型
				</td>
				<td colspan="4" style="font-size:16px;font-family:'黑体';border-bottom: 1px solid gainsboro;height: 50px;">
					&nbsp;&nbsp;<font color="#999999">请选择(必填)</font>
				</td>
				<td style="border-bottom: 1px solid gainsboro;height: 50px;text-align: right;">
					<img src="../../assets/common/images/select_right.png" />
				</td>
				<td style="border-bottom: 1px solid gainsboro;height: 50px;"></td>
			</tr>
			
			<tr>
				<td colspan="3" style="border-bottom: 1px solid gainsboro;font-weight:600;font-size:16px;height: 50px; text-align: center;">
					开始时间
				</td>
				<td colspan="4" style="border-bottom: 1px solid gainsboro;font-size:16px;font-family:'黑体';height: 50px;">
					&nbsp;&nbsp;<font color="#999999">请选择(必填)</font>
				</td>
				<td style="border-bottom: 1px solid gainsboro;height: 50px;text-align: right;">
					<img src="../../assets/common/images/time.png" />
				</td>
				<td style="border-bottom: 1px solid gainsboro;height: 50px;"></td>
			</tr>
			
			<tr>
				<td colspan="3" style="font-weight:600;font-size:16px;border-bottom: 1px solid gainsboro;height: 50px; text-align: center;">
					结束时间
				</td>
				<td colspan="4" style="font-size:16px;font-family:'黑体';border-bottom: 1px solid gainsboro;height: 50px;">
					&nbsp;&nbsp;<font color="#999999">请选择(必填)</font>
				</td>
				<td style="border-bottom: 1px solid gainsboro;height: 50px;text-align: right;">
					<img src="../../assets/common/images/time.png" />
				</td>
				<td style="border-bottom: 1px solid gainsboro;height: 50px;"></td>
			</tr>
			
			<tr>
				<td colspan="3" style="font-weight:600;font-size:16px; height: 30px;text-align: center;">
					订单需求
				</td>
				<td colspan="6" style="height: 30px;"></td>
			</tr>
			
			<tr>
				<td colspan="9" style="height: 120px;border-bottom: 1px solid gainsboro;">
					<!--<textarea style="width: 100%;height: 100%;border: none;color: #999999;">  请输入文本
					</textarea>-->
					<div class="mui-input-row" style="margin-top: 10px; text-align: center;">
					<textarea id="textarea" rows="5" placeholder="多行文本框" style="width: 98%;"></textarea>
					</div>
				</td>
			</tr>
			
			<tr>
				<td colspan="3" style="font-weight:600;font-size:16px;height: 35px; text-align: left;" valign="bottom">
					&nbsp;&nbsp;选择客户
				</td>
				<td colspan="4" style="font-size:12px;height: 35px;text-align: left;" valign="bottom">
					<font color="#999999">&nbsp;&nbsp;轻点头像删除</font>
				</td>
				<td style="height: 35px;text-align: right;">
				</td>
				<td style="height: 35px;"></td>
			</tr>
			
			<tr>
				<td colspan="9" style="height: 60px;border-bottom: 1px solid gainsboro;">
					&nbsp;&nbsp;<img src="../../assets/common/images/spr_add.png" style="width: 40px; height: 40px;"/>
				</td>
			</tr>
			
			
			<tr>
				<td colspan="9" style="height: 100px;">
				</td>
			</tr>
			
		</table>

	</div>
</template>
<script >
	
</script>
<link href="../../assets/common/styles/mui.picker.css" />
<link href="../../assets/common/styles/mui.poppicker.css"/>
<style>
	
</style>