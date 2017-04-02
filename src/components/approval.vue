<template>
<div>
	<table style="width: 100%;">
			<tr>
				<td style="width:15%;">
				</td>
				<td style="width:25%;">
				</td>
				<td style="width:30%;">
				</td>
				<td style="width:30%;">
				</td>
			</tr>
			
			<tr>
				<td colspan="2" style="font-family: '黑体';border-bottom: 1px solid gainsboro;height: 50px;font-size: 16px;text-align: left;">
					<img src="../assets/common/images/back.png" style="height: 25px;"/><font color="#ff0066">返回</font>
				</td>
				<td style="font-family: '宋体';font-weight: 800;border-bottom: 1px solid gainsboro;height: 50px;font-size: 21px;text-align: left;">
					审批
				</td>
				<td  style="font-family: '黑体';border-bottom: 1px solid gainsboro;height: 50px;font-size: 16px;text-align: right;">
					<img src="../assets/common/images/add.png" style="height: 20px;"/><font color="#ff0066">发起审批</font>
				</td>
			</tr>
			
			<tr>
				<td colspan="2" style="font-family: '宋体';border-bottom: 1px solid gainsboro;height: 40px;font-size: 14px;padding-left: 6px;font-weight: 600;">
					我的审批 <img src="../assets/common/images/red_one.png" style="height: 18px;"/>
				</td>
				<td colspan="2" style="border-bottom: 1px solid gainsboro;text-align: right;">
					<img id="i1" src="../assets/common/images/select_down.png" />
					<img id="i2" src="../assets/common/images/select_up.png"  style="display: none;"/>
				</td>
			</tr>
			
			<tr id="tr1" style="display: none;">
				<td colspan="4" style="height:50px;padding-left: 7px;font-size: 14px;">
					<img src="../assets/common/images/check.png" />&nbsp;&nbsp;&nbsp;<font color="#ff0066">我的审批</font>
				</td>
			</tr>
			
			<tr id="tr2" style="display: none;">
				<td></td>
				<td colspan="3" style="border-bottom: 1px solid gainsboro;height:40px;text-align: left;">
					<img src="../assets/common/images/wdfq.png" />&nbsp;&nbsp;&nbsp;我发起的
				</td>
			</tr>
			
			<tr id="tr3" style="display: none;">
				<td></td>
				<td colspan="3" style="height:40px;text-align: left;">
					<img src="../assets/common/images/recive.png" />&nbsp;&nbsp;&nbsp;&nbsp;我收到的
				</td>
			</tr>
			
			<tr id="tr4" style="display: none;">
				<td></td>
				<td colspan="3" style="height:40px;text-align: left;">
					<img src="../assets/common/images/wait.png" />&nbsp;&nbsp;&nbsp;&nbsp;待我审批
				</td>
			</tr>
			
			<tr @click="approvalDetail()">
				<td rowspan="2" style="border-bottom: 1px solid gainsboro;height:35px;">
					<img src="../assets/common/images/qingjia.png" />
				</td>
				<td colspan="2" style="height: 35px;" valign="bottom">
					&nbsp;&nbsp;&nbsp;何奔的请假
				</td>
				<td style="height: 35px;font-size: 10px;" valign="bottom">
					<font color="#999999">2017.03.29</font>
				</td>
			</tr>
			
			<tr @click="approvalDetail()">
				<td colspan="2" style="border-bottom: 1px solid gainsboro;height:35px; font-size: 10px;">
					<font color="#ff0066">&nbsp;&nbsp;&nbsp;&nbsp;等待我审批</font>
				</td>
				<td style="border-bottom: 1px solid gainsboro;height:35px;">
				</td>
			</tr>
			
			<tr >
				<td rowspan="2" style="border-bottom: 1px solid gainsboro;height:35px;">
					<img src="../assets/common/images/chuchai.png" />
				</td>
				<td colspan="2" style="height: 35px;" valign="bottom">
					&nbsp;&nbsp;&nbsp;王简的出差
				</td>
				<td style="height: 35px;font-size: 10px;" valign="bottom">
					<font color="#999999">2017.03.29</font>
				</td>
			</tr>
			
			<tr>
				<td colspan="2" style="border-bottom: 1px solid gainsboro;height:35px; font-size: 10px;">
					<font color="#999999">&nbsp;&nbsp;&nbsp;&nbsp;未通过</font>
				</td>
				<td style="border-bottom: 1px solid gainsboro;height:35px;">
				</td>
			</tr>
			
			<tr>
				<td rowspan="2" style="border-bottom: 1px solid gainsboro;height:35px;">
					<img src="../assets/common/images/tongyong.png" />
				</td>
				<td colspan="2" style="height: 35px;" valign="bottom">
					&nbsp;&nbsp;&nbsp;何奔的通用
				</td>
				<td style="height: 35px;font-size: 10px;" valign="bottom">
					<font color="#999999">2017.03.29</font>
				</td>
			</tr>
			
			<tr>
				<td colspan="2" style="border-bottom: 1px solid gainsboro;height:35px; font-size: 10px;">
					<font color="#999999">&nbsp;&nbsp;&nbsp;&nbsp;已通过</font>
				</td>
				<td style="border-bottom: 1px solid gainsboro;height:35px;">
				</td>
			</tr>
			
			<tr>
				<td rowspan="2" style="border-bottom: 1px solid gainsboro;height:35px;">
					<img src="../assets/common/images/qingjia.png" />
				</td>
				<td colspan="2" style="height: 35px;" valign="bottom">
					&nbsp;&nbsp;&nbsp;何奔的请假
				</td>
				<td style="height: 35px;font-size: 10px;" valign="bottom">
					<font color="#999999">2017.03.29</font>
				</td>
			</tr>
			
			<tr>
				<td colspan="2" style="border-bottom: 1px solid gainsboro;height:35px; font-size: 10px;">
					<font color="#999999">&nbsp;&nbsp;&nbsp;&nbsp;已通过</font>
				</td>
				<td style="border-bottom: 1px solid gainsboro;height:35px;">
				</td>
			</tr>
			
		</table>
		
		<table id="t2" style="width: 100%;padding-bottom: 0px;  display: none;">
			<tr>
				<td style="width: 25%;"></td>
				<td style="width: 25%;"></td>
				<td style="width: 25%;"></td>
				<td style="width: 25%;"></td>
			</tr>
			<tr>
				<td  style="font-size:12px;height: 100px; border-bottom: 1px solid gainsboro;text-align: center;padding-top: 15px;"valign="top">
					<img src="../assets/common/images/qingjia_f.png" /><br><font color="#999999">请假</font>
				</td>
				<td style="font-size:12px;height: 100px; border-bottom: 1px solid gainsboro;text-align: center;padding-top: 15px;"valign="top">
					<img src="../assets/common/images/chuchai_f.png" /><br><font color="#999999">出差</font>
				</td>
				<td style="font-size:12px;height: 100px; border-bottom: 1px solid gainsboro;text-align: center;padding-top: 15px;"valign="top">
					<img src="../assets/common/images/waichu_f.png" /><br><font color="#999999">外出</font>
				</td>
				<td style="font-size:12px;height: 100px; border-bottom: 1px solid gainsboro;text-align: center;padding-top: 15px;"valign="top">
					<img src="../assets/common/images/tongyong_f.png" /><br><font color="#999999">通用</font>
				</td>
			</tr>
			
			<tr >
				<td colspan="9" style="font-size:19px;height: 40px;text-align: center;">
					<font color="#666666">取消</font>
				</td>
			</tr>
			
		</table>
		<v-nav></v-nav>
		</div>
</template>
<script >
import nav from '@/components/tabbar'
	export default({
		data(){
			return {
				s:{}
			}
		},
		methods:{
           approvalDetail:function(){
           	this.$router.push("leave")
           }
		},
		components:{
			'v-nav':nav
		}
	})
</script>
<style>
	
</style>