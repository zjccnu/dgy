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
				<td colspan="2" style="font-family: '黑体';border-bottom: 1px solid gainsboro;height: 50px;font-size: 18px;text-align: left;" @click="back()">
					<img src="../../assets/common/images/back.png" /><font color="#ff0066">返回</font>
				</td>
				<td colspan="5" style="font-family: '宋体';font-weight: 800;border-bottom: 1px solid gainsboro;height: 50px;font-size: 20px;text-align: center;">
					工作备注
				</td>
				<td colspan="2" style="font-family: '黑体';border-bottom: 1px solid gainsboro;height: 50px;font-size: 18px;text-align: right;" @click="addWorkDetail()">
					<font color="#ff0066">添加</font>
				</td>
			</tr>
			
			<tr>
				<td colspan="9" style="background-color: #eeefff;height: 8px;"></td>
			</tr>
			
			<tr>
				<td colspan="9" style="height: 8px;"></td>
			</tr>
			
			<tr>
				<td rowspan="2" colspan="2" style="height: 40px;text-align: center;">
					<img src="../../assets/common/images/heben.png" style="width: 40px; height: 40px;"/>
				</td>
				<td colspan="3" style="height: 40px;border-left: 1px solid gainsboro;border-top:1px solid gainsboro ;">
					何奔
				</td>
				<td colspan="3" style="height: 40px;border-right: 1px solid gainsboro;border-top:1px solid gainsboro ;text-align: right;">
					2017-2-27 11:27
				</td>
				<td></td>
			</tr>
			
			<tr>
				<td></td>
			</tr>
			
			<tr>
				<td colspan="1" style="border-right:1px solid gainsboro ;height: 15px;"></td>
				<td colspan="1" style="height:15px;"></td>
				<td rowspan="2" colspan="6" style="height:70px;border-bottom:1px solid gainsboro;border-left: 1px solid gainsboro;" valign="top">
					客户不在家<br><br>
					<img src="../../assets/common/images/in.png" style="height: 100px; width: 100px;"/>
					<img src="../../assets/common/images/in.png" style="height: 100px; width: 100px;"/>
					<img src="../../assets/common/images/in.png" style="height: 100px; width: 100px;"/>
					<img src="../../assets/common/images/in.png" style="height: 100px; width: 100px;"/>
				</td>
				<td rowspan="2" colspan="1" style="height:70px;border-left: 1px solid gainsboro;"></td>
			</tr>
			
			<tr>
				<td colspan="1" style="border-right:1px solid gainsboro ;height: 15px;"></td>
				<td colspan="1" style="height: 15px;"></td>
			</tr>
			
			<tr>
				<td style="height: 15px; border-right:1px solid gainsboro ;"></td>
				<td colspan="8"></td>
			</tr>
			
			<tr>
				<td rowspan="2" colspan="2" style="height: 40px;text-align: center;">
					<img src="../../assets/common/images/heben.png" style="width: 40px; height: 40px;"/>
				</td>
				<td colspan="3" style="height: 40px;border-left: 1px solid gainsboro;border-top:1px solid gainsboro ;">
					何奔
				</td>
				<td colspan="3" style="height: 40px;border-right: 1px solid gainsboro;border-top:1px solid gainsboro ;text-align: right;">
					2017.2.27 11:27
				</td>
				<td></td>
			</tr>
			
			<tr>
				<td></td>
			</tr>
			
			<tr>
				<td colspan="1" style="border-right:1px solid gainsboro ;height: 15px;"></td>
				<td colspan="1" style="height:15px;"></td>
				<td rowspan="2" colspan="6" style="height:70px;border-bottom:1px solid gainsboro;border-left: 1px solid gainsboro;" valign="top">
					客户不在家<br><br>
					<img src="../../assets/common/images/in.png" style="height: 100px; width: 100px;"/>
					<img src="../../assets/common/images/in.png" style="height: 100px; width: 100px;"/>
				</td>
				<td rowspan="2" colspan="1" style="height:70px;border-left: 1px solid gainsboro;"></td>
			</tr>
			
			<tr>
				<td colspan="1" style="border-right:1px solid gainsboro ;height: 15px;"></td>
				<td colspan="1" style="height: 15px;"></td>
			</tr>
			
			<tr>
				<td style="height: 15px; border-right:1px solid gainsboro ;"></td>
				<td colspan="8"></td>
			</tr>
			
			<tr>
				<td rowspan="2" colspan="2" style="height: 40px;text-align: center;">
					<img src="../../assets/common/images/heben.png" style="width: 40px; height: 40px;"/>
				</td>
				<td colspan="3" style="height: 40px;border-left: 1px solid gainsboro;border-top:1px solid gainsboro ;">
					何奔
				</td>
				<td colspan="3" style="height: 40px;border-right: 1px solid gainsboro;border-top:1px solid gainsboro ;text-align: right;">
					2017.2.27 11:27
				</td>
				<td></td>
			</tr>
			
			<tr>
				<td></td>
			</tr>
			
			<tr>
				<td colspan="1" style="height: 15px;"></td>
				<td colspan="1" style="height:15px;"></td>
				<td rowspan="2" colspan="6" style="height:70px;border-bottom:1px solid gainsboro;border-left: 1px solid gainsboro;" valign="top">
					配送完毕<br><br>
					<img src="../../assets/common/images/in.png" style="height: 100px; width: 100px;"/>
				</td>
				<td rowspan="2" colspan="1" style="height:70px;border-left: 1px solid gainsboro;"></td>
			</tr>
			
			<tr>
				<td colspan="1" style="height: 15px;"></td>
				<td colspan="1" style="height: 15px;"></td>
			</tr>
			
			<tr>
				<td style="height: 15px;"></td>
				<td colspan="8"></td>
			</tr>
			
			
		</table>

	</div>
</template>
<style>
	
</style>
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
          },
          addWorkDetail:function(){
          	this.$router.push("addWorkDetail");
          }
		}
	})

</script>