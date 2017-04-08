<template>
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
					<img src="../assets/common/images/back.png" /><font color="#ff0066">返回</font>
				</td>
				<td colspan="5" style="font-family: '宋体';font-weight: 800;border-bottom: 1px solid gainsboro;height: 50px;font-size: 20px;text-align: center;">
					请假
				</td>
				<td colspan="2" style="font-family: '黑体';border-bottom: 1px solid gainsboro;height: 50px;font-size: 18px;text-align: right;">
					<font color="#ff0066">提交</font>
				</td>
			</tr>
			<tr>
				<td colspan="2" style="font-family: '黑体';font-size:14px;border-bottom: 1px solid gainsboro;height: 35px;background-color: #eeeeee;text-align: center;">
					<font color="#666666">请假</font>
				</td>
				<td colspan="6" style="font-family: '黑体';font-size:14px;border-bottom: 1px solid gainsboro;height: 35px;background-color: #eeeeee;text-align: right;">
					<font color="#666666">已存草稿: 15:09</font>
				</td>
				<td style="border-bottom: 1px solid gainsboro;height: 35px;background-color: #eeeeee;"></td>
			</tr>
			<tr onclick="location.href='http://127.0.0.1:8020/shenhe/SP_qjOption.html'">
				<td colspan="3" style="font-weight:600;font-size:16px;border-bottom: 1px solid gainsboro;height: 50px; text-align: center;">
					请假类型
				</td>
				<td colspan="4" style="font-size:16px;font-family:'黑体';border-bottom: 1px solid gainsboro;height: 50px;">
					&nbsp;&nbsp;<font color="#999999">请选择(必填)</font>
				</td>
				<td style="border-bottom: 1px solid gainsboro;height: 50px;text-align: right;">
					<img src="../assets/common/images/select_right.png" />
				</td>
				<td style="border-bottom: 1px solid gainsboro;height: 50px;"></td>
			</tr>
			
			<tr>
				<td colspan="3" style="font-weight:600;font-size:16px;height: 50px; text-align: center;">
					开始时间
				</td>
				<td colspan="4" style="font-size:16px;font-family:'黑体';height: 50px;">
					&nbsp;&nbsp;<font color="#999999">请选择(必填)</font>
				</td>
				<td style="height: 50px;text-align: right;">
					<img src="../assets/common/images/time.png" />
				</td>
				<td style="height: 50px;"></td>
			</tr>
			
			<tr>
				<td colspan="3" style="font-weight:600;font-size:16px;border-bottom: 1px solid gainsboro;height: 50px; text-align: center;">
					结束时间
				</td>
				<td colspan="4" style="font-size:16px;font-family:'黑体';border-bottom: 1px solid gainsboro;height: 50px;">
					&nbsp;&nbsp;<font color="#999999">请选择(必填)</font>
				</td>
				<td style="border-bottom: 1px solid gainsboro;height: 50px;text-align: right;">
					<img src="../assets/common/images/time.png" />
				</td>
				<td style="border-bottom: 1px solid gainsboro;height: 50px;"></td>
			</tr>
			<tr>
				<td colspan="3" style="font-weight:600;font-size:16px;height: 50px; text-align: center;">
						请假时长
				</td>
				<td colspan="4" style="font-size:16px;font-family:'黑体';height: 50px;">
					&nbsp;&nbsp;<font color="#999999">请选择(必填)</font>
				</td>
				<td style="height: 50px;text-align: right;">
				</td>
				<td style="height: 50px;"></td>
			</tr>
			
			<tr>
				<td colspan="3" style="font-weight:600;font-size:16px; height: 30px;text-align: center;">
					请假事由
				</td>
				<td colspan="6" style="height: 30px;"></td>
			</tr>
			<tr>
				<td colspan="9" style="height: 120px;border-bottom: 1px solid gainsboro;">
					<textarea style="width: 100%;height: 100%;border: none;color: #999999;">  请输入文本
					</textarea>
				</td>
			</tr>
			
			<tr>
				<td colspan="3" style="font-weight:600;font-size:16px;border-bottom: 1px solid gainsboro;height: 50px; text-align: center;">
					照片&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</td>
				<td colspan="4" style="font-size:16px;font-family:'黑体';border-bottom: 1px solid gainsboro;height: 50px;">
				</td>
				<td style="border-bottom: 1px solid gainsboro;height: 50px;text-align: right;">
					<img src="../assets/common/images/camera.png" />
				</td>
				<td style="border-bottom: 1px solid gainsboro;height: 50px;"></td>
			</tr>
			
			<tr>
				<td colspan="3" style="font-weight:600;font-size:16px;height: 35px; text-align: center;" valign="bottom">
					审批人&nbsp;&nbsp;&nbsp;&nbsp;
				</td>
				<td colspan="4" style="font-size:12px;height: 35px;text-align: left;" valign="bottom">
					<font color="#999999">轻点头像删除</font>
				</td>
				<td style="height: 35px;text-align: right;">
				</td>
				<td style="height: 35px;"></td>
			</tr>
			
			<tr>
				<td colspan="9" style="height: 60px;border-bottom: 1px solid gainsboro;">
					&nbsp;&nbsp;<img src="../assets/common/images/spr_add.png" style="width: 40px; height: 40px;"/>
				</td>
			</tr>
			
			<tr>
				<td colspan="9" style="height: 100px;">
				</td>
			</tr>
			
		</table>
</template>
<script>
	
</script>
<style>
	
</style>