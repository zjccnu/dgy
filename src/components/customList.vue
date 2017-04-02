<template>
<div>

	<div>
		<div class="row1"><img class="as" src="../assets/common/images/as.png">
		<div class="center">客户</div>
		<img class="add" src="../assets/common/images/add.png" @click="addCustom()">
		</div>
	</div>
	<div class="row3">
		<div class="search"><i class="iconfont">
&#xe55d;
</i>共 家客户</div>
	</div>
	<div class="row4" @click="detail()">
		<div><span class="user">狒狒</span>  <div class="level">A级</div></div>
		<div> <span class="info">&nbsp;&nbsp;新时代上午中心</span></div>
		<div> <span class="info">何奔</span></div>
	</div>


	
       
	
      <v-nav></v-nav> 
	</div>
</template>
<script>
  import nav from '@/components/tabbar'
	export default({
		name:'customList',
		data(){
			return {
				s:{},
			}
		},
		components:{
			'v-nav':nav
		},
		methods:{
			addCustom:function(){
             this.$router.push("addCustom");
			},
            detail:function(){
            	this.$router.push("custom")
            }
		}


	})
</script>
<style>
	.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
		*{margin: 0;padding: 0;font-family: microsoft yahei;}
		.row1{width: 100%;height: 30px;border-bottom: 1px solid #e6e8e1;padding: 3px;}
		.end{
			width: 100%;
			position: fixed;
			background-color: #f0f0f1;
			bottom: 0px;
		}
		.end>div{
			display: inline-block;
			width: 22%;
			text-align: center;

		}
		.row3{
			
			background-color: #ededed;
			height: 40px;
			width: 100%;
			padding: 1px;z-index: 1;
		}
		.search{
			background-color: white;
			width: 80%;
			margin: 0 auto;
			text-align: center;
			height: 30px;
			line-height: 30px;
			border-radius: 5px;
            margin-top: 5px;
		}
  		
		.center{text-align: center;height: 100%;line-height: 30px;font-size: 23px; font-weight: 2px;}
		.add{position: absolute;right: 3px;top: 3px; height: 25px;width: 25px;}
		.as{position: absolute;left: 3px;top: 3px;height: 25px;width: 25px;}
		.level{color: #e25454;float: right;}
		.user{font-size: 22px;font-weight:2px;margin-left: 10px;}
		.info{color:#9b9a9a;}

		.row4{border-bottom: 1px solid #e6e8e1;padding: 10px;}

		.row4>div{height: 40px;line-height: 40px;width: 100%;}
</style>