<template>
<div>
	<div id="app">
		 
      		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">发布中列表</h1>
			<div style="text-align:right" @click="addOrder()">添加订单</div>
		</header>
		<div class="mui-content">
			<div class="mui-card">
				<div class="mui-card-header mui-card-media">
					<img src="../../assets/common/images/logo.png" />

					<div class="mui-media-body">
						<table style="width: 100%;">
							<tr>
								<td style="width: 70%">
									20160413142517-2-27
									<p>张威 18545454545</p>
								</td>
								<td style="width: 30%">
									<a style="font-size: 13px;">申请配送</a>
									<p><a style="font-size: 13px;">申请施工</a></p>
								</td>
							</tr>
						</table>

						

						
					</div>
					<!--<img class="mui-pull-left" src="../images/logo.png" width="34px" height="34px" />

					<h2>小M</h2>

					<p>发表于 2016-06-30 15:30</p>-->
				</div>
				<div class="mui-card-content" style="padding-left: 10px;">

					<p>预约时间：2016-04-14 10 至  2016-04-14 11</p>
					<p>客户需求：收工，可能需要带什么物品</p>
					<p>客户地址：武汉南湖</p>

				</div>
				<div class="mui-card-footer">
					<table style="width: 100%;">
						<tr @click="operateDetail()">
							<td style="width: 80%;">
								查看操作详情
							</td>
							<td style="width: 20%; text-align: right;">
								<img src="../../assets/common/images/select_right.png" />
							</td>
						</tr>
					</table>
				</div>
				<div class="mui-card-footer">
					<table style="width: 100%;">
						<tr @click="workDetail()">
							<td style="width: 80%;">
								查看工作详情
							</td>
							<td style="width: 20%; text-align: right;">
								<img src="../../assets/common/images/select_right.png" />
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		
		<div>
			<div class="mui-card">
				<div class="mui-card-header mui-card-media">
					<img src="../../assets/common/images/logo.png" />
					<div class="mui-media-body">
						<table style="width: 100%;">
							<tr>
								<td style="width: 70%">
									20161208222703-1-88
									<p>aaaa 14433255375</p>
								</td>
								<td style="width: 30%">
									<a style="font-size: 13px;">申请配送</a>
									<p><a style="font-size: 13px;">申请施工</a></p>
								</td>
							</tr>
						</table>
						
						
					</div>
				</div>
				<div class="mui-card-content" style="padding-left: 10px;">
					<p>预约时间：2017-02-14 10 至  2017-03-14 11</p>
					<p>客户需求：开工，可能需要带什么物品</p>
					<p>客户地址：武汉南北</p>
				</div>
				<div class="mui-card-footer">
					<table style="width: 100%;">
						<tr>
							<td style="width: 80%;">
								查看操作详情
							</td>
							<td style="width: 20%; text-align: right;">
								<img src="../../assets/common/images/select_right.png" />
							</td>
						</tr>
					</table>
				</div>
				<div class="mui-card-footer">
					<table style="width: 100%;">
						<tr>
							<td style="width: 80%;">
								查看工作详情
							</td>
							<td style="width: 20%; text-align: right;">
								<img src="../../assets/common/images/select_right.png" />
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		
		<div>
			<div class="mui-card">
				<div class="mui-card-header mui-card-media">
					<img src="../../assets/common/images/logo.png" />
					<div class="mui-media-body">
						<table style="width: 100%;">
							<tr>
								<td style="width: 70%">
									20160413142517-2-27
									<p>张威 18545454545</p>
								</td>
								<td style="width: 30%">
									<a style="font-size: 13px;">申请配送</a>
									<p><a style="font-size: 13px;">申请施工</a></p>
								</td>
							</tr>
						</table>
						
						
					</div>
					<!--<img class="mui-pull-left" src="../images/logo.png" width="34px" height="34px" />
					<h2>小M</h2>
					<p>发表于 2016-06-30 15:30</p>-->
				</div>
				<div class="mui-card-content" style="padding-left: 10px;">
					<p>预约时间：2016-04-14 10 至  2016-04-14 11</p>
					<p>客户需求：收工，可能需要带什么物品</p>
					<p>客户地址：武汉南湖</p>
				</div>
				<div class="mui-card-footer">
					<table style="width: 100%;">
						<tr >
							<td style="width: 80%;">
								查看操作详情
							</td>
							<td style="width: 20%; text-align: right;">
								<img src="../../assets/common/images/select_right.png" />
							</td>
						</tr>
					</table>
				</div>
				<div class="mui-card-footer">
					<table style="width: 100%;">
						<tr @click="workDetail()">
							<td style="width: 80%;">
								查看工作详情
							</td>
							<td style="width: 20%; text-align: right;">
								<img src="../../assets/common/images/select_right.png" />
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
     

	</div>
	<v-nav></v-nav>
	</div>
</template>
<script>
import nav from '@/components/tabbar'
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
	     
	      },
	      addOrder:function(){
	      	this.$router.push("addOrder");
	      },
	      operateDetail:function(){
	      	this.$router.push("operateDetail");
	      },
	      workDetail:function(){
	      	this.$router.push("workDetail");
	      }
	   },
	   components:{
			'v-nav':nav
		}
	})
</script>

<link  href="../../assets/common/styles/mui.min.css">
		<!--App自定义的css-->
<link  href="../../assets/common/styles/app.css" />
<style>
	
</style>
