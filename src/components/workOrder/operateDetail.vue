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
				<td colspan="2" style="font-family: '黑体';border-bottom: 1px solid gainsboro;height: 50px;font-size: 18px;text-align: left;">
					<img src="../../assets/common/images/back.png" /><font color="#ff0066" @click="back()">返回</font>
				</td>
				<td colspan="5" style="font-family: '宋体';font-weight: 800;border-bottom: 1px solid gainsboro;height: 50px;font-size: 20px;text-align: center;">
					订单状态
				</td>
			</tr>
			
			<tr>
				<td colspan="9" style="background-color: #eeefff;height: 8px;"></td>
			</tr>
			
			<tr>
				<td colspan="2" class="c2">
					<img src="../../assets/common/images/point.png" /> 王简
				</td>
				<td colspan="3" class="c1">
					正在配送订单
				</td>
				<td colspan="4" class="c1">
					2017-2-27 11:27
				</td>
			</tr>
			
			<tr>
				<td colspan="2" class="c2">
					<img src="../../assets/common/images/point.png" /> 王简
				</td>
				<td colspan="3" class="c1">
					订单配送完成
				</td>
				<td colspan="4" class="c1">
					2017-2-27 11:27
				</td>
			</tr>
			
			<tr>
				<td colspan="2" class="c2">
					<img src="../../assets/common/images/point.png" /> 李亚光
				</td>
				<td colspan="3" class="c1">
					正在施工
				</td>
				<td colspan="4" class="c1">
					2017-2-27 11:27
				</td>
			</tr>
			
			<tr>
				<td colspan="2" class="c2">
					<img src="../../assets/common/images/point.png" /> 何奔
				</td>
				<td colspan="3" class="c1">
					施工完成
				</td>
				<td colspan="4" class="c1">
					2017-2-27 11:27
				</td>
			</tr>
			
		</table>
    

	</div>
</template>
<style >
	        .c1 {
				height: 40px; 
				border-bottom: 1px solid gainsboro; 
				text-align: left;
				padding-left: 20px;
				font-size: 10px;
			}
			.c2 {
				height: 40px; 
				border-bottom: 1px solid gainsboro; 
				padding-left: 5px;
				font-size: 10px;
			}
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
			}
		}
	})
</script>